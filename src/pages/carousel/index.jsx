/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";

import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import Modal from "react-modal";

import { getAllCarousel, deleteCarousel } from "@/utils/api/carousel/api";
import Breadcrumbs from "@/components/breadcrumbs";
import Pagination from "@/components/pagenation";
import Delete from "@/components/delete/delete";
import { Loading } from "@/components/loading";
import { Input } from "@/components/ui/input";
import Tabel from "@/components/table/table";
import Layout from "@/components/layout";
import Button from "@/components/button";

import PopUp from "./popUp";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

Modal.setAppElement("#root");

export default function Carousel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [popupLabel, setPopupLabel] = useState("");
  const [inputName, setInputName] = useState("");
  const [carousel, setCarousel] = useState([]);
  const [file, setFile] = useState(null);
  const [meta, setMeta] = useState();

  useEffect(() => {
    const delayedFetchData = debounce(fetchData, 1000);
    delayedFetchData();

    return () => delayedFetchData.cancel();
  }, [searchParams]);

  const getSuggestions = useCallback(
    async function (query) {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      if (!query) {
        newSearchParams.delete("search");
      } else {
        newSearchParams.set("search", query);
        newSearchParams.delete("page");
      }

      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams]
  );

  async function fetchData() {
    let query = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }
    try {
      setIsLoading(true);
      const result = await getAllCarousel({ ...query });
      const { ...rest } = result.meta;
      setCarousel(result.data);
      setMeta(rest);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function onClickDelete(id) {
    try {
      const result = await Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });

      if (result.isConfirmed) {
        await deleteCarousel(id);
        toast({
          title: (
            <div className="flex items-center">
              <span className="ml-2">Berhasil Menghapus Carousel! </span>
            </div>
          ),
          description:
            "Data carousel berhasil dihapus, nih. Silahkan nikmati fitur lainnya!",
        });
        fetchData();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <span className="ml-2">Gagal Menghapus Carousel!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penghapusan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    }
  }

  function handlePrevNextPage(page) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", String(page));
    setSearchParams(newSearchParams);
  }

  function handleSearchInputParams(search) {
    setSearchValue(search);
    getSuggestions(search);
  }

  const formatNumber = (pageIndex, itemIndex) => {
    const itemsPerPage = meta?.per_page || 8;
    return pageIndex * itemsPerPage + itemIndex + 1;
  };


  const openModal = (label, data = null) => {
    setPopupLabel(label);
    setInputName(data ? data.Nama : "");
    setFile(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePopup = (popupName, file) => {
    closeModal();
  };

  const onNameChange = (value) => {
    setInputName(value);
  };

  const onFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const columns = [
    { Header: "No", accessor: (_, index) => formatNumber(meta?.current_page - 1, index), },
    {
      Header: "Foto",
      accessor: "photo",
      Cell: ({ row }) => (
        <img
          src={row.original.photo}
          alt="Product"
          className="w-20 h-28 rounded m-auto object-cover"
        />
      ),
    },
    {
      Header: "Nama",
      accessor: "name",
      Cell: ({ row }) => (
        <div className="Nama-cell flex items-center justify-between">
          <div className="text-center">{row.original.name}</div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="three-dots">
                <PiDotsThreeOutlineVerticalFill />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                className=" hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center"
                onClick={() => openModal("Edit Carousel", row.original.id)}
                style={{ cursor: "pointer" }}
              >
                <BiEdit />
                Edit Carousel
              </DropdownMenuItem>
              <DropdownMenuItem
                className=" hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center"
                onClick={() => onClickDelete(row.original.id)}
              >
                <RiDeleteBinLine />
                Delete Carousel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <Breadcrumbs pages="Carousel" />

        <div className="justify-between  mt-6  py-5">
          <div className="flex items-center pb-7 gap-6">
            <Button
              label="Tambah Carousel"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                    fill="white"
                  />
                  <path
                    d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                    fill="white"
                  />
                </svg>
              }
              onClick={() => openModal("Tambah Carousel")}
              className="flex items-center space-x-2 border bg-secondary-green text-white p-2 rounded-sm"
            />

            <div className="flex items-center w-64 relative">
              <Input
                type="text"
                placeholder="Cari Carousel"
                className="border-primary-green pr-36 placeholder:text-left"
                icon={<FiSearch />}
                value={searchValue}
                onChange={(e) => handleSearchInputParams(e.target.value)}
              />
            </div>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-5">
              <Tabel columns={columns} data={carousel} />
              <Pagination
                meta={meta}
                onClickPrevious={() =>
                  handlePrevNextPage(meta?.current_page - 1)
                }
                onClickNext={() => handlePrevNextPage(meta?.current_page + 1)}
                onClickPage={(page) => handlePrevNextPage(page)}
              />
            </div>
          )}
        </div>
      </Layout>

      <PopUp
        isOpen={isModalOpen}
        closeModal={closeModal}
        popupLabel={popupLabel}
        placeholder={
          popupLabel === "Tambah Carousel" ? "Nama Carousel" : "Nama Data"
        }
        cancelButtonLabel="Batal"
        confirmButtonLabel={
          popupLabel === "Tambah Carousel" ? "Tambah" : "Edit"
        }
        onAddPopup={handlePopup}
        onNameChange={onNameChange}
        onFileChange={onFileChange}
        popupName={inputName}
      />
    </>
  );
}
