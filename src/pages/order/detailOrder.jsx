import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { BsX } from "react-icons/bs";
import Button from "@/components/button";

export default function DetailOrder() {
  return (
    <>
      <Layout>
        <Breadcrumbs pages="Detail Pesanan" />

        {/*DATA PESANAN*/}
        <div className="flex flex-col justify-start relative border shadow w-[714px] h-[255px] p-15 mt-4 border-gray-400 rounded-[5px] gap-15">
          <div className="flex">
            <p className="text-sm font-semibold m-4 text-secondary-green">
              Data Pesanan{" "}
              <span className="text-lg font-semibold text-secondary-green">
                P001QW
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between mx-6">
            <div className="flex items-center">
              <img
                src="rectangle-58.png"
                className="w-[60px] h-[70px] rounded-[5px]"
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
                className="w-[60px] h-[70px] rounded-[5px]"
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
        <div className="flex flex-col justify-start relative border shadow w-[714px] h-[303px] mt-4 border-gray-400 rounded-[5px]">
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
            <p>Pajak 12%</p>
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
        <div className="flex flex-col justify-start relative border shadow w-[713px] h-[196px] p-15 mt-4 border-gray-400 rounded-[5px] gap-15">
          <div className="flex flex-col justify-start items-start gap-[15px] p-[18px] rounded-[5px]">
            <div className="flex justify-start items-center relative gap-[480px]">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-primary-green">
                Detail Pembayaran
              </p>
              <div className="flex justify-center items-center relative gap-[558px] px-[15px] py-[5px] rounded-[5px] bg-secondary-green">
                <Button
                  label="View"
                  className="text-xs font-medium text-white"
                />
              </div>
            </div>
            <div className="flex text-xs justify-between relative gap-[558px]">
              <p>Transfer</p>
              <p>Rp. 607.000</p>
            </div>
            <div className="flex text-xs justify-between relative gap-[559px]">
              <p>Tanggal</p>
              <p>12-03-2023</p>
            </div>
            <div className="flex text-xs justify-between relative gap-[573px]">
              <p>Status</p>
              <p>Konfirmasi</p>
            </div>
            <div className="flex text-xs justify-between relative  gap-[433px]">
              <p>Transfer Dari</p>
              <p>BCA a.n. Dimas Bayuwangis</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
