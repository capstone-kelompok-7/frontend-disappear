/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import Modal from "react-modal";

import Breadcrumbs from "@/components/breadcrumbs";
import Delete from "@/components/delete/delete";
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

export default function IndexPopup() {
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
      Nama: "Tantangan Baru",
    },
    {
      No: 2,
      Foto: " ",
      Nama: "Tas",
    },
    {
      No: 3,
      Foto: " ",
      Nama: "Alat Makan",
    },
  ];

  const columns = [
    { Header: "No", accessor: "No" },
    { Header: "Foto", accessor: "Foto" },
    {
      Header: "Nama",
      accessor: "Nama",
      Cell: ({ row }) => (
        <div className="Nama-cell flex items-center justify-between">
          <div className="text-center">{row.original.Nama}</div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="three-dots">
                <PiDotsThreeVerticalBold />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => openModal("Edit Carousel", data[0])}
                style={{ cursor: "pointer" }}
              >
                <BiEdit />
                Edit Carousel
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete}>
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

        <div className=" flex flex-col min-h-screen flex-grow overflow-y-auto mx-5 mt-6 px-[15px] py-5 shadow-md rounded-[3px]">
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
              className="flex items-center space-x-2 border bg-[#25745A] text-white p-2  rounded-[3px]"
            />

            <div className="flex items-center w-64 relative">
              <Input
                type="text"
                placeholder="Cari Carousel"
                className="p-3 rounded-[3px] pr-10"
              />
              <FiSearch className="absolute right-3 top-3" />
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
          popupLabel === "Tambahkan Carousel" ? "Nama Carousel" : "Nama Data"
        }
        cancelButtonLabel="Batal"
        confirmButtonLabel={
          popupLabel === "Tambahkan Carousel" ? "Edit" : "Tambah"
        }
        onAddPopup={handlePopup}
        onNameChange={onNameChange}
        onFileChange={onFileChange}
        popupName={inputName}
      />
    </>
  );
}
