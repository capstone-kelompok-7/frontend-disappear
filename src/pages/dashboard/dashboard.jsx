/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import React from "react";

import DashboardDetail from "../../components/dashboard/dashboardDetail";
import DashboardIcon from "../../components/dashboard/dashboardIcon";
import Layout from "../../components/layout";

import IconWallet from "../../assets/icon-wallet.webp";
import IconBasket from "../../assets/icon-basket.webp";
import IconUsers from "../../assets/icon-users.webp";
import IconNotes from "../../assets/icon-note.webp";

export default function Dashboard() {
  const data = {
    labels: ["Mei", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Total Gram",
        data: [200, 300, 200, 400, 300, 500],
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
          maxTicksLimit: 6,
        },
        title: {
          display: true,
          text: "gram",
        },
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    aspectRatio: 2,
  };

  const handleDelete = () => {
    Delete({
      title: "Yakin mau hapus data?", // You can customize the title
      text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!", // You can customize the text
    });
  };

  return (
    <Layout>
      <div className=" my-5 h-full">
        <h1 className="font-bold text-3xl">Dasbor</h1>

        {/* Icon Section */}
        <div className="flex gap-8 mt-5">
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
          <div className="">
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

          <div className="bg-[#F5F5F5] mx-auto h-[55vh] px-5 pt-4 pb-20">
            <h1 className="font-bold">Statistik Gram Plastik</h1>
            <p>Jangka Waktu Jul-Okt 2023</p>
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
