import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import { FiSearch } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import Button from "@/components/button";
import { Input } from "@/components/ui/input";
import Modal from "react-modal";
import PopUp from "./popUp";
import Tabel from "@/components/table/table";
import Delete from "../../components/delete/delete";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCategory, deleteCategory } from "@/utils/api/category/api";
import Pagination from "@/components/pagenation";
import { Loading } from "@/components/loading";
import { useSearchParams } from "react-router-dom";

Modal.setAppElement("#root");

export default function IndexCategory() {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputName, setInputName] = useState("");
  const [file, setFile] = useState(null);
  const [popupLabel, setPopupLabel] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  async function fetchData() {
    let query = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }
    try {
      setIsLoading(true);
      const result = await getCategory({ ...query });
      const { ...rest } = result.meta;
      setCategories(result.data);
      setMeta(rest);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

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

  async function onClickDelete(id) {
    try {
      const result = await Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });

      if (result.isConfirmed) {
        await deleteCategory(id);
        toast({
          title: (
            <div className="flex items-center">
              <FaRegCheckCircle />
              <span className="ml-2">Berhasil Menghapus Category! </span>
            </div>
          ),
          description:
            "Data category telah berhasil dihapus, nih. Silahkan nikmati fitur lainnya!",
        });
        fetchData();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menghapus Category!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penghapusan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    }
  }

  function handlePrevNextPage(page) {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  }

  const columns = [
    { Header: "No", accessor: "id" },
    {
      Header: "Foto",
      accessor: "photo",
      Cell: ({ row }) => (
        <img
          src={row.original.photo}
          alt="Product"
          className="w-20 h-28 rounded block m-auto"
        />
      ),
    },
    { Header: "Nama", accessor: "name" },
    {
      Header: "Jumlah Produk",
      accessor: "total_product",
      Cell: ({ row }) => (
        <div className="flex items-center justify-between">
          <div className="text-center">{row.original.total_product}</div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="three-dots ">
                <PiDotsThreeVerticalBold />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                className=" hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center"
                onClick={() => openModal("Edit Kategori", row.original.id)}
                style={{ cursor: "pointer" }}
              >
                <BiEdit />
                Edit Kategori
              </DropdownMenuItem>
              <DropdownMenuItem
                className=" hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center"
                onClick={() => onClickDelete(row.original.id)}
              >
                <RiDeleteBinLine />
                Delete Kategori
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
        <Breadcrumbs pages="Kategori Produk" />

        <div className="justify-between  mt-6  py-5">
          <div className="flex items-center pb-7 gap-6">
            <Button
              label="Tambah Kategori"
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
              onClick={() => openModal("Tambah Kategori")}
              className="flex items-center space-x-2 border bg-secondary-green text-white p-2 rounded-sm"
            />

            <div className="flex items-center w-64 relative">
              <Input
                type="text"
                placeholder="Cari Kategori"
                className="p-3 rounded pr-10 border-black"
              />
              <FiSearch className="absolute right-10 top-3" />
            </div>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-5">
              <Tabel columns={columns} data={categories} />
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
          popupLabel === "Tambah Kategori" ? "Nama Kategori" : "Nama data"
        }
        cancelButtonLabel="Batal"
        confirmButtonLabel={
          popupLabel === "Tambah Kategori" ? "Tambah" : "Edit"
        }
        onAddPopup={handlePopup}
        onNameChange={onNameChange}
        onFileChange={onFileChange}
        popupName={inputName}
      />
    </>
  );
}
