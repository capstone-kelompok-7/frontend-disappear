/* eslint-disable no-unused-vars */
import React from "react";

import DashboardIcon from "../../components/dashboard/dashboardIcon";
import DashboardDetail from "../../components/dashboard/dashboardDetail";

import IconWallet from "../../assets/icon-wallet.webp";
import IconBasket from "../../assets/icon-basket.webp";
import IconUsers from "../../assets/icon-users.webp";
import IconNotes from "../../assets/icon-note.webp";

export default function dashboard() {
  return (
    <div className="mx-10 my-5">
      <h1 className="font-bold text-3xl">Dasbor</h1>

      <div className="flex gap-10 mt-5">
        <DashboardIcon
          iconSrc={IconWallet}
          title="Pendapatan Terakhir"
          value="Rp 7.000.000"
        />
        <DashboardIcon iconSrc={IconBasket} title="Produk" value="20" />
        <DashboardIcon
          iconSrc={IconUsers}
          title="Pelanggan"
          value="10"
          className="py-6"
        />
        <DashboardIcon iconSrc={IconNotes} title="Pesanan" value="30" />
      </div>

      <h1 className="font-bold text-2xl mt-10">Transaksi Terakhir</h1>
      <div className="flex mt-5 ">
        <div className="flex flex-col">
          <DashboardDetail
            name="Dan Asaki"
            date="Sept 01, 2023"
            amount="150,000,00"
            status="Terkonfirmasi"
          />
        </div>
        <div>chart</div>
      </div>
    </div>
  );
}
