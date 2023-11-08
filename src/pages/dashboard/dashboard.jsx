/* eslint-disable no-unused-vars */
import React from "react";

import IconWallet from "../../assets/icon-wallet.webp";
import IconBasket from "../../assets/icon-basket.webp";
import IconUsers from "../../assets/icon-users.webp";
import IconNotes from "../../assets/icon-note.webp";

export default function dashboard() {
  return (
    <div className="mx-10 my-5">
      <h1 className="font-bold text-3xl">Dasbor</h1>

      <div className="flex gap-10 mt-5">
        <div className="flex gap-5 items-center shadow-lg py-2 pl-2 pr-5  rounded-lg">
          <div className="rounded-lg bg-[#D9D9D9] w-16 h-16 p-5 ">
            <img src={IconWallet} alt="" className="w-10" />
          </div>
          <div className="">
            <p className="text-xl">Pendapatan Terakhir</p>
            <p className="text-2xl font-bold">Rp 7.000.000</p>
          </div>
        </div>

        <div className="flex gap-5 items-center shadow-lg py-2 pl-2 pr-10  rounded-lg">
          <div className="rounded-lg bg-[#D9D9D9] w-16 h-16 p-5 ">
            <img src={IconBasket} alt="" className=" w-10" />
          </div>
          <div className="">
            <p className="text-xl">Produk</p>
            <p className="text-2xl font-bold">20</p>
          </div>
        </div>

        <div className="flex gap-5 items-center shadow-lg py-2 pl-2 pr-10  rounded-lg">
          <div className="rounded-lg bg-[#D9D9D9] w-16 h-16 px-5 py-6 ">
            <img src={IconUsers} alt="" className="w-10" />
          </div>
          <div className="">
            <p className="text-xl">Pelanggan</p>
            <p className="text-2xl font-bold">10</p>
          </div>
        </div>

        <div className="flex gap-5 items-center shadow-lg py-2 pl-2 pr-10  rounded-lg">
          <div className="rounded-lg bg-[#D9D9D9] w-16 h-16 p-5 ">
            <img src={IconNotes} alt="" className="  " />
          </div>
          <div className="">
            <p className="text-xl">Pesanan</p>
            <p className="text-2xl font-bold">30</p>
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        <div className="flex">
          <h1 className="font-boldf">Transaksi Terakhir</h1>
        </div>
      </div>
    </div>
  );
}
