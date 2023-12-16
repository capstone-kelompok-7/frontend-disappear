import Layout from "../../components/layout";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import "../../styles/pelanggan/pelanggan.css";
import { useState, useEffect } from "react";
import Tabel from "../../components/table/table";
import { Input } from "@/components/ui/input";
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
import { useToast } from "@/components/ui/use-toast";
import { debounce } from "lodash";
import { FaRegCheckCircle } from "react-icons/fa";
import { CrossCircledIcon } from "@radix-ui/react-icons";

function Pelanggan() {
  const { toast } = useToast();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  useEffect(() => {
    const delayedFetchData = debounce(fetchData, 1000);
    delayedFetchData();

    return () => delayedFetchData.cancel();
  }, [searchValue, searchParams]);

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

  function handleSearchInputParams(search) {
    setSearchValue(search);
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // Hapus parameter 'search' jika nilai search kosong
    if (search.trim() === "") {
      newSearchParams.delete("search");
    } else {
      newSearchParams.set("search", String(search));
    }

    setSearchParams(newSearchParams);
  }

  function handleFilterLevel(value) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("filter", value);
    setSearchParams(newSearchParams);
    setSelectedLevel(
      value === "bronze" ? "Bronze" : value == "silver" ? "Silver" : "Gold"
    );
  }

  function handleShowAllData() {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("filter");
    setSearchParams(newSearchParams);

    setSelectedLevel(null);
    fetchData();
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
          {row.original.level}
          <DropdownMenu>
            <DropdownMenuTrigger id="dropdown-fitur">
              <div className="three-dots">
                <PiDotsThreeVerticalBold />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <Link to={`/pelanggan/${row.original.id}`}>
                <DropdownMenuItem
                  id="dropdown-item-detail"
                  className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white"
                >
                  <BiEdit />
                  <p>Detail</p>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white"
                onClick={() => handleDelete(row.original.id)}
                id="dropdown-item-delete"
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
                <div className="relative items-center">
                  <Input
                    id="input-cari-pelanggan"
                    type="text"
                    placeholder="Cari Pelanggan"
                    className="search-user border-primary-green text-primary-green "
                    onChange={(e) => handleSearchInputParams(e.target.value)}
                    value={searchValue}
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
              </div>

              <div className="ml-6">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    id="dropdown-filter-level"
                    className="flex justify-between items-center rounded-md bg-white py-3 px-3 border border-primary-green gap-20"
                  >
                    <p className="text-primary-green">
                      {selectedLevel || "Filter"}
                    </p>
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
                    <DropdownMenuItem
                      id="dropdown-item-tampilkan-semua"
                      className="cursor-pointer text-black hover:bg-secondary-green hover:text-white"
                      onClick={() => handleShowAllData()}
                    >
                      Tampilkan Semua
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      id="dropdown-item-bronze"
                      className=" hover:bg-secondary-green hover:text-white cursor-pointer"
                      onClick={() => handleFilterLevel("bronze")}
                    >
                      Bronze
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      id="dropdown-item-silver"
                      className=" hover:bg-secondary-green hover:text-white cursor-pointer"
                      onClick={() => handleFilterLevel("silver")}
                    >
                      Silver
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      id="dropdown-item-gold"
                      className=" hover:bg-secondary-green hover:text-white cursor-pointer"
                      onClick={() => handleFilterLevel("gold")}
                    >
                      Gold
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto">
            <div className="overflow-x-auto">
              {isLoading ? (
                <Loading />
              ) : users && users.length > 0 ? (
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
              ) : (
                <div className="text-center">
                  <p>Data tidak ditemukan</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pelanggan;
