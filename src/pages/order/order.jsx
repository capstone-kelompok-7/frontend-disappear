import Tabel from "../../components/table/table";
import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "../../components/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import "../../styles/order/order.css";
import { FaRegCalendarAlt } from "react-icons/fa";

function Order() {
  const data = [
    {
      No: 1,
      Pelanggan: "Dimas",
      Tanggal: "12-12-2012",
      TotalPembayaran: "500.000",
      Status: "Proses Pengantaran",
    },
    {
      No: 1,
      Pelanggan: "Dimas",
      Tanggal: "12-12-2012",
      TotalPembayaran: "500.000",
      Status: "Proses Pengantaran",
    },
  ];

  const columns = [
    { Header: "NO", accessor: "No" },
    { Header: "PELANGGAN", accessor: "Pelanggan" },
    { Header: "TANGGAL", accessor: "Tanggal" },
    { Header: "TOTAL PEMBAYARAN", accessor: "TotalPembayaran" },
    { Header: "STATUS", accessor: "Status" },
  ];
  return (
    <Layout>
      <div className="">
        <Breadcrumbs pages="Pesanan" />
        <div className="flex">
          <div className="flex justify-start">
            <div className="mt-10">
              <div className="flex items-center">
                <Input
                  type="text"
                  placeholder="Cari Pelanggan"
                  className="search-order border-black"
                />
                <FiSearch className="search-icon" />
              </div>
            </div>

            <div className="ml-6 mt-10">
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
          <div className="order-sort flex justify-end mt-10 items-center gap-3">
            <p className="text-[#8C8C8C]">Data untuk</p>
            <FaRegCalendarAlt />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-between items-center rounded-md bg-white py-3 gap-5">
                <p className="text-black font-semibold">Bulan Ini</p>
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
        <div className="tabel-order overflow-x-auto mt-10">
          <Tabel columns={columns} data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default Order;
