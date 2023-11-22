import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Tabel from "@/components/table/table";
import { Input } from "@/components/ui/input";

export default function Ulasan() {
  const navigate = useNavigate();

  function onClick() {
    navigate("/ulasan/lihat-ulasan");
  }

  const data = [
    {
      No: 1,
      NamaProduk: <Link to="/ulasan/lihat-ulasan">Totebag</Link>,
      Penilaian: "4.7",
      TotalReview: 200,
    },
    {
      No: 2,
      NamaProduk: (
        <Link to="/ulasan/lihat-ulasan">Alat makan ramah lingkungan</Link>
      ),
      Penilaian: "4.7",
      TotalReview: 150,
    },
    {
      No: 3,
      NamaProduk: (
        <Link to="/ulasan/lihat-ulasan">botol minuman stainless steel</Link>
      ),
      Penilaian: "5.0",
      TotalReview: 45,
    },
    {
      No: 4,
      NamaProduk: (
        <Link to="/ulasan/lihat-ulasan">Alat makan ramah lingkungan</Link>
      ),
      Penilaian: "4.7",
      TotalReview: 78,
    },
    {
      No: 5,
      NamaProduk: <Link to="/ulasan/lihat-ulasan">Totebag</Link>,
      Penilaian: "5.0 ",
      TotalReview: 50,
    },
  ];

  const columns = [
    { Header: "No", accessor: "No" },
    { Header: "Nama Produk", accessor: "NamaProduk" },
    { Header: "Penilaian", accessor: "Penilaian" },
    { Header: "Total Review", accessor: "TotalReview" },
  ];

  return (
    <div className="flex">
      <Layout>
        <div className="my-6">
          <Breadcrumbs pages="Ulasan" />
        </div>

        <div className="flex justify-start items-center mb-5 mt-8 gap-5">
          <div className="flex items-center">
            <Input type="text" placeholder="Cari Tantangan" className="p-3" />
            <FiSearch className="absolute ml-44" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center rounded-md bg-white py-3 px-3 border gap-20">
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
              <DropdownMenuItem>Terbaik</DropdownMenuItem>
              <DropdownMenuItem>Terburuk</DropdownMenuItem>
              <DropdownMenuItem>Sedang</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Tabel columns={columns} data={data} />
      </Layout>
    </div>
  );
}
