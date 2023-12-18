/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

import { BiEdit, BiTrash, BiDotsVertical } from "react-icons/bi";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { getAllCarousel, deleteCarousel } from "@/utils/api/carousel/api";
import { useToast } from "@/components/ui/use-toast";
import Breadcrumbs from "@/components/breadcrumbs";
import Pagination from "@/components/pagenation";
import Delete from "@/components/delete/delete";
import { Loading } from "@/components/loading";
import { Input } from "@/components/ui/input";
import Tabel from "@/components/table/table";
import Layout from "@/components/layout";
import Button from "@/components/button";

import PopUp from "./caraouselModal";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Carousel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [forceFetch, setForceFetch] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [carousel, setCarousel] = useState([]);
  const [meta, setMeta] = useState();

  const { toast } = useToast();

  useEffect(() => {
    const delayedFetchData = debounce(fetchData, 1000);
    delayedFetchData();

    return () => delayedFetchData.cancel();
  }, [searchParams]);

  useEffect(() => {
    fetchData();
  }, [window.location.pathname, forceFetch]);

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
    [searchValue, searchParams, setSearchParams]
  );

  async function fetchData() {
    setIsLoading(true);
    let query = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }
    try {
      const result = await getAllCarousel({ ...query });
      const searchData = result.data
        ? result.data.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : [];
      const { ...rest } = result.meta;
      setCarousel(searchData);
      setMeta(rest);
      setSelectedId(null)
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Mencari data Carousel!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses pencarian data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function onClickDelete(id) {
    setIsLoading(true);
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
              <FaRegCheckCircle />
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
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menghapus Carousel!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penghapusan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function onClickEdit(id) {
    setSelectedId(id);
    document.getElementById("my_modal_5").showModal();
  }

  function handleSearchInputParams(search) {
    setSearchValue(search);
    getSuggestions(search);
  }

  function handleForceFetch() {
    setForceFetch((prev) => !prev);
  }

  function handlePrevNextPage(page) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", String(page));
    setSearchParams(newSearchParams);
  }

  const formatNumber = (pageIndex, itemIndex) => {
    const itemsPerPage = meta?.per_page || 8;
    return pageIndex * itemsPerPage + itemIndex + 1;
  };

  const columns = [
    {
      Header: "No",
      accessor: (_, index) => formatNumber(meta?.current_page - 1, index),
    },
    {
      Header: "Foto",
      accessor: "photo",
      Cell: ({ row }) => (
        <img
          src={row.original.photo}
          alt="Product"
          className="h-20 w-36 rounded m-auto object-cover"
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
                <BiDotsVertical />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white"
                onClick={() => onClickEdit(row.original.id)}
                id="btn-edit"
              >
                <BiEdit />
                Edit Carousel
              </DropdownMenuItem>
              <DropdownMenuItem
                className=" hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center"
                onClick={() => onClickDelete(row.original.id)}
                id="btn-delete"
              >
                <BiTrash />
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
        <div className=" items-center flex  mt-6  py-5 gap-6">
          <Button
            label="Tambah Carousel"
            id="btn-modal"
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
            className=" bg-secondary-green text-white p-2 rounded-sm"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          />
          <div className="flex items-center w-64 relative">
            <Input
              type="text"
              placeholder="Cari Carousel"
              className="border-primary-green pr-36 placeholder:text-left"
              icon={<FiSearch />}
              value={searchValue}
              onChange={(e) => handleSearchInputParams(e.target.value)}
              id="searchCarousel"
            />
          </div>
          <PopUp
            handleForceFetch={handleForceFetch}
            selectedId={selectedId}
            data={carousel.find((item) => item.id === selectedId)}
          />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {carousel && carousel.length > 0 ? (
              <>
                <Tabel columns={columns} data={carousel} />
                <Pagination
                  meta={meta}
                  onClickPrevious={() =>
                    handlePrevNextPage(meta?.current_page - 1)
                  }
                  onClickNext={() => handlePrevNextPage(meta?.current_page + 1)}
                  onClickPage={(page) => handlePrevNextPage(page)}
                />
              </>
            ) : (
              <div className="text-center">
                <p>Data tidak ditemukan</p>
              </div>
            )}
          </>
        )}
      </Layout>
    </>
  );
}
