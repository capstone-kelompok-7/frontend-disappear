import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { BsX } from "react-icons/bs";
import Button from "@/components/button";
import { FaUserCircle } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";

export default function DetailOrder() {
  return (
    <>
      <Layout>
        <Breadcrumbs pages="Detail Pesanan" />
        <div className="flex flex-row justify-between">
          <div className="flex justify-start flex-col">
            {/*DATA PESANAN*/}
            <div className="flex flex-col justify-start relative border shadow w-[940px] h-72 p-15 mt-4 border-gray-400 rounded-md gap-15">
              <div className="flex">
                <p className="text-sm font-semibold m-4 text-secondary-green">
                  Data Pesanan{"  "}
                  <span className="text-lg font-semibold text-secondary-green">
                    P001QW
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between mx-6">
                <div className="flex items-center">
                  <img
                    src="rectangle-58.png"
                    className="w-16 h-20 rounded-md"
                  />
                  <div>
                    <p className="text-sm mb-3 ps-2">
                      Alat makan sendok garpu ramah lingkungan
                    </p>
                    <p className="text-sm mb-3 ps-2">ID : P001DR</p>
                  </div>
                </div>
                <div className="flex text-sm items-center gap-6">
                  <div className="flex text-sm items-center">
                    <p className="text-sm mb-3">Rp. 150.000</p>
                    <p className="text-sm mb-3">
                      <BsX />
                    </p>
                    <p className="text-sm mb-3">2</p>
                  </div>
                  <div>
                    <p className="text-sm mb-3">Rp. 300.000</p>
                  </div>
                </div>
              </div>

              <hr className="my-4 ml-3 mr-3 border-gray-400" />

              <div className="flex items-center justify-between mx-6">
                <div className="flex items-center">
                  <img
                    src="rectangle-58.png"
                    className="w-16 h-20 rounded-md"
                  />
                  <div>
                    <p className="text-sm mb-3 ps-2">
                      Alat makan sendok garpu ramah lingkungan
                    </p>
                    <p className="text-sm mb-3 ps-2">ID : P001DR</p>
                  </div>
                </div>
                <div className="flex text-sm items-center gap-6">
                  <div className="flex text-sm items-center">
                    <p className="text-sm mb-3">Rp. 150.000</p>
                    <p className="text-sm mb-3">
                      <BsX />
                    </p>
                    <p className="text-sm mb-3">2</p>
                  </div>
                  <div>
                    <p className="text-sm mb-3">Rp. 300.000</p>
                  </div>
                </div>
              </div>
            </div>

            {/*TOTAL PEMBAYARAN*/}
            <div className="flex flex-col justify-start relative border shadow w-[940px] h-72 mt-4 border-gray-400 rounded-md">
              <div className="flex items-center justify-between m-6">
                <p className="font-semibold justify-between text-sm text-primary-green">
                  Total Pembayaran
                </p>
                <p className="text-sm">Rp. 600.000</p>
              </div>
              <div className="flex items-center text-sm justify-between mb-3 mx-6">
                <p>Pengiriman (Kelas Ekonomi)</p>
                <p>Rp. 60.000</p>
              </div>
              <div className="flex items-center text-sm justify-between mb-3 mx-6">
                <p>Biaya Admin</p>
                <p>Rp. 2.000</p>
              </div>
              <div className="flex items-center text-sm justify-between mb-3 mx-6">
                <p>Voucher</p>
                <p>Rp. 50.000</p>
              </div>
              <div className="flex items-center text-sm justify-between mb-3 mx-6">
                <p>Diskon Produk</p>
                <p>Rp. 5.000</p>
              </div>
              <div className="flex items-center text-sm justify-between mb-1 mx-6">
                <p className=" font-semibold text-primary-green">Total</p>
                <p> Rp. 607.000</p>
              </div>
              <hr className="my-3 ml-5 mr-5 mb-3 border-gray-400" />
              <div className="flex items-center text-sm justify-between mb-2 mx-6">
                <p> Dibayar Oleh Pelanggan</p>
                <p> Rp. 607.000</p>
              </div>
            </div>

            {/*DETAIL PEMBAYARAN*/}
            <div className="flex flex-col justify-start relative border shadow w-[940px] h-48 p-15 mt-4 border-gray-400 rounded-md">
              <div className="flex flex-col justify-start items-start gap-4 p-4">
                <div className="flex justify-start items-center gap-[480px]">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-primary-green">
                    Detail Pembayaran
                  </p>
                  <div className="flex justify-center items-center gap-[558px] px-3.5 py-1.5 rounded bg-secondary-green">
                    <Button
                      label="View"
                      className="text-xs font-medium text-white"
                    />
                  </div>
                </div>
                <div className="flex text-xs justify-between gap-[558px]">
                  <p>Transfer</p>
                  <p>Rp. 607.000</p>
                </div>
                <div className="flex text-xs justify-between gap-[559px]">
                  <p>Tanggal</p>
                  <p>12-03-2023</p>
                </div>
                <div className="flex text-xs justify-between gap-[573px]">
                  <p>Status</p>
                  <p>Konfirmasi</p>
                </div>
                <div className="flex text-xs justify-between gap-[433px]">
                  <p>Transfer Dari</p>
                  <p>BCA a.n. Dimas Bayuwangis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start flex-col">
            {/*Catatan*/}
            <div className="flex flex-col justify-start relative border shadow w-[485px] h-[110px] p-15 mt-4 ml-10 border-gray-400 rounded-md">
              <div className="flex items-center m-6">
                <p className="font-semibold text-sm text-primary-green">
                  Catatan
                </p>
              </div>
              <div className="flex items-center text-sm mb-3 mx-6">
                <p>Tidak ada catatan dari customer</p>
              </div>
            </div>

            {/*Info Pelanggan*/}
            <div className="flex flex-col justify-start relative border shadow w-[485px] h-[360px] p-15 mt-4 ml-10 border-gray-400 rounded-md">
              <div className="flex items-center justify-between mt-6 ml-6 mr-6">
                <p className="font-semibold text-sm text-primary-green">
                  Pelanggan
                </p>
                <FaUserCircle size={45} className="mr-6" />
              </div>
              <div className="flex flex-col gap-3 ml-6">
                <div className="flex items-center mt-3 ">
                  <p className="font-semibold text-sm text-primary-green">
                    Nama
                  </p>
                </div>
                <div className="flex text-sm mt-1 ">
                  <p>Dimas Bayuwangis</p>
                </div>
                <div className="flex items-center ">
                  <p className="font-semibold text-sm text-primary-green">
                    Kontak Informasi
                  </p>
                </div>
                <div className="flex text-sm mt-1">
                  <p>dimasbayuwangis05@gmail.com</p>
                </div>
                <div className="flex items-center ">
                  <p className="font-semibold text-sm text-primary-green">
                    Alamat Pengiriman
                  </p>
                </div>
                <div className="flex text-sm mt-1">
                  <p>
                    Jl. Raya By Pass KM.48, Mergelo, Gn. Gedangan, Kec.
                    Magersari, Kota Mojokerto, Jawa Timur 61315
                  </p>
                </div>
                <div className="flex text-sm">
                  <p>Kode Pos 725480</p>
                </div>
              </div>
            </div>

            {/*Status Pesanan*/}
            <div className="flex flex-col justify-start relative border shadow w-[485px] h-[355px] p-15 mt-4 ml-10 border-gray-400 rounded-md">
              <div className="flex items-center m-6">
                <p className="font-semibold text-sm text-primary-green">
                  Status Pesanan
                </p>
              </div>
              <div className="flex flex-col mt-2 gap-4 ml-6">
                <div className="flex justify-between items-center">
                  <p className="text-sm">Tanggal</p>
                  <Input
                    type="date"
                    name="deadline-tantangan"
                    className="block w-[290px] rounded-md border border-[#5D5D5D] py-1 px-4 mr-6 text-muted-foreground"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm">Status Pesanan</p>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex w-[290px] justify-between h-[40px] items-center rounded-md bg-white py-2 px-4 border border-[#5D5D5D] gap-35 mr-6">
                      <p className="text-xs text-muted-foreground">Status</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                      >
                        <path
                          d="M5 4.5L0.669872 0.75L9.33013 0.75L5 4.5Z"
                          fill="#373737"
                        />
                      </svg>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                      <DropdownMenuItem>??</DropdownMenuItem>
                      <DropdownMenuItem>??</DropdownMenuItem>
                      <DropdownMenuItem>??</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm">Ekstra Info</p>
                  <Textarea
                    id="status-pesanan"
                    name="status-pesanan"
                    placeholder="Pesanan anda dalam perjalanan menuju kota Bandung."
                    className="p-3 mt-3 block w-[290px] h-[57px] text-xs border border-black rounded-md resize-none mr-6"
                  />
                </div>
                <div className="flex flex-row justify-end gap-7 mr-6">
                  <Button
                    label="Batal"
                    className="rounded bg-white border border-primary-green text-primary-green py-3 px-5 items-center font-semibold"
                  />
                  <Button
                    label="Kirim"
                    className="rounded bg-primary-green text-white py-3 px-5 items-center font-semibold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
