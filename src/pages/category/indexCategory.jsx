import React, { useEffect, useState, useCallback } from "react";
import Layout from "../../components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import { FiSearch } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import Button from "@/components/button";
import { Input } from "@/components/ui/input";
import PopUp from "./popUp";
import Tabel from "@/components/table/table";
import Delete from "../../components/delete/delete";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { FaRegCheckCircle } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCategory, deleteCategory } from "@/utils/api/category/api";
import Pagination from "@/components/pagenation";
import { Loading } from "@/components/loading";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import { useToast } from "@/components/ui/use-toast";

export default function IndexCategory() {
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { toast } = useToast();

  const [categoryId, setCategoryId] = useState(0);
  const [update, setUpdate] = useState(false);
  const [popLoading, setPopLoading] = useState(false);
  const [popUpTitle, setPopUpTitle] = useState("Tambah");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const delayedFetchData = debounce(fetchData, 1000);
    delayedFetchData();

    return () => delayedFetchData.cancel();
  }, [searchValue, searchParams, reload]);

  const getSuggestions = useCallback(
    async function (query) {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      if (!query) {
        newSearchParams.delete("search");
      } else {
        newSearchParams.set("search", query);
        newSearchParams.delete("page");
      }

      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams]
  );

  async function fetchData() {
    let query = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }
    try {
      setIsLoading(true);
      const result = await getCategory({ ...query });
      const searchData = result.data
        ? result.data.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : [];
      const { ...rest } = result.meta;
      setCategories(searchData);
      setMeta(rest);
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Mendapatkan Data Kategori!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses pencarian data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function onClickDelete(id) {
    try {
      const result = await Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });

      if (result.isConfirmed) {
        setIsLoading(true);
        await deleteCategory(id);
        toast({
          title: (
            <div className="flex items-center">
              <FaRegCheckCircle />
              <span className="ml-2">Berhasil Menghapus Kategori! </span>
            </div>
          ),
          description:
            "Data kategori telah berhasil dihapus, nih. Silahkan nikmati fitur lainnya!",
        });
        fetchData();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menghapus Kategori!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penghapusan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handlePrevNextPage(page) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", String(page));
    setSearchParams(newSearchParams);
  }

  function handleSearchInputParams(search) {
    setSearchValue(search);
    getSuggestions(search);
  }

  const formatNumber = (pageIndex, itemIndex) => {
    const itemsPerPage = meta?.per_page || 8;
    return pageIndex * itemsPerPage + itemIndex + 1;
  };
  const columns = [
    {
      Header: "No",
      accessor: (_, index) => formatNumber(meta?.current_page - 1, index),
    },
    {
      Header: "Foto",
      accessor: "photo",
      Cell: ({ row }) => (
        <img
          src={row.original.photo}
          alt="Product"
          className="w-20 h-28 rounded m-auto object-cover"
        />
      ),
    },
    { Header: "Nama", accessor: "name" },
    {
      Header: "Jumlah Produk",
      accessor: "total_product",
      Cell: ({ row }) => (
        <div className="flex items-center justify-between">
          <div className="text-center">{row.original.total_product}</div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="three-dots ">
                <PiDotsThreeVerticalBold />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                id="dropdown-edit"
                className=" hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCategoryId(row.original.id);
                  setUpdate(true);
                  setPopLoading(true);
                  setPopUpTitle("Edit");
                  return document.getElementById("my_modal_5").showModal();
                }}
              >
                <BiEdit />
                Edit Kategori
              </DropdownMenuItem>
              <DropdownMenuItem
                id="dropdown-hapus"
                className=" hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center"
                onClick={() => onClickDelete(row.original.id)}
              >
                <RiDeleteBinLine />
                Delete Kategori
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
        <Breadcrumbs pages="Kategori Produk" />

        <div className=" items-center flex mt-6 py-5 gap-6">
          <Button
            id="btn-tambah-kategori"
            label="Tambah Kategori"
            icon={
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
            }
            className=" bg-secondary-green text-white p-2 rounded-sm"
            onClick={() => {
              setPopUpTitle("Tambah");
              setCategoryId(0);
              return document.getElementById("my_modal_5").showModal();
            }}
          />

          <div className="flex items-center w-64 relative">
            <Input
              id="input-cari-kategori"
              type="text"
              placeholder="Cari Kategori"
              className="border-primary-green pr-36 placeholder:text-left"
              icon={<FiSearch />}
              value={searchValue}
              onChange={(e) => handleSearchInputParams(e.target.value)}
            />
          </div>
          <PopUp
            categoryId={categoryId}
            update={update}
            popLoading={popLoading}
            setPopLoading={setPopLoading}
            popUpTitle={popUpTitle}
            setReload={setReload}
          />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="mt-5">
            {categories && categories.length > 0 ? (
              <>
                <Tabel columns={columns} data={categories} />
                <Pagination
                  meta={meta}
                  onClickPrevious={() =>
                    handlePrevNextPage(meta?.current_page - 1)
                  }
                  onClickNext={() => handlePrevNextPage(meta?.current_page + 1)}
                  onClickPage={(page) => handlePrevNextPage(page)}
                />
              </>
            ) : (
              <div className="text-center">
                <p>Data tidak ditemukan</p>
              </div>
            )}
          </div>
        )}
      </Layout>
    </>
  );
}
