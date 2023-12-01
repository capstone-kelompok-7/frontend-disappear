import Layout from "../../components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import { FiSearch } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import Button from "@/components/button";
import { Input } from "@/components/ui/input";
import Modal from "react-modal";
import { useState } from "react";
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

Modal.setAppElement("#root");

export default function IndexCategory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputName, setInputName] = useState("");
  const [file, setFile] = useState(null);
  const [popupLabel, setPopupLabel] = useState("");

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

  const handleDelete = () => {
    Delete({
      title: "Yakin mau hapus data?",
      text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
    });
  };

  const data = [
    {
      No: 1,
      Foto: " ",
      Nama: "Aksesoris",
      JumlahProduk: "80",
    },
    {
      No: 2,
      Foto: " ",
      Nama: "Tas",
      JumlahProduk: "80",
    },
    {
      No: 3,
      Foto: " ",
      Nama: "Alat Makan",
      JumlahProduk: "80",
    },
  ];

  const columns = [
    { Header: "No", accessor: "No" },
    { Header: "Foto", accessor: "Foto" },
    { Header: "Nama", accessor: "Nama" },
    {
      Header: "Jumlah Produk",
      accessor: "JumlahProduk",
      Cell: ({ row }) => (
        <div className="JumlahProduk-cell flex items-center justify-between">
          <div className="text-center">{row.original.JumlahProduk}</div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="three-dots">
                <PiDotsThreeVerticalBold />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                className=" hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center"
                onClick={() => openModal("Edit Kategori", data[0])}
                style={{ cursor: "pointer" }}
              >
                <BiEdit />
                Edit Kategori
              </DropdownMenuItem>
              <DropdownMenuItem
                className=" hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center"
                onClick={handleDelete}
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

        <div className=" flex flex-col min-h-screen flex-grow overflow-y-auto mx-5 mt-6 px-3.5 py-5 shadow-md rounded-sm">
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

          <Tabel columns={columns} data={data} />
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
