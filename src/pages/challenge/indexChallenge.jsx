import React, { useEffect, useState } from "react";

import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiDotsVerticalRounded, BiEdit, BiTrash } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import Button from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Tabel from "@/components/table/table";
import { Input } from "@/components/ui/input";
import Delete from "@/components/delete/delete";
import {
  getChallenge,
  deleteChallenge,
} from "@/utils/api/challenge/challenge/api";
import Pagination from "@/components/pagenation";
import { Loading } from "@/components/loading";

function IndexChallenge() {
  const [challenge, setChallenge] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  async function fetchData() {
    let query = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }
    try {
      const result = await getChallenge({ ...query });
      const { ...rest } = result.meta;
      setChallenge(result.data);
      setIsLoading(false);
      setMeta(rest);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handlePrevNextPage(page) {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  }

  const formatDate = (dateString) => {
    const [day, month, year] = new Date(dateString)
      .toLocaleDateString("en-GB")
      .split("/");
    return `${day}-${month}-${year}`;
  };

  async function onClickDelete(id) {
    try {
      await deleteChallenge(id);
      Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });
      fetchData();
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleDelete = () => {
    Delete({
      title: "Yakin mau hapus data?",
      text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
    });
  };

  const columns = [
    { Header: "No", accessor: "id" },
    { Header: "Nama Tantangan", accessor: "title" },
    {
      Header: "Tanggal Mulai",
      accessor: "start_date",
      Cell: ({ value }) => formatDate(value),
    },
    {
      Header: "Tanggal Berakhir",
      accessor: "end_date",
      Cell: ({ value }) => formatDate(value),
    },
    { Header: "EXP", accessor: "exp" },
    {
      Header: "Status",
      accessor: "Status",
      Cell: ({ row }) => (
        <div className="flex justify-between items-center">
          <p>{row.original.status}</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="three-dots">
                <BiDotsVerticalRounded />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link to="/tantangan/detail-tantangan">
                <DropdownMenuItem className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white">
                  <IoEyeSharp />
                  <p>Lihat</p>
                </DropdownMenuItem>
              </Link>

              <Link to="/tantangan/edit-tantangan">
                <DropdownMenuItem className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white">
                  <BiEdit />
                  <p>Edit</p>
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem
                className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white"
                onClick={handleDelete}
              >
                <BiTrash />
                <p>Hapus</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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

        <div className="flex items-center mt-8 pb-6 gap-6">
          <Button
            className="flex items-center space-x-2 border bg-secondary-green text-white p-3 rounded-lg"
            label="Buat Tantangan"
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
            onClick={() => navigate("/tantangan/buat-tantangan")}
          />

          <div className="flex ml-auto gap-4">
            <div className="flex items-center w-full ">
              <Input
                type="text"
                placeholder="Cari Tantangan"
                className="pr-32 py-6 border border-primary-green"
              />
              <FiSearch className="absolute ml-72 text-primary-green" />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-between items-center rounded-md bg-white p-3 border border-primary-green gap-20">
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
                <DropdownMenuItem className=" hover:bg-secondary-green hover:text-white cursor-pointer">
                  Kadaluwarsa
                </DropdownMenuItem>
                <DropdownMenuItem className=" hover:bg-secondary-green hover:text-white cursor-pointer">
                  Belum Kadaluwarsa
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Tabel columns={columns} data={challenge} />
            <Pagination
              meta={meta}
              onClickPrevious={() => handlePrevNextPage(meta?.current_page - 1)}
              onClickNext={() => handlePrevNextPage(meta?.current_page + 1)}
              onClickPage={(page) => handlePrevNextPage(page)}
            />
          </>
        )}
      </Layout>
    </div>
  );
}

export default IndexChallenge;
