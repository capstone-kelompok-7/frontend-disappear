/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import React from "react";

import DashboardIcon from "../../components/dashboard/dashboardIcon";
import DashboardDetail from "../../components/dashboard/dashboardDetail";

import IconWallet from "../../assets/icon-wallet.webp";
import IconBasket from "../../assets/icon-basket.webp";
import IconUsers from "../../assets/icon-users.webp";
import IconNotes from "../../assets/icon-note.webp";

export default function dashboard() {
  const data = {
    labels: ["Mei", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Pendapatan",
        data: [70000, 100000, 80000, 120000, 90000, 150000],
        fill: false,
        borderColor: "black",
        pointBackgroundColor: "white",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "black",
        },
        
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
          maxTicksLimit: 6
        },
        
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    aspectRatio: 2,
  };

  return (
    <div className="mx-10 my-5">
      <h1 className="font-bold text-3xl">Dasbor</h1>

      {/* Icon Section */}
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

      {/* Detail Section */}
      <div className="flex mt-10 ">
        <div className="mr-10">
          <h1 className="font-bold text-2xl mb-5 ">Transaksi Terakhir</h1>
          <div className="flex flex-col">
            <DashboardDetail
              name="Dan Asaki"
              date="Sept 01, 2023"
              amount="150,000,00"
              status="Terkonfirmasi"
            />
            <DashboardDetail
              name="Dan Asaki"
              date="Sept 01, 2023"
              amount="150,000,00"
              status="Terkonfirmasi"
            />
            <DashboardDetail
              name="Dan Asaki"
              date="Sept 01, 2023"
              amount="150,000,00"
              status="Terkonfirmasi"
            />
            <DashboardDetail
              name="Dan Asaki"
              date="Sept 01, 2023"
              amount="150,000,00"
              status="Terkonfirmasi"
            />
          </div>
        </div>

        <div className="bg-[#F5F5F5] h-[50vh] px-5 pt-4 pb-20">
          <h1 className="font-bold">Statistik Gram Plastik</h1>
          <p>Jangka Waktu Jul-Okt 2023</p>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
