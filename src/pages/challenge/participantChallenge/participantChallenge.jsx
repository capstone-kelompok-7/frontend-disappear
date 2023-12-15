import { useEffect, useState } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useSearchParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { debounce } from "lodash";
import { CrossCircledIcon } from "@radix-ui/react-icons";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Tabel from "@/components/table/table";
import { getParticipant } from "@/utils/api/challenge/participantChallenge/api";
import Pagination from "@/components/pagenation";
import { Loading } from "@/components/loading";
import { useToast } from "@/components/ui/use-toast";

export default function IndexPesertaTantangan() {
  const [participant, setParticipant] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const delayedFetchData = debounce(fetchData, 1000);
    delayedFetchData();

    return () => delayedFetchData.cancel();
  }, [searchParams]);

  async function fetchData() {
    let query = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }
    try {
      setIsLoading(true);
      const result = await getParticipant({ ...query });
      const { ...rest } = result.meta;
      setParticipant(result.data);
      setIsLoading(false);
      setMeta(rest);
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Mendapatkan data Tantangan!</span>
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
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  }

  function handleFilterStatus(value) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("status", value);
    setSearchParams(newSearchParams);
    setSelectedStatus(
      value === "valid"
        ? "Valid"
        : value === "tidak valid"
        ? "Tidak Valid"
        : "Menunggu Validasi"
    );
  }

  const filterStatusOptions = [
    { value: "valid", label: "Valid" },
    { value: "tidak valid", label: "Tidak Valid" },
    { value: "menunggu validasi", label: "Menunggu Validasi" },
  ];

  function handleFilterDate(value) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("date", value);
    setSearchParams(newSearchParams);
    setSelectedDate(
      value === "bulan ini"
        ? "Bulan ini"
        : value === "minggu ini"
        ? "Minggu ini"
        : "Hari ini"
    );
  }

  const filterDateOptions = [
    { value: "hari ini", label: "Hari ini" },
    { value: "minggu ini", label: "Minggu ini" },
    { value: "bulan ini", label: "Bulan ini" },
  ];

  function handleShowAllStatus() {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("status");
    setSearchParams(newSearchParams);

    setSelectedStatus(null);
    fetchData();
  }

  function handleShowAllDate() {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("date");
    setSearchParams(newSearchParams);

    setSelectedDate(null);
    fetchData();
  }

  const columns = [
    { Header: "No", accessor: "id" },
    {
      Header: "Username Instagram",
      accessor: "username",
      Cell: ({ row }) => (
        <Link
          id="edit-peserta-tantangan"
          to={`/peserta-tantangan/${row.original.id}/edit-peserta-tantangan`}
        >
          {row.original.username}
        </Link>
      ),
    },
    {
      Header: "Tanggal Berpartisipasi",
      accessor: "tanggal_berpartisipasi",
      Cell: ({ value }) => <p>{format(new Date(value), "dd-MM-yyyy")}</p>,
    },
    { Header: "EXP Tantangan", accessor: "exp" },
    { Header: "Status", accessor: "status" },
  ];

  return (
    <div className="flex">
      <Layout>
        <div className="my-6">
          <Breadcrumbs pages="Peserta Tantangan" />
        </div>

        <div className="flex justify-between items-center mb-6 mt-8">
          <div className="w-1/4">
            <p className="font-semibold text-3xl">Semua Peserta</p>
          </div>

          <div className="flex space-x-4">
            <div className="flex items-center gap-5">
              <p className="text-zinc-400">Data Untuk</p>
              <div className="flex items-center gap-3">
                <MdOutlineCalendarMonth size={30} />
                <DropdownMenu>
                  <DropdownMenuTrigger
                    id="dropdown-filter-tanggal"
                    className="flex justify-between items-center py-3 px-3 gap-3"
                  >
                    <p>{selectedDate || ""}</p>
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
                      id="tampilkan-semua-tanggal"
                      className="cursor-pointer text-black hover:bg-secondary-green hover:text-white"
                      onClick={() => handleShowAllDate()}
                    >
                      Tampilkan Semua
                    </DropdownMenuItem>
                    {filterDateOptions.map((option) => (
                      <DropdownMenuItem
                        id="dropdown-filter-tanggal"
                        key={option.value}
                        className="hover:bg-secondary-green hover:text-white cursor-pointer"
                        onClick={() => handleFilterDate(option.value)}
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger
                id="dropdown-filter-status"
                className="flex justify-between items-center rounded-md py-3 px-3 border border-primary-green"
              >
                <div className="flex items-center justify-between w-44">
                  <p className="text-primary-green">
                    {selectedStatus || "Filter"}
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
                  id="tampilkan-semua-status"
                  className="cursor-pointer text-black hover:bg-secondary-green hover:text-white"
                  onClick={() => handleShowAllStatus()}
                >
                  Tampilkan Semua
                </DropdownMenuItem>
                {filterStatusOptions.map((option) => (
                  <DropdownMenuItem
                    id="dropdown-filter-status"
                    key={option.value}
                    className="hover:bg-secondary-green hover:text-white cursor-pointer"
                    onClick={() => handleFilterStatus(option.value)}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {participant && participant.length > 0 ? (
              <>
                <Tabel columns={columns} data={participant} />
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
