import React from "react";
import Layout from "@/components/layout";
import Button from "@/components/button";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Tabel from "@/components/table/table";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import Breadcrumbs from "@/components/breadcrumbs";
import Delete from "@/components/delete/delete";

function VoucherApp() {

  const handleDeleteClick = () => {
    Delete({
      title: "Yakin mau hapus data?",
      text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
    })
  };

  const data = [
    {
      No: 1,
      NamaKupon: "Hadiah dari Level Gold",
      Kode: "L00G1",
      Kategori: "GOLD",
      Diskon: 5000,
      TanggalMulai: "10-10-2023",
      TanggalBerakhir: "15-10-2023",
      Status: "Kadaluwarsa",
      
    },
  ];

  const columns = [
    { Header: "NO", accessor: "No" },
    { Header: "NAMA KUPON", accessor: "NamaKupon" },
    { Header: "KODE", accessor: "Kode" },
    { Header: "KATEGORI", accessor: "Kategori" },
    { Header: "DISKON", accessor: "Diskon" },
    { Header: "TANGGAL MULAI", accessor: "TanggalMulai" },
    { Header: "TANGGAL BERAKHIR", accessor: "TanggalBerakhir" },
    {
      Header: "STATUS",
      accessor: "status",
      Cell: ({ row }) => (
        <div>
          {row.original.Status}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="three-dots">
                <PiDotsThreeVerticalBold />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <Link to="/kupon/edit-kupon">
                <DropdownMenuItem>Detail</DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={handleDeleteClick}>Hapus</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <Breadcrumbs pages="Kupon" />

      <div className=" my-5 py-5 px-11 rounded-md shadow-lg border-2">
        <div className="flex justify-between items-center pb-5">
          <Link to="/kupon/buat-kupon">
            <Button
              label="Tambahkan Kupon"
              icon={<IoAddOutline />}
              className="bg-[#25745A] text-white py-3 px-5 rounded-lg"
            />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex justify-between items-center rounded-md bg-white py-3 px-3 border gap-20">
              <p>Filter</p>
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
              <DropdownMenuItem>Bronze</DropdownMenuItem>
              <DropdownMenuItem>Silver</DropdownMenuItem>
              <DropdownMenuItem>Gold</DropdownMenuItem>
              <DropdownMenuItem>Kadaluwarsa</DropdownMenuItem>
              <DropdownMenuItem>Belum Kadaluwarsa</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Tabel columns={columns} data={data} />
      </div>
    </Layout>
  );
}

export default VoucherApp;
