import { useEffect, useState, useCallback } from "react";
import { FiSearch } from "react-icons/fi";
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
import Tabel from "@/components/table/table";
import { Input } from "@/components/ui/input";
import { getUlasan } from "@/utils/api/ulasan/api";
import Pagination from "@/components/pagenation";
import { Loading } from "@/components/loading";

export default function Ulasan() {
  const [ulasan, setUlasan] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
      const { ...rest } = result.meta;
      setUlasan(result.data);
      setMeta(rest);
    } catch (error) {
      console.log(error.message);
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

  const columns = [
    {
      Header: "No",
      accessor: (_, index) => numberPage(meta?.current_page - 1, index),
    },
    {
      Header: "Nama Produk",
      accessor: "name",
      Cell: ({ row }) => (
        <Link to={`/ulasan/${row.original.id}`}>{row.original.name}</Link>
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
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Cari Produk"
              className="pr-32 py-6 border border-primary-green"
              value={searchValue}
              onChange={(e) => handleSearchInputParams(e.target.value)}
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
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Tabel columns={columns} data={ulasan} />
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
