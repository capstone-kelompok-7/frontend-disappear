import React from "react";
import Layout from "../../components/layout";
import { AiOutlinePlus } from "react-icons/ai";
import "daisyui/dist/full.css";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "react-modal";
import { useState } from "react";
import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

Modal.setAppElement("#root");

export default function IndexCategory() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <Layout>
        <Breadcrumbs pages="Category" />

        <div className="mt-6 mb-6 mx-10 px-[15px] py-5 shadow-md bg-white rounded-[3px]">
          <div className="flex items-center pb-7 gap-6">
            <div>
              <Button
                label="Tambah Kategori"
                icon={<AiOutlinePlus />}
                onClick={openModal}
                className="flex items-center space-x-2 border bg-neutral-400 text-white p-2 rounded-[3px]"
              />
            </div>
            <div className="justify-items-start">
              <div className="flex items-center w-64">
                <Input
                  type="text"
                  placeholder="Cari Kategori"
                  className="p-3 rounded-[3px]"
                />
                <FiSearch className="absolute ml-56 " />
              </div>
            </div>
          </div>

          <div className="w-full mx-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded border border-neutral-500">
                <thead>
                  <tr className="bg-[#C7C7C7] text-black">
                    <th className="px-6 py-3 text-center font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      NO
                    </th>
                    <th className="px-6 py-3 text-center font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      FOTO
                    </th>
                    <th className="px-6 py-3 text-center font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      NAMA
                    </th>
                    <th className="px-6 py-3 text-center font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      JUMLAH PRODUK
                    </th>
                    <th className="px-6 py-3 text-center font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      AKSI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFFFFF]">
                    <td className="px-6 py-4 text-center whitespace-nowrap border border-neutral-500">
                      01
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap border border-neutral-500"></td>
                    <td className="px-6 py-4 text-left whitespace-nowrap border border-neutral-500">
                      Aksesoris
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap border border-neutral-500">
                      200
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap border border-neutral-500">
                      <div className="flex justify-center items-center gap-x-3">
                        <div className="flex justify-center items-center relative gap-2.5 p-2.5 rounded-[2px] icon-white bg-[#414141]">
                          <BiEdit className="text-white" />
                        </div>
                        <div className="flex justify-center items-center relative gap-2.5 p-2.5 rounded-[2px] bg-[#414141]">
                          <RiDeleteBin5Line className="text-white" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Tambah Kategori Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            background: "none",
            border: "none",
            overflow: "hidden",
          },
        }}
      >
        <div className="flex items-center justify-center font-poppins">
          <div className="max-w-md w-full p-6 space-y-6 rounded-xl shadow-lg bg-white">
            <div className="bg-white flex flex-col gap-4 w-full h-[400px] items-center px-12 py-20 rounded">
              <div className="text-3xl font-semibold tracking-[0.32] leading-[19.6px]">
                Tambahkan Kategori!
              </div>
              <div className="flex flex-col gap-4 w-full h-40 mt-10">
                <div>
                  <Input
                    type="string"
                    id="namakategori"
                    label="Nama Kategori"
                    placeholder="Nama Kategori"
                    required
                    className="w-full rounded-[2px] font-poppins"
                  />
                </div>
                <div>
                  <Input
                    type="file"
                    id="berkaskategori"
                    label="Berkas Kategori"
                    placeholder="Berkas Kategori"
                    required
                    className="w-full mt-3 rounded-[2px] font-poppins"
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between items-start gap-x-10 mt-10">
                <div className="border-solid shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.15)] bg-white flex flex-col h-10 items-center text-center pl-6 py-2 border-black border rounded-full">
                  <Button
                    className="text-xl font-semibold font-['Inter'] tracking-[0.2] leading-[19.6px] mr-8"
                    label="Batal"
                    onClick={closeModal}
                  />
                </div>
                <div className="border-solid shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.15)] bg-[#949494] flex flex-col h-10 items-center py-2  rounded-full">
                  <Button
                    type="submit"
                    className="text-xl text-white font-['Inter'] tracking-[0.2] leading-[19.6px] mx-8"
                    label="Tambah"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
