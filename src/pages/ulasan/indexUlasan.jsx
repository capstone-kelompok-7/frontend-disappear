import { useEffect, useState, useCallback } from "react";
import { FiSearch } from "react-icons/fi";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { Link, useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import Tabel from "@/components/table/table";
import { Input } from "@/components/ui/input";
import { getUlasan } from "@/utils/api/ulasan/api";
import Pagination from "@/components/pagenation";
import { Loading } from "@/components/loading";

export default function Ulasan() {
  const { toast } = useToast();
  const [ulasan, setUlasan] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  useEffect(() => {
    const delayedFetchData = debounce(fetchData, 1000);
    delayedFetchData();

    return () => delayedFetchData.cancel();
  }, [searchValue, searchParams]);

  const getProductName = useCallback(
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
    let query = { search: searchValue };
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }
    try {
      setIsLoading(true);
      const result = await getUlasan({ ...query });

      const searchData = result.data
        ? result.data.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : [];

      const { ...rest } = result.meta;
      setUlasan(searchData);
      setMeta(rest);
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Mendapatkan data Ulasan!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses pencarian data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
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
    getProductName(search);
  }

  const numberPage = (pageIndex, itemIndex) => {
    const itemsPerPage = meta?.per_page || 8;
    return pageIndex * itemsPerPage + itemIndex + 1;
  };

  function handleFilterRating(value) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("rating", value);
    setSearchParams(newSearchParams);
    setSelectedRating(
      value === "sangat buruk"
        ? "Sangat Buruk"
        : value === "buruk"
        ? "Buruk"
        : value === "sedang"
        ? "Sedang"
        : value === "baik"
        ? "Baik"
        : "Sangat Baik"
    );
  }

  const filterStatusOptions = [
    { value: "sangat baik", label: "Sangat Baik" },
    { value: "baik", label: "Baik" },
    { value: "sedang", label: "Sedang" },
    { value: "buruk", label: "Buruk" },
    { value: "sangat buruk", label: "Sangat Buruk" },
  ];

  function handleShowAllData() {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("rating");
    setSearchParams(newSearchParams);

    setSelectedRating(null);
    fetchData();
  }

  const columns = [
    {
      Header: "No",
      accessor: (_, index) => numberPage(meta?.current_page - 1, index),
    },
    {
      Header: "Nama Produk",
      accessor: "name",
      Cell: ({ row }) => (
        <Link id="detail-ulasan" to={`/ulasan/${row.original.id}`}>
          {row.original.name}
        </Link>
      ),
    },
    { Header: "Penilaian", accessor: "rating" },
    { Header: "Total Review", accessor: "total_review" },
  ];

  return (
    <div className="flex">
      <Layout>
        <div className="my-6">
          <Breadcrumbs pages="Ulasan" />
        </div>

        <div className="flex justify-start items-center mb-5 mt-8 gap-5">
          <div className="relative flex items-center">
            <Input
              id="input-cari-produk"
              type="text"
              placeholder="Cari Produk"
              className="pr-11 w-96 py-6 border border-primary-green"
              value={searchValue}
              onChange={(e) => handleSearchInputParams(e.target.value)}
            />
            <FiSearch className="absolute right-4 text-primary-green" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              id="btn-filter-rating"
              className="flex justify-between items-center rounded-md bg-white p-3 border border-primary-green"
            >
              <div className="flex items-center justify-between w-32">
                <p className="text-secondary-green">
                  {selectedRating || "Filter"}
                </p>
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
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                id="tampilkan-semua-rating"
                className=" hover:bg-secondary-green hover:text-white cursor-pointer"
                onClick={() => handleShowAllData()}
              >
                Tampilkan Semua
              </DropdownMenuItem>
              {filterStatusOptions.map((option) => (
                <DropdownMenuItem
                  id="dropdown-filter-rating"
                  key={option.value}
                  className="hover:bg-secondary-green hover:text-white cursor-pointer"
                  onClick={() => handleFilterRating(option.value)}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {ulasan && ulasan.length > 0 ? (
              <>
                <Tabel columns={columns} data={ulasan} />
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
    </div>
  );
}
