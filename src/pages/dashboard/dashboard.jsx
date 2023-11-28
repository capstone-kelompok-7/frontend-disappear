/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import React from "react";

import DashboardDetail from "../../components/dashboard/dashboardDetail";
import DashboardIcon from "../../components/dashboard/dashboardIcon";
import Layout from "../../components/layout";
import Tabel from "@/components/table/table";

import IconWallet from "../../assets/icon-wallet.svg";
import IconBasket from "../../assets/icon-basket.svg";
import IconUsers from "../../assets/icon-users.svg";
import IconNotes from "../../assets/icon-note.svg";
import IconHero from "../../assets/icon-hero.svg";

export default function Dashboard() {
  const data = {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: "",
        data: [20, 60, 40, 80, 30],
        fill: false,
        borderColor: "#25745A",
        pointBackgroundColor: "#AF8050",
        tension: "0.4",
        backgroundColor: "#AF8050",
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
        title: {
          display: true,
          text: "Minggu",
        },
      },
      y: {
        ticks: {
          maxTicksLimit: 6,
        },
        title: {
          display: true,
          text: "gram",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (tooltipItem) => `Minggu Ke- ${tooltipItem[0].label}`,
          label: (tooltipItem) => `${tooltipItem.formattedValue} gram`,
        },
      },
    },
    maintainAspectRatio: false,
    aspectRatio: 2,
  };

  const chartStyle = {
    maxHeight: "60vh",
  };
  const classNameTr = "bg-blue-700 text-black";
  const classNameTh =
    "bg-blue-700 px-6 py-3 text-center font-semibold text-black";

  const transactionData = [
    {
      Nama: "Dimas Banyuwangis",
      Tanggal: "24-11-2023",
      TotalPembayaran: "Rp.200.000",
      StatusDashboard: "Konfirmasi",
    },
    {
      Nama: "Dimas Banyuwangis",
      Tanggal: "24-11-2023",
      TotalPembayaran: "Rp.200.000",
      StatusDashboard: "Menunggu Konfirmasi",
    },
  ];

  const columns = [
    { Header: "Nama", accessor: "Nama" },
    { Header: "Tanggal", accessor: "Tanggal" },
    { Header: "Total Pembayaran", accessor: "TotalPembayaran" },
    { Header: "Status", accessor: "StatusDashboard" },
  ];

  return (
    <Layout>
      <div className=" w-full h-full">
        {/* Hero Section */}
        <div className="flex flex-col bg-[#EFE5DC] relative pb-[10vh] pl-10 rounded-b-2xl">
          {/* Section 1 - Hero */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-3xl text-primary-green">
                Selamat Datang!!!
              </h1>
              <p className=" text-primary-green">
                Saat ini anda berada di halaman dashboard
              </p>
            </div>
            <div>
              <img src={IconHero} className=" w-5/6" />
            </div>
          </div>
          {/* Section 2 - Icon Section */}
          <div className="flex absolute top-1/2 w-full max-w-[70vw] pr-10 mt-6">
            <div className="flex items-center justify-center w-full gap-8">
              <DashboardIcon
                iconSrc={IconWallet}
                title="Pendapatan Bulan Ini"
                value="Rp 7.000.000"
              />
              <DashboardIcon iconSrc={IconBasket} title="Produk" value="20" />
              <DashboardIcon iconSrc={IconUsers} title="Pelanggan" value="10" />
              <DashboardIcon iconSrc={IconNotes} title="Pesanan" value="30" />
            </div>
          </div>
        </div>

        {/* Section 3 - Statistic Section */}
        <div className="px-5 py-6 mt-20 shadow-lg rounded-lg">
          <h1 className=" font-semibold text-3xl mb-2">
            Statistik Gram Plastik
          </h1>
          <Line
            data={data}
            options={options}
            style={chartStyle}
            className="bg-[#F4FBF9] rounded-2xl py-10"
          />
        </div>

        {/* Section 4 - Transaction Section */}
        <div className="px-5 py-6 mt-20 shadow-lg rounded-lg">
          <h1 className="font-semibold text-2xl mb-5 ">Transaksi Terakhir</h1>
          <div>
            <Tabel columns={columns} data={transactionData} dashboardTable={true} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
