import React from "react";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Tabel from "@/components/table/table";
import { BiDotsVerticalRounded, BiEdit, BiTrash } from "react-icons/bi";

export default function IndexProducts() {
  const navigate = useNavigate();

  const toDetailProduct = () => {
    navigate("/produk/detail-produk");
  };

  const toEditProduct = () => {
    navigate("/produk/edit-produk");
  };
  const data = [
    {
      Foto: 1,
      NamaProduk: "Totebag",
      Kategori: "Bag, Alat Rumah tangga, Produk Ramah Lingkungan",
      Gram: 20,
      Stok: 140,
      Diskon: 50000,
      EXP: 15,
      Harga: 35000,
    },
    {
      Foto: 1,
      NamaProduk: "Totebag",
      Kategori: "Bag, Alat Rumah tangga, Produk Ramah Lingkungan",
      Gram: 20,
      Stok: 140,
      Diskon: 50000,
      EXP: 15,
      Harga: 35000,
    },
    {
      Foto: 1,
      NamaProduk: "Totebag",
      Kategori: "Bag, Alat Rumah tangga, Produk Ramah Lingkungan",
      Gram: 20,
      Stok: 140,
      Diskon: 50000,
      EXP: 15,
      Harga: 35000,
    },
    {
      Foto: 1,
      NamaProduk: "Totebag",
      Kategori: "Bag, Alat Rumah tangga, Produk Ramah Lingkungan",
      Gram: 20,
      Stok: 140,
      Diskon: 50000,
      EXP: 15,
      Harga: 35000,
    },
    {
      Foto: 1,
      NamaProduk: "Totebag",
      Kategori: "Bag, Alat Rumah tangga, Produk Ramah Lingkungan",
      Gram: 20,
      Stok: 140,
      Diskon: 50000,
      EXP: 15,
      Harga: 35000,
    },
    {
      Foto: 1,
      NamaProduk: "Totebag",
      Kategori: "Bag, Alat Rumah tangga, Produk Ramah Lingkungan",
      Gram: 20,
      Stok: 140,
      Diskon: 50000,
      EXP: 15,
      Harga: 35000,
    },
  ];

  const columns = [
    { Header: "Foto", accessor: "Foto" },
    { Header: "Nama Produk", accessor: "NamaProduk" },
    { Header: "Kategori", accessor: "Kategori" },
    { Header: "Gram", accessor: "Gram" },
    { Header: "Stok", accessor: "Stok" },
    { Header: "Diskon", accessor: "Diskon" },
    { Header: "EXP", accessor: "EXP" },
    {
      Header: "Harga",
      accessor: "Harga",
      Cell: ({ row }) => (
        <div className="flex justify-between items-center">
          <p>{row.original.Harga}</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BiDotsVerticalRounded />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <Link onClick={toDetailProduct}>
                <DropdownMenuItem className=" bg-secondary-green cursor-pointer justify-between items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                  >
                    <path
                      d="M7.5 3.76923C6.51897 3.76923 5.72368 4.54412 5.72368 5.5C5.72368 6.45588 6.51897 7.23077 7.5 7.23077C8.48103 7.23077 9.27632 6.45588 9.27632 5.5C9.27632 4.54412 8.48103 3.76923 7.5 3.76923Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.5 0.5C5.43334 0.5 3.57474 1.30876 2.23549 2.31027C1.56499 2.81168 1.01482 3.36856 0.628808 3.91052C0.250153 4.44216 0 5.00118 0 5.5C0 5.99882 0.250153 6.55784 0.628808 7.08948C1.01482 7.63144 1.56499 8.18832 2.23549 8.68973C3.57474 9.69124 5.43334 10.5 7.5 10.5C9.56666 10.5 11.4253 9.69124 12.7645 8.68973C13.435 8.18832 13.9852 7.63144 14.3712 7.08948C14.7498 6.55784 15 5.99882 15 5.5C15 5.00118 14.7498 4.44216 14.3712 3.91052C13.9852 3.36856 13.435 2.81168 12.7645 2.31027C11.4253 1.30876 9.56666 0.5 7.5 0.5ZM4.53947 5.5C4.53947 3.90687 5.86495 2.61538 7.5 2.61538C9.13505 2.61538 10.4605 3.90687 10.4605 5.5C10.4605 7.09313 9.13505 8.38462 7.5 8.38462C5.86495 8.38462 4.53947 7.09313 4.53947 5.5Z"
                      fill="white"
                    />
                  </svg>

                  <p className=" text-white">Detail Produk</p>
                </DropdownMenuItem>
              </Link>
              <Link onClick={toEditProduct}>
                <DropdownMenuItem className=" bg-secondary-green cursor-pointer justify-between items-center">
                  <BiEdit className=" text-white" />
                  <p className=" text-white">Edit Produk</p>
                </DropdownMenuItem>
              </Link>
              <Link>
                <DropdownMenuItem className=" bg-secondary-green cursor-pointer justify-between items-center">
                  <BiTrash className=" text-white" />
                  <p className=" text-white">Hapus Produk</p>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <Breadcrumbs pages="Produk" />
        <div className=" flex justify-between items-center mt-10">
          <Link
            to="/produk/buat-produk"
            className=" font-medium text-sm rounded-md text-white bg-primary-green px-3 py-3 flex items-center justify-between gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                fill="white"
              />
              <path
                d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                fill="white"
              />
            </svg>
            Tambah Produk
          </Link>
          <div className=" flex gap-5 items-center justify-end w-1/2">
            <div className=" relative w-3/6">
              <Input
                type="text"
                placeholder="Cari Produk"
                className=" border-primary-green"
              />
              <svg
                className="absolute right-3 top-3 text-primary-green"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
                <p className=" text-primary-green">Filter</p>

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
                <DropdownMenuItem>Alat Rumah Tangga</DropdownMenuItem>
                <DropdownMenuItem>Produk Ramah Lingkungan</DropdownMenuItem>
                <DropdownMenuItem>Botol Air</DropdownMenuItem>
                <DropdownMenuItem>Bag</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="mt-5">
          <Tabel columns={columns} data={data} />
        </div>
      </Layout>
    </>
  );
}
