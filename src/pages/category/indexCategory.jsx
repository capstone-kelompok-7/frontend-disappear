import React from "react";
import Layout from "../../components/layout";
import { AiOutlinePlus } from "react-icons/ai";
import "daisyui/dist/full.css";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "react-modal";
import { useState } from "react";

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
        <div className="mt-6 mb-6 mx-10 px-[15px] py-5 shadow-md bg-white rounded-[5px]">
          <div className="flex justify-between pb-7">
            <button
              className="flex items-center space-x-2 border bg-neutral-400 text-white p-3 rounded-lg"
              onClick={openModal}
            >
              <AiOutlinePlus />
              <p>Tambah Kategori</p>
            </button>
          </div>
          <div className="w-full mx-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded- border border-neutral-500">
                <thead>
                  <tr className="bg-[#C7C7C7] text-black">
                    <th className="px-6 py-3 text-center font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      No
                    </th>
                    <th className="px-6 py-3 text-center font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      Nama
                    </th>
                    <th className="px-6 py-3 text-center font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      Jumlah Produk
                    </th>
                    <th className="px-6 py-3 text-center font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFFFFF]">
                    <td className="px-6 py-4 text-center whitespace-nowrap border border-neutral-500">
                      1
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap border border-neutral-500">
                      Aksesoris
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap border border-neutral-500">
                      200
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap border border-neutral-500">
                      <div className="flex justify-center items-center gap-x-5">
                        <div className="flex justify-center items-center relative gap-2.5 p-2.5 rounded-sm icon-white bg-[#414141]">
                          <BiEdit className="text-white" />
                        </div>
                        <div className="flex justify-center items-center relative gap-2.5 p-2.5 rounded-sm bg-[#414141]">
                          <RiDeleteBin5Line className="text-white" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="pagination flex justify-end border border-gray-300 rounded p-2">
            <ul class="flex space-x-2">
              <li>
                <a href="#" class="btn btn-sm btn-default">
                  Sebelumnya
                </a>
              </li>
              <li>
                <a href="#" class="btn btn-sm btn-default">
                  1
                </a>
              </li>
              <li>
                <span class="btn btn-sm btn-default btn-disabled">2</span>
              </li>
              <li>
                <a href="#" class="btn btn-sm btn-default">
                  3
                </a>
              </li>

              <li>
                <a href="#" class="btn btn-sm btn-default">
                  4
                </a>
              </li>
              <li>
                <a href="#" class="btn btn-sm btn-default">
                  5
                </a>
              </li>
              <li>
                <a href="#" class="btn btn-sm btn-default">
                  ...
                </a>
              </li>
              <li>
                <a href="#" class="btn btn-sm btn-default">
                  35
                </a>
              </li>
              <li>
                <a href="#" class="btn btn-sm btn-default">
                  Setelahnya
                </a>
              </li>
            </ul>
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
        <div
          className="flex items-center justify-center"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-md w-full p-6 space-y-6 rounded-xl shadow-lg bg-white">
            <div className="bg-white flex flex-col gap-20 w-full h-[400px] items-center px-12 py-20 rounded">
              <div className="text-3xl font-['Inter'] font-semibold tracking-[0.32] leading-[19.6px]">
                Tambah Kategori
              </div>
              <div className="self-stretch flex flex-col gap-16 h-40 shrink-0">
                <div className="border-solid bg-[#f5f5f5] flex flex-col justify-center pl-5 h-12 shrink-0 items-start border-black border rounded">
                  <div className="text-xl font-['Inter'] tracking-[0.2] leading-[19.6px] text-black/70">
                    Nama
                  </div>
                </div>
                <div className="flex flex-row justify-between items-start">
                  <div className="border-solid shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.15)] bg-white flex flex-col h-10 items-start pl-4 py-2 border-black border rounded">
                    <div className="text-xl font-['Inter'] tracking-[0.2] leading-[19.6px] mr-8">
                      <button onClick={closeModal}>Batal</button>
                    </div>
                  </div>
                  <div className="border-solid shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.15)] bg-[#949494] flex flex-col h-10 items-center py-2 border-black border rounded">
                    <div className="text-xl font-['Inter'] tracking-[0.2] leading-[19.6px] mx-8">
                      Tambah
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
