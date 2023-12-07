import Layout from "../../components/layout";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import "../../styles/pelanggan/pelanggan.css";
import { useState, useEffect, useRef } from "react";
import Tabel from "../../components/table/table";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import Breadcrumbs from "@/components/breadcrumbs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useSearchParams } from "react-router-dom";
import Delete from "@/components/delete/delete";
import { BiEdit, BiTrash } from "react-icons/bi";
import { deleteUsers, getAllUsers } from "@/utils/api/pelanggan/api";
import { Loading } from "@/components/loading";
import Pagination from "@/components/pagenation";

function Pelanggan() {
  async function handleDelete(id) {
    try {
      const result = await Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });

      if (result.isConfirmed) {
        setIsLoading(true);
        await deleteUsers(id);
        toast({
          title: (
            <div className="flex items-center">
              <FaRegCheckCircle />
              <span className="ml-2">Produk berhasil dihapus!</span>
            </div>
          ),
          description:
            "Data pelanggan telah berhasil dihapus, nih. Silahkan nikmati fitur lainnya!",
        });
        fetchData();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menghapus pelanggan!</span>
          </div>
        ),
        description: "Terjadi kesalahan saat menghapus pelanggan.",
      });
    } finally {
      setIsLoading(false);
    }
  }
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  async function fetchData() {
    let query = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }
    try {
      setIsLoading(true);
      const result = await getAllUsers({ ...query });
      const { ...rest } = result.meta;
      setUsers(result.data);
      setMeta(rest);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handlePrevNextPage(page) {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  }
  const columns = [
    {
      Header: "Foto",
      accessor: "photo_profile",
      Cell: ({ row }) => (
        <img
          src={row.original.photo_profile}
          alt={row.original.name}
          className="w-20 h-28 rounded block m-auto"
        />
      ),
    },
    { Header: "Email", accessor: "email" },
    { Header: "Nama", accessor: "name" },
    { Header: "Telepon", accessor: "phone" },
    { Header: "Total Gram", accessor: "total_gram" },
    { Header: "EXP", accessor: "exp" },
    {
      Header: "Level",
      accessor: "level",
      Cell: ({ row }) => (
        <div className="level-cell">
          {row.original.Level}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="three-dots">
                <PiDotsThreeVerticalBold />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <Link to={`/pelanggan/${row.original.id}`}>
                <DropdownMenuItem className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white">
                  <BiEdit />
                  <p>Detail</p>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white"
                onClick={() => handleDelete(row.original.id)}
                id="deleteUser"
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
    <Layout>
      <div className="">
        <Breadcrumbs pages="Pelanggan" />

        <div className="w-full mt-5  px-5 py-5 shadow-md bg-white rounded-md">
          <div className="pb-7">
            <div className="flex justify-start">
              <div className="">
                <div className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Cari Pelanggan"
                    className="search-order border-black"
                  />
                  <FiSearch className="search-icon" />
                </div>
              </div>

              <div className="ml-6">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex justify-between items-center rounded-md bg-white py-3 px-3 border border-black gap-20">
                    <p className="text-[#8C8C8C]">Filter</p>
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
                    <DropdownMenuItem>??</DropdownMenuItem>
                    <DropdownMenuItem>??</DropdownMenuItem>
                    <DropdownMenuItem>??</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto">
            <div className="overflow-x-auto">
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  <Tabel columns={columns} data={users} />
                  <Pagination
                    meta={meta}
                    onClickPrevious={() =>
                      handlePrevNextPage(meta?.current_page - 1)
                    }
                    onClickNext={() =>
                      handlePrevNextPage(meta?.current_page + 1)
                    }
                    onClickPage={(page) => handlePrevNextPage(page)}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pelanggan;
