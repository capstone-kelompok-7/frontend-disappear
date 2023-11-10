import { BiEdit } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

import Breadcrumbs from "@/components/breadcrumbs";
import { Select } from "../components/input";
import Layout from "@/components/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function App() {
  return (
    <div className="flex">
      <Layout>
        <div className="my-6">
          <Breadcrumbs pages="Peserta Tantangan" />
        </div>

        <div className="mx-10 px-[15px] py-5 shadow-md bg-white rounded-[5px]">
          <div className="flex justify-between items-center mb-7">
            <div>
              <p className="font-semibold text-3xl">Semua Peserta</p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <p>Data Untuk</p>
                <SlCalender size={20} />
                <Select options={["Bulan ini", "Minggu ini", "Hari ini"]} />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-between items-center rounded-md bg-white py-3 px-3 border gap-20">
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

                <DropdownMenuContent>
                  <DropdownMenuItem>Valid</DropdownMenuItem>
                  <DropdownMenuItem>Tidak Valid</DropdownMenuItem>
                  <DropdownMenuItem>Menunggu Validasi</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="w-full mx-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md border border-neutral-500">
                <thead>
                  <tr className="bg-[#C7C7C7] text-black">
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      NO
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      USERNAME INSTAGRAM
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      TANGGAL BERPARTISIPASI
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      EXP TANTANGAN
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      STATUS
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      AKSI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFFFFF]">
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      01
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      dimas829
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      26-10-2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      150
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      Valid
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      <BiEdit className="bg-neutral-700 text-white w-[38px] h-[38px]" />
                    </td>
                  </tr>
                  <tr className="bg-[#ECECEC]">
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      02
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      dimas829
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      26-10-2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      100
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      Tidak Valid
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      <BiEdit className="bg-neutral-700 text-white w-[38px] h-[38px]" />
                    </td>
                  </tr>
                  <tr className="bg-[#FFFFFF]">
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      03
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      dimas829
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      26-10-2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      150
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      Menunggu Validasi
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      <BiEdit className="bg-neutral-700 text-white w-[38px] h-[38px]" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
