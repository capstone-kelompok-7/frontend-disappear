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
      setArtikel(result.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearchInputParams(search) {
    setSearchValue(search);
    getSuggestions(search);
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
              <button className="flex items-center space-x-2 border bg-secondary-green text-white p-4 rounded-lg">
                <AiOutlinePlus />
                <div>Buat Artikel</div>
              </button>
            </Link>
            <div className="flex items-center">
              <input
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
                <p>Filter</p>
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
                <DropdownMenuItem>Bulan ini</DropdownMenuItem>
                <DropdownMenuItem>Seminggu ini</DropdownMenuItem>
                <DropdownMenuItem>Hari ini</DropdownMenuItem>
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
              <div className="mt-6 mx-[40rem]">
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
