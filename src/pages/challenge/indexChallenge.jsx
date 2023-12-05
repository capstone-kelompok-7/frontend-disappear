import { useEffect, useState } from "react";

import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiDotsVerticalRounded, BiEdit, BiTrash } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { debounce } from "lodash";

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
import Delete from "@/components/delete/delete";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Pagination from "@/components/pagenation";
import { Loading } from "@/components/loading";

import {
  getChallenge,
  deleteChallenge,
} from "@/utils/api/challenge/challenge/api";

function IndexChallenge() {
  const { toast } = useToast();
  const [challenge, setChallenge] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const delayedFetchData = debounce(fetchData, 1000);
    delayedFetchData();

    return () => delayedFetchData.cancel();
  }, [searchValue, searchParams]);

  async function fetchData() {
    let query = { search: searchValue };
    for (const entry of searchParams.entries()) {
      if (entry[0] !== "search") {
        query[entry[0]] = entry[1];
      }
    }
    try {
      setIsLoading(true);
      const result = await getChallenge({ ...query });
      const { ...rest } = result.meta;
      setChallenge(result.data);
      setMeta(rest);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function onClickEdit(id) {
    navigate(`/tantangan/${id}/edit-tantangan`);
  }

  async function onClickDelete(id) {
    try {
      const result = await Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });

      if (result.isConfirmed) {
        await deleteChallenge(id);
        toast({
          title: (
            <div className="flex items-center">
              <FaRegCheckCircle />
              <span className="ml-2">Berhasil Menghapus Tantangan! </span>
            </div>
          ),
          description:
            "Data tantangan telah berhasil dihapus, nih. Silahkan nikmati fitur lainnya!",
        });
        fetchData();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menghapus Tantangan!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penghapusan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    }
  }

  function handlePrevNextPage(page) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", String(page));
    setSearchParams(newSearchParams);
  }

  function handleSearchInputParams(search) {
    setSearchValue(search);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("search", String(search));
    setSearchParams(newSearchParams);
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
    { Header: "Nama Tantangan", accessor: "title" },
    {
      Header: "Tanggal Mulai",
      accessor: "start_date",
      Cell: ({ value }) => <p>{format(new Date(value), "dd-MM-yyyy")}</p>,
    },
    {
      Header: "Tanggal Berakhir",
      accessor: "end_date",
      Cell: ({ value }) => <p>{format(new Date(value), "dd-MM-yyyy")}</p>,
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
              <DropdownMenuItem
                className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white"
                onClick={() => navigate(`/tantangan/${row.original.id}`)}
              >
                <IoEyeSharp />
                <p>Lihat</p>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white"
                onClick={() => onClickEdit(row.original.id)}
              >
                <BiEdit />
                <p>Edit</p>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white"
                onClick={() => onClickDelete(row.original.id)}
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
                value={searchValue}
                onChange={(e) => handleSearchInputParams(e.target.value)}
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
