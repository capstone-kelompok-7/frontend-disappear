import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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
import Delete from "@/components/delete/delete";
import { IoEye } from "react-icons/io5";
import { getAllProducts } from "@/utils/api/products/api";
import formatCurrency from "@/utils/formatter/currencyIdr";
import PageNation from "@/components/pagenation";

export default function IndexProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const toDetailProduct = () => {
    navigate("/produk/:id");
  };

  const toEditProduct = () => {
    navigate("/produk/edit-produk");
  };

  const handleDelete = () => {
    Delete({
      title: "Yakin mau hapus data?",
      text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
    });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  async function fetchData() {
    try {
      const result = await getAllProducts();
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const columns = [
    {
      Header: "Foto",
      accessor: "image_url",
      Cell: ({ row }) => {
        if (row.original) {
          const firstPhotoUrl = row.original.image_url?.[0]?.image_url;
          return (
            <img
              src={firstPhotoUrl}
              alt="Product"
              className="w-20 h-28 rounded block m-auto"
            />
          );
        }
        return null;
      },
    },
    { Header: "Nama Produk", accessor: "name" },
    {
      Header: "Kategori",
      accessor: "categories",
      Cell: ({ row }) => {
        const categories = row.original.categories.map(
          (category) => category.name
        );
        return <p>{categories.join(", ")}</p>;
      },
    },
    { Header: "Gram", accessor: "gram_plastic" },
    { Header: "Stok", accessor: "stock" },
    { Header: "Diskon", accessor: "discount" },
    { Header: "EXP", accessor: "product_exp" },
    {
      Header: "Harga",
      accessor: "price",
      Cell: ({ row }) => (
        <div className="flex justify-between items-center">
          <p>{formatCurrency(row.original.price)}</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BiDotsVerticalRounded />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <Link onClick={toDetailProduct}>
                <DropdownMenuItem className=" hover:bg-secondary-green cursor-pointer gap-3 items-center text-black hover:text-white">
                  <IoEye />
                  <p>Detail Produk</p>
                </DropdownMenuItem>
              </Link>
              <Link onClick={toEditProduct}>
                <DropdownMenuItem className=" hover:bg-secondary-green cursor-pointer gap-3 items-center text-black hover:text-white">
                  <BiEdit />
                  <p>Edit Produk</p>
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem
                className=" hover:bg-secondary-green cursor-pointer gap-3 items-center text-black hover:text-white"
                onClick={handleDelete}
              >
                <BiTrash />
                <p>Hapus Produk</p>
              </DropdownMenuItem>
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
                className=" border-primary-green py-6"
              />
              <svg
                className="absolute right-3 top-4 text-primary-green"
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
                <DropdownMenuItem className=" hover:bg-secondary-green hover:text-white cursor-pointer">
                  Tas Baru
                </DropdownMenuItem>
                <DropdownMenuItem className=" hover:bg-secondary-green hover:text-white cursor-pointer">
                  Alat Makan
                </DropdownMenuItem>
                <DropdownMenuItem className=" hover:bg-secondary-green hover:text-white cursor-pointer">
                  Sendok
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="mt-5">
          <Tabel columns={columns} data={products} />
          <PageNation page={page} setPage={setPage}/>
        </div>
      </Layout>
    </>
  );
}
