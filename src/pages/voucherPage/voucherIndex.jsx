import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Button from "@/components/button";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { IoAddOutline } from "react-icons/io5";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { FaRegCheckCircle } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Tabel from "@/components/table/table";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { BiEdit, BiTrash } from "react-icons/bi";
import Breadcrumbs from "@/components/breadcrumbs";
import Delete from "@/components/delete/delete";
import Pagination from "@/components/pagenation";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Loading } from "@/components/loading";
import { getVoucher, deleteVouchers } from "@/utils/api/voucher/api";
import { format } from "date-fns";
import { debounce } from "lodash";

function VoucherApp() {
  const [vouchers, setVouchers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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
      const result = await getVoucher({ ...query });
      const { ...rest } = result.meta;
      setVouchers(result.data);
      setMeta(rest);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const formatNumber = (pageIndex, itemIndex) => {
    const itemsPerPage = meta?.per_page || 8;
    return pageIndex * itemsPerPage + itemIndex + 1;
  };

  function handlePrevNextPage(page) {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  }

  function onClickEdit(id) {
    navigate(`/kupon/${id}/edit-kupon`);
  }

  async function handleDeleteClick(id) {
    try {
      const result = await Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });

      if (result.isConfirmed) {
        setIsLoading(true);
        await deleteVouchers(id);
        toast({
          title: (
            <div className="flex items-center">
              <FaRegCheckCircle />
              <span className="ml-2">Produk berhasil dihapus!</span>
            </div>
          ),
          description:
            "Data produk telah berhasil dihapus, nih. Silahkan nikmati fitur lainnya!",
        });
        fetchData();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menghapus Produk!</span>
          </div>
        ),
        description: "Terjadi kesalahan saat menghapus produk.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleFilterStatus(value) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("status", value);
    setSearchParams(newSearchParams);
    setSelectedStatus(value);
  }

  function handleFilterCategory(value) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("category", value);
    setSearchParams(newSearchParams);
    setSelectedCategory(value);
  }

  function handleShowAllData() {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.delete("status");
    newSearchParams.delete("category");

    setSearchParams(newSearchParams);

    setSelectedStatus(null);
    setSelectedCategory(null);

    fetchData();
  }

  const columns = [
    {
      Header: "NO",
      accessor: (_, index) => formatNumber(meta?.current_page - 1, index),
    },
    { Header: "NAMA KUPON", accessor: "name" },
    { Header: "KODE", accessor: "code" },
    { Header: "KATEGORI", accessor: "category" },
    { Header: "DISKON", accessor: "discount" },
    {
      Header: "TANGGAL MULAI",
      accessor: "start_date",
      Cell: ({ value }) => <p>{format(new Date(value), "dd-MM-yyyy")}</p>,
    },
    {
      Header: "TANGGAL BERAKHIR",
      accessor: "end-date",
      Cell: ({ value }) => <p>{format(new Date(value), "dd-MM-yyyy")}</p>,
    },
    {
      Header: "STATUS",
      accessor: "status",
      Cell: ({ row }) => (
        <div>
          {row.original.status}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="three-dots">
                <PiDotsThreeVerticalBold />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                id="editVoucher"
                className=" hover:bg-secondary-green hover:text-white cursor-pointer gap-2 items-center"
                onClick={() => onClickEdit(row.original.id)}
              >
                <BiEdit />
                <p>Edit Kupon</p>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => handleDeleteClick(row.original.id)}
                className=" hover:bg-secondary-green hover:text-white cursor-pointer gap-2 items-center"
                id="deleteVoucher"
              >
                <BiTrash />
                <p>Hapus Kupon</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <Breadcrumbs pages="Kupon" />

      <div className=" my-5 py-5 px-11 rounded-md shadow-lg border-2">
        <div className="flex justify-between items-center pb-5">
          <Link to="/kupon/buat-kupon">
            <Button
              id="AddVoucher"
              label="Tambahkan Kupon"
              icon={<IoAddOutline />}
              className="bg-primary-green text-white py-3 px-5 rounded-lg font-medium text-sm mr-3"
            />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex justify-between items-center rounded-md bg-white py-3 px-3 border border-primary-green gap-10"
              id="filterVoucher"
            >
              <p className=" text-primary-green">
                {selectedStatus || selectedCategory || "Filter"}
              </p>

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
              <DropdownMenuItem
                className="hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center text-black"
                onClick={() => handleShowAllData()}
              >
                Semua Kupon
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center text-black"
                onClick={() => handleFilterCategory("Bronze")}
              >
                Bronze
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center text-black"
                onClick={() => handleFilterCategory("Silver")}
              >
                Silver
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center text-black"
                onClick={() => handleFilterCategory("Gold")}
              >
                Gold
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center text-black"
                onClick={() => handleFilterCategory("All Customer")}
              >
                All Customer
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center text-black"
                onClick={() => handleFilterStatus("Kadaluwarsa")}
              >
                Kadaluwarsa
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-secondary-green hover:text-white cursor-pointer gap-3 items-center text-black"
                onClick={() => handleFilterStatus("Belum Kadaluwarsa")}
              >
                Belum Kadaluwarsa
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {vouchers && vouchers.length > 0 ? (
              <>
                <Tabel columns={columns} data={vouchers} />
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
      </div>
    </Layout>
  );
}

export default VoucherApp;
