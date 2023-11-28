import { useEffect, useState } from "react";
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
import { getUlasan } from "@/utils/api/ulasan/api";

export default function Ulasan() {
  const [ulasan, setUlasan] = useState([]);

  const navigate = useNavigate();

  function onClick() {
    navigate("/ulasan/lihat-ulasan");
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getUlasan();
      setUlasan(result.data);
    } catch (error) {
      console.log(error.message);
    }
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
            <Input
              type="text"
              placeholder="Cari Tantangan"
              className="pr-32 py-6 border border-primary-green"
            />
            <FiSearch className="absolute ml-72 text-primary-green" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex justify-between items-center rounded-md bg-white p-3 border border-primary-green gap-20">
              <p className="text-secondary-green">Filter</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
              >
                <path d="M5 4L0.669872 0.25L9.33013 0.25L5 4Z" fill="#257157" />
              </svg>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem className=" hover:bg-secondary-green hover:text-white cursor-pointer">
                Terbaik
              </DropdownMenuItem>
              <DropdownMenuItem className=" hover:bg-secondary-green hover:text-white cursor-pointer">
                Terburuk
              </DropdownMenuItem>
              <DropdownMenuItem className=" hover:bg-secondary-green hover:text-white cursor-pointer">
                Sedang
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Tabel columns={columns} data={data} />
      </Layout>
    </div>
  );
}
