import { BiEdit } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

import Breadcrumbs from "@/components/breadcrumbs";
import { Select } from "@/components/input";
import Layout from "@/components/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Tabel from "@/components/table/table";

function App() {
  const data = [
    {
      No: 1,
      UsernameInstagram: "dimas829",
      TanggalBerpartisipasi: "26-10-2023",
      EXP: 150,
      Status: "Tidak Valid",
      Aksi: "",
    },
    {
      No: 2,
      UsernameInstagram: "dimas829",
      TanggalBerpartisipasi: "26-10-2023",
      EXP: 100,
      Status: "Valid",
      Aksi: "",
    },
    {
      No: 3,
      UsernameInstagram: "dimas829",
      TanggalBerpartisipasi: "26-10-2023",
      EXP: 100,
      Status: "Menunggu Validasi",
      Aksi: "",
    },
    {
      No: 4,
      UsernameInstagram: "dimas829",
      TanggalBerpartisipasi: "26-10-2023",
      EXP: 100,
      Status: "Valid",
      Aksi: "",
    },
    {
      No: 5,
      UsernameInstagram: "dimas829",
      TanggalBerpartisipasi: "26-10-2023",
      EXP: 150,
      Status: "Tidak Valid",
      Aksi: "",
    },
  ];

  const columns = [
    { Header: "No", accessor: "No" },
    { Header: "Username Instagram", accessor: "UsernameInstagram" },
    { Header: "Tanggal Berpartisipasi", accessor: "TanggalBerpartisipasi" },
    { Header: "EXP Tantangan", accessor: "EXP" },
    { Header: "Status", accessor: "Status" },
    {
      Header: "Aksi",
      accessor: "Aksi",
      Cell: () => (
        <div className="flex">
          <div className="mx-auto">
            <Link to="/peserta-tantangan/edit-peserta-tantangan">
              <BiEdit className="bg-neutral-700 rounded-[5px] text-white w-[38px] h-[38px]" />
            </Link>
          </div>
        </div>
      ),
    },
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

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <p>Data Untuk</p>
                <SlCalender size={20} />
                <Select options={["Bulan ini", "Minggu ini", "Hari ini"]} />
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

export default App;
