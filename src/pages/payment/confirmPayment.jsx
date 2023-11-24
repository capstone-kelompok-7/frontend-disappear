import React from "react";
import { useNavigate } from "react-router-dom";

import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import Layout from "@/components/layout";
import { useToast } from "@/components/ui/use-toast";
import { FaRegCheckCircle } from "react-icons/fa";

export default function ConfirmPayment() {
  const { toast } = useToast();

  const navigate = useNavigate();

  // Code for handle Confirm Payment
  const handleConfirmPayment = () => {
    navigate("/pembayaran");
    toast({
      title: (
        <div className="flex items-center gap-3">
          <FaRegCheckCircle className="text-[#05E500] text-3xl" />
          <span className=" text-base font-semibold">
            Konfirmasi Pembayaran Berhasil!
          </span>
        </div>
      ),
      description:
        "Pembayaran telah berhasil dikonfimasi. Terima kasih atas kontribusinya!",
    });
  };

  return (
    <>
      <Layout>
        <Breadcrumbs pages="Pembayaran" />
        <div className="border border-black rounded mt-4 shadow">
          <p className="text-[#AF8050] text-sm font-semibold m-4">
            Informasi Pesanan{" "}
            <span className="text-[#AF8050] text-xl font-semibold">P001QW</span>
          </p>

          <div className="flex items-center justify-between  mx-6">
            <div className="flex items-center">
              <img
                src="/logoDisappear.png"
                alt="image-product"
                className=" w-16 h-20 rounded"
              />
              <div>
                <p className="mb-3">Alat makan sendok garpu ramah lingkungan</p>
                <p>ID : P001DR</p>
              </div>
            </div>
            <div className=" flex items-center gap-6">
              <div className="flex items-center">
                <p>Rp. 150.000 X 2</p>
              </div>
              <div>
                <p>300.000</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between  mx-6">
            <div className="flex items-center">
              <img
                src="/logoDisappear.png"
                alt="image-product"
                className=" w-16 h-20 rounded"
              />
              <div>
                <p className="mb-3">Alat makan sendok garpu ramah lingkungan</p>
                <p>ID : P001DR</p>
              </div>
            </div>
            <div className=" flex items-center gap-6">
              <div className="flex items-center">
                <p>Rp. 150.000 X 2</p>
              </div>
              <div>
                <p>300.000</p>
              </div>
            </div>
          </div>
          <hr className=" border-gray-300 mx-5" />

          <div className="flex items-center justify-between m-6">
            <p className="font-semibold text-[#AF8050]">Total Pembayaran</p>
            <p>Rp. 600.000</p>
          </div>
          <div className="flex items-center justify-between m-6">
            <p>Pengiriman ( Kelas Ekonomi )</p>
            <p>Rp. 60.000</p>
          </div>
          <div className="flex items-center justify-between m-6">
            <p>Pajak 12%</p>
            <p>Rp. 600.000</p>
          </div>
          <div className="flex items-center justify-between m-6">
            <p>Total Pembayaran</p>
            <p>Rp. 2.000</p>
          </div>
          <div className="flex items-center justify-between m-6">
            <p>Voucher</p>
            <p>Rp. 50.000</p>
          </div>
          <div className="flex items-center justify-between m-6">
            <p>Diskon Produk</p>
            <p>Rp. 5.000</p>
          </div>
          <div className="flex items-center justify-between m-6">
            <p className="font-semibold text-[#AF8050]">Total</p>
            <p>Rp. 607.000</p>
          </div>
          <hr className=" border-black mx-5" />
          <div className="flex items-center justify-between m-6">
            <p>Dibayar Oleh Pelanggan</p>
            <p>Rp. 607.000</p>
          </div>
        </div>

        <div className="border border-black rounded mt-4 shadow">
          <p className="text-[#AF8050] text-sm font-semibold m-4">
            Informasi Pembayaran
          </p>
          <div className="flex items-center justify-between m-6">
            <p>Transfer</p>
            <p>Rp. 607.000</p>
          </div>
          <div className="flex items-center justify-between m-6">
            <p>Tanggal</p>
            <p>12-03-2023</p>
          </div>
          <div className="flex items-center justify-between m-6">
            <p>Metode Pembayaran</p>
            <p>Transfer M-Banking</p>
          </div>
          <div className="flex items-center justify-between m-6">
            <p>Transfer Dari</p>
            <p>BCA a.n. Dimas Bayuwangis</p>
          </div>
        </div>
        <Button
          onClick={handleConfirmPayment}
          type="submit"
          label="Konfirmasi Pembayaran"
          className=" bg-primary-green w-full my-4 text-white py-6 rounded-md text-xl font-medium flex justify-center items-center"
        />
      </Layout>
    </>
  );
}
