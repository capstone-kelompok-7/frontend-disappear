import { useState, useEffect, useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { debounce } from "lodash";

import Breadcrumbs from "@/components/breadcrumbs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Layout from "../../components/layout";
import { Link, useSearchParams } from "react-router-dom";
import { getArtikel } from "@/utils/api/artikel/api";
import CardArtikel from "@/components/cardartikel/cardArtikel";
import { Loading } from "@/components/loading";

function IndexNews() {
  const [artikel, setArtikel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [selectedArtikel, setSelectedArtikel] = useState("");

  useEffect(() => {
    const delayedFetchArtikel = debounce(fetchArtikel, 1000);
    delayedFetchArtikel();

    return () => delayedFetchArtikel.cancel();
  }, [searchValue, searchParams]);

  const getSuggestions = useCallback(
    async function (query) {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      if (!query) {
        newSearchParams.delete("search");
      } else {
        newSearchParams.set("search", query);
      }

      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams]
  );

  async function fetchArtikel() {
    let query = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }
    try {
      setIsLoading(true);
      const result = await getArtikel({ ...query });
      result.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setArtikel(result.data);
    } catch (error) {
      toast({
        title: "GAGAL MEMUAT ARTIKEL!",
        description: "Konten artikel gagal dimuat!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearchInputParams(search) {
    setSearchValue(search);
    getSuggestions(search);
  }

  function handleFilterArtikel(value) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("date_filter_type", value);
    setSearchParams(newSearchParams);
    setSelectedArtikel(
      value === "minggu ini"
        ? "Minggu ini"
        : value === "bulan ini"
        ? "Bulan ini"
        : "Tahun ini"
    );
  }

  function handleShowAllData() {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("date_filter_type");
    setSearchParams(newSearchParams);

    setSelectedArtikel(null);
    fetchArtikel();
  }

  return (
    <Layout>
      <div>
        <Breadcrumbs pages="Artikel" />
      </div>
      <div className="mt-9 border-t-2 px-4 pt-4">
        <div className="flex justify-between">
          <div className="flex space-x-3">
            <Link to="/artikel/create-news">
              <button
                className="flex items-center space-x-2 border bg-secondary-green text-white p-4 rounded-lg"
                id="buat-artikel"
              >
                <AiOutlinePlus />
                <h1>Buat Artikel</h1>
              </button>
            </Link>
            <div className="flex items-center">
              <input
                id="cari-artikel"
                type="text"
                placeholder="Cari Artikel"
                className="border pl-4 p-4 px-14 rounded-lg bg-white"
                value={searchValue}
                onChange={(e) => handleSearchInputParams(e.target.value)}
              />
              <FiSearch className="absolute ml-56" />
            </div>
          </div>
          <div className="flex space-x-3">
            <DropdownMenu>
              <div className="flex items-center space-x-3">
                <p>Artikel Untuk</p>
                <SlCalender />
              </div>
              <DropdownMenuTrigger className="flex justify-between items-center py-3 px-3 gap-20 font-bold">
                <p>{selectedArtikel || "Filter"}</p>
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
              <DropdownMenuContent className="font-bold">
                <DropdownMenuItem
                  className="cursor-pointer bg-black text-white hover:bg-secondary-green hover:text-white"
                  onClick={() => handleShowAllData()}
                  id="all-data-artikel"
                >
                  Tampilkan Semua Artikel
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleFilterArtikel("minggu ini")}
                  className=" hover:bg-secondary-green hover:text-white cursor-pointer"
                  id="filter-minggu-ini-artikel"
                >
                  Minggu ini
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleFilterArtikel("bulan ini")}
                  className=" hover:bg-secondary-green hover:text-white cursor-pointer"
                  id="filter-bulan-ini-artikel"
                >
                  Bulan ini
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleFilterArtikel("tahun ini")}
                  className=" hover:bg-secondary-green hover:text-white cursor-pointer"
                  id="filter-tahun-ini-artikel"
                >
                  Tahun ini
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="max-h-[38rem] overflow-y-auto">
            {artikel && artikel.length > 0 ? (
              artikel.map((data) => (
                <CardArtikel
                  key={data.id}
                  artikelId={data.id}
                  date={data.date}
                  title={data.title}
                  content={data.content}
                  photo={data.photo}
                />
              ))
            ) : (
              <div className="mt-6 text-center">
                <p>Data tidak ditemukan</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default IndexNews;
