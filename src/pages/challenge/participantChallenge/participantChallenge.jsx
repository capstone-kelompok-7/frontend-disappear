import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";

import Breadcrumbs from "@/components/breadcrumbs";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Layout from "@/components/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Tabel from "@/components/table/table";

export default function IndexPesertaTantangan() {
  const data = [
    {
      No: 1,
      UsernameInstagram: (
        <Link to="/peserta-tantangan/edit-peserta-tantangan">dimas829</Link>
      ),
      TanggalBerpartisipasi: "26-10-2023",
      EXP: 150,
      Status: "Tidak Valid",
    },
    {
      No: 2,
      UsernameInstagram: (
        <Link to="/peserta-tantangan/edit-peserta-tantangan">dimas829</Link>
      ),
      TanggalBerpartisipasi: "26-10-2023",
      EXP: 100,
      Status: "Valid",
    },
    {
      No: 3,
      UsernameInstagram: (
        <Link to="/peserta-tantangan/edit-peserta-tantangan">dimas829</Link>
      ),
      TanggalBerpartisipasi: "26-10-2023",
      EXP: 100,
      Status: "Menunggu Validasi",
    },
    {
      No: 4,
      UsernameInstagram: (
        <Link to="/peserta-tantangan/edit-peserta-tantangan">dimas829</Link>
      ),
      TanggalBerpartisipasi: "26-10-2023",
      EXP: 100,
      Status: "Valid",
    },
    {
      No: 5,
      UsernameInstagram: (
        <Link to="/peserta-tantangan/edit-peserta-tantangan">dimas829</Link>
      ),
      TanggalBerpartisipasi: "26-10-2023",
      EXP: 150,
      Status: "Tidak Valid",
    },
  ];

  const columns = [
    { Header: "No", accessor: "No" },
    { Header: "Username Instagram", accessor: "UsernameInstagram" },
    { Header: "Tanggal Berpartisipasi", accessor: "TanggalBerpartisipasi" },
    { Header: "EXP Tantangan", accessor: "EXP" },
    { Header: "Status", accessor: "Status" },
  ];

  return (
    <div className="flex">
      <Layout>
        <div className="my-6">
          <Breadcrumbs pages="Peserta Tantangan" />
        </div>

        <div className="mx-10 px-[15px] py-5 shadow-md bg-white rounded-[5px]">
          <div className="flex justify-between items-center mb-7">
            <div>
              <p className="font-semibold text-3xl">Semua Peserta</p>
            </div>

            <div className="flex space-x-4">
              <div className="flex items-center space-x-3">
                <p>Data Untuk</p>
                <div className="flex items-center">
                  <MdOutlineCalendarMonth size={30} />
                  <Select>
                    <SelectTrigger className="border-none pr-0">
                      <SelectValue placeholder="Bulan ini" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BulanIni">Bulan ini</SelectItem>
                      <SelectItem value="MingguIni">Minggu ini</SelectItem>
                      <SelectItem value="HariIni">Hari ini</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

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
                  <DropdownMenuItem>Valid</DropdownMenuItem>
                  <DropdownMenuItem>Tidak Valid</DropdownMenuItem>
                  <DropdownMenuItem>Menunggu Validasi</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Tabel columns={columns} data={data} />
        </div>
      </Layout>
    </div>
  );
}
