import { useNavigate } from "react-router-dom";

import Layout from "@/components/layout";
import { FiSearch } from "react-icons/fi";
import Button from "@/components/button";
import Breadcrumbs from "@/components/breadcrumbs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropdownTable from "@/components/dropdownTable/dropdownTable";
import Tabel from "@/components/table/table";

function IndexChallenge() {
  const navigate = useNavigate();

  const data = [
    {
      No: 1,
      NamaTantangan: "Tantangan menanam pohon",
      TanggalMulai: "24-10-2023",
      TanggalBerakhir: "31-10-2023",
      EXP: 150,
      Status: "Kadaluwarsa",
    },
    {
      No: 2,
      NamaTantangan: "Tantangan menanam pohon",
      TanggalMulai: "24-10-2023",
      TanggalBerakhir: "31-10-2023",
      EXP: 100,
      Status: "Belum Kadaluwarsa",
    },
    {
      No: 3,
      NamaTantangan: "Tantangan menanam pohon",
      TanggalMulai: "24-10-2023",
      TanggalBerakhir: "31-10-2023",
      EXP: 100,
      Status: "Belum Kadaluwarsa",
    },
    {
      No: 4,
      NamaTantangan: "Tantangan menanam pohon",
      TanggalMulai: "24-10-2023",
      TanggalBerakhir: "31-10-2023",
      EXP: 100,
      Status: "Kadaluwarsa",
    },
    {
      No: 5,
      NamaTantangan: "Tantangan menanam pohon",
      TanggalMulai: "24-10-2023",
      TanggalBerakhir: "31-10-2023",
      EXP: 150,
      Status: "Belum Kadaluwarsa",
    },
  ];

  const columns = [
    { Header: "No", accessor: "No" },
    { Header: "Nama Tantangan", accessor: "NamaTantangan" },
    { Header: "Tanggal Mulai", accessor: "TanggalMulai" },
    { Header: "Tanggal Berakhir", accessor: "TanggalBerakhir" },
    { Header: "EXP", accessor: "EXP" },
    {
      Header: "Status",
      accessor: "Status",
      Cell: ({ row }) => (
        <div className="flex items-center">
          <p>{row.original.Status}</p>
          <div className="ml-auto">
            <DropdownTable />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex">
      <Layout>
        <div className="my-6">
          <Breadcrumbs pages="Tantangan" />
        </div>

        <div className="mt-6 mb-6 mx-10 px-[15px] py-5 shadow-md bg-white rounded-[5px]">
          <div className="flex items-center pb-7 gap-6">
            <Button
              className="flex items-center space-x-2 border bg-[#25745A] text-white p-3 rounded-lg"
              label="Buat Tantangan"
              icon="+"
              onClick={() => navigate("/tantangan/buat-tantangan")}
            />

            <div className="justify-items-start">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Cari Artikel"
                  className="border p-3 rounded-lg"
                />
                <FiSearch className="absolute ml-44" />
              </div>
            </div>

            <div className="ml-auto">
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
                  <DropdownMenuItem>Kadaluwarsa</DropdownMenuItem>
                  <DropdownMenuItem>Belum Kadaluwarsa</DropdownMenuItem>
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

export default IndexChallenge;
