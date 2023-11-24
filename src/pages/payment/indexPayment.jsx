import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import Tabel from "@/components/table/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function IndexPayment() {
  const data = [
    {
      No: 1,
      Pelanggan: (
        <Link to="/pembayaran/konfirmasi-pembayaran">Dimas Bayuwangis</Link>
      ),
      Tanggal: "12-09-2023",
      TotalPembayaran: 500000,
      Status: <p className=" text-secondary-green">Konfirmasi</p>,
    },
    {
      No: 1,
      Pelanggan: (
        <Link to="/pembayaran/konfirmasi-pembayaran">Dimas Bayuwangis</Link>
      ),
      Tanggal: "12-09-2023",
      TotalPembayaran: 500000,
      Status: <p className=" text-[#DC9B09]">Menunggu Konfirmasi</p>,
    },
  ];

  const columns = [
    { Header: "NO", accessor: "No" },
    { Header: "Pelanggan", accessor: "Pelanggan" },
    { Header: "Tanggal", accessor: "Tanggal" },
    { Header: "Total Pembayaran", accessor: "TotalPembayaran" },
    { Header: "Status", accessor: "Status" },
  ];

  return (
    <>
      <Layout>
        <Breadcrumbs pages="Pembayaran" />
        <div className=" flex items-center justify-between gap-5 mt-14 mb-10 w-full">
          <div className="flex items-center gap-5 w-1/2">
            <div className=" relative w-full ">
              <Input
                placeholder="Cari Pelanggan"
                type="text"
                className=" border-primary-green py-6"
              />
              <svg
                className="absolute right-3 top-4 text-primary-green"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2892 8.97102C11.7427 8.12671 12 7.16127 12 6.13574C12 2.82203 9.31371 0.135742 6 0.135742C2.68629 0.135742 0 2.82203 0 6.13574C0 9.44945 2.68629 12.1357 6 12.1357C7.56425 12.1357 8.98868 11.5371 10.0567 10.5565L12.2421 12.596C12.6458 12.9728 13.2786 12.9509 13.6554 12.5472C14.0322 12.1434 14.0104 11.5106 13.6066 11.1338L11.2892 8.97102ZM6 10.0357C3.84609 10.0357 2.1 8.28965 2.1 6.13574C2.1 3.98183 3.84609 2.23574 6 2.23574C8.15391 2.23574 9.9 3.98183 9.9 6.13574C9.9 8.28965 8.15391 10.0357 6 10.0357Z"
                  fill="#25745A"
                />
              </svg>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-between items-center rounded-md bg-white py-3 px-3 border border-primary-green gap-20">
                <p className="text-primary-green">Filter</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                >
                  <path
                    d="M5 4L0.669872 0.25L9.33013 0.25L5 4Z"
                    fill="#257157"
                  />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>apa</DropdownMenuItem>
                <DropdownMenuItem>apa</DropdownMenuItem>
                <DropdownMenuItem>apa</DropdownMenuItem>
                <DropdownMenuItem>apa</DropdownMenuItem>
                <DropdownMenuItem>apa</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <div className="flex gap-5">
              <div className="flex items-center gap-3">
                <p className=" text-gray-300">Data Untuk</p>
                <SlCalender />
              </div>
              <DropdownMenu className="flex">
                <DropdownMenuTrigger className="flex justify-between items-center gap-3">
                  <p>Bulan Ini</p>
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
                  <DropdownMenuItem>apa</DropdownMenuItem>
                  <DropdownMenuItem>apa</DropdownMenuItem>
                  <DropdownMenuItem>apa</DropdownMenuItem>
                  <DropdownMenuItem>apa</DropdownMenuItem>
                  <DropdownMenuItem>apa</DropdownMenuItem>
                  <DropdownMenuItem>apa</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div>
          <Tabel columns={columns} data={data} />
        </div>
      </Layout>
    </>
  );
}
