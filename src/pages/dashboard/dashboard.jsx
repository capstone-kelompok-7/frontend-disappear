/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CrossCircledIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import DashboardIcon from "../../components/dashboard/dashboardIcon";
import {
  getDashboardCard,
  getDashboardChart,
  getDashboardTransaction,
} from "@/utils/api/dashboard/api";
import formatCurrency from "@/utils/formatter/currencyIdr";
import { Loading } from "@/components/loading";

import Tabel from "@/components/table/table";
import Layout from "@/components/layout";

import IconWallet from "../../assets/icon-wallet.svg";
import IconBasket from "../../assets/icon-basket.svg";
import IconUsers from "../../assets/icon-users.svg";
import IconNotes from "../../assets/icon-note.svg";
import IconHero from "../../assets/icon-hero.svg";

export default function Dashboard() {
  const [dashboardCard, setDashboardCard] = useState({});
  const [transaction, setTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        fill: false,
        borderColor: "#25745A",
        pointBackgroundColor: "#AF8050",
        tension: "0.4",
        backgroundColor: "#AF8050",
      },
    ],
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const cardResult = await getDashboardCard();
      const chartResult = await getDashboardChart();
      const transactionResult = await getDashboardTransaction();

      setDashboardCard(cardResult.data);
      setTransaction(transactionResult.data);

      const chartLabels = chartResult.data.map((entry) => entry.week);
      const chartDataPoints = chartResult.data.map(
        (entry) => entry.gram_total_count
      );

      setChartData({
        labels: chartLabels,
        datasets: [
          {
            label: "",
            data: chartDataPoints,
            fill: false,
            borderColor: "#25745A",
            pointBackgroundColor: "#AF8050",
            tension: "0.4",
            backgroundColor: "#AF8050",
          },
        ],
        label: chartResult.label,
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

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
          display: false,
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

  const columns = [
    {
      Header: "Nama",
      accessor: "username",
      Cell: ({ row }) => (
        <div className="flex items-start">
          <p className="text-sm ml-2">{row.original.username}</p>
        </div>
      ),
    },
    { Header: "Tanggal", accessor: "date" },
    {
      Header: "Total Pembayaran",
      accessor: "total_price",
      Cell: ({ row }) => <p>{formatCurrency(row.original.total_price)}</p>,
    },
    {
      Header: "Status",
      accessor: "payment_status",
      Cell: ({ row }) => (
        <div className="flex items-center">
          <div
            className={`rounded-full w-4 h-4 ${
              row.original.payment_status === "Menunggu Konfirmasi"
                ? "bg-[#F7BC3B]"
                : row.original.payment_status === "Gagal"
                ? "bg-[#E50000]"
                : "bg-[#37FF33]"
            }`}
          ></div>
          <p className="text-sm ml-2">{row.original.payment_status}</p>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className="">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {/* Hero Section */}
            <div className="flex flex-col bg-[#EFE5DC] relative pb-[10vh] rounded-b-2xl">
              {/* Section 1 - Hero */}
              <div className="flex items-center justify-between pl-10">
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
              <div className="flex absolute top-1/2 mt-6 items-center justify-between w-full px-10">
                <div className="flex items-center justify-center w-full gap-8">
                  <DashboardIcon
                    iconSrc={IconWallet}
                    title="Pendapatan Bulan Ini"
                    value={formatCurrency(dashboardCard.income_count)}
                  />
                  <DashboardIcon
                    iconSrc={IconBasket}
                    title="Produk"
                    value={dashboardCard.product_count}
                    href="produk"
                  />
                  <DashboardIcon
                    iconSrc={IconUsers}
                    title="Pelanggan"
                    value={dashboardCard.user_count}
                    href="pelanggan"
                  />
                  <DashboardIcon
                    iconSrc={IconNotes}
                    title="Pesanan"
                    value={dashboardCard.order_count}
                    href="pesanan"
                  />
                </div>
              </div>
            </div>

            {/* Section 3 - Statistic Section */}
            <div className="px-5 py-6 mt-20 shadow-lg rounded-lg">
              <h1 className=" font-semibold text-3xl mb-2">
                Statistik Gram Plastik
              </h1>
              <p>{chartData.label}</p>
              <Line
                data={chartData}
                options={options}
                style={chartStyle}
                className="bg-[#F4FBF9] rounded-2xl py-10"
              />
            </div>

            {/* Section 4 - Transaction Section */}
            <div className="px-5 py-6 mt-20 shadow-lg rounded-lg mb-20">
              <h1 className="font-semibold text-2xl mb-5 ">
                Transaksi Terakhir
              </h1>
              <div>
                <Tabel
                  dashboardTable={true}
                  data={transaction}
                  columns={columns}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
