import { useNavigate } from "react-router-dom";

import Layout from "@/components/layout";
import { FiSearch } from "react-icons/fi";
import Button from "@/components/button";
import Breadcrumbs from "@/components/breadcrumbs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropdownTable from "@/components/dropdownTable/dropdownTable";

function IndexChallenge() {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <Layout>
        <div className="my-6">
          <Breadcrumbs pages="Tantangan" />
        </div>

        <div className="mt-6 mb-6 mx-10 px-[15px] py-5 shadow-md bg-white rounded-[5px]">
          <div className="flex items-center pb-7 gap-6">
            <Button
              className="flex items-center space-x-2 border bg-neutral-400 text-white p-3 rounded-lg"
              label="Buat Tantangan"
              icon="+"
              onClick={() => navigate("/buat-tantangan")}
            />

            <div className="justify-items-start">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Cari Artikel"
                  className="border p-3 rounded-lg"
                />
                <FiSearch className="absolute ml-44" />
              </div>
            </div>

            <div className="ml-auto">
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
                  <DropdownMenuItem>Kadaluwarsa</DropdownMenuItem>
                  <DropdownMenuItem>Belum Kadaluwarsa</DropdownMenuItem>
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
                      NAMA TANTANGAN
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      TANGGAL MULAI
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      TANGGAL BERAKHIR
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      EXP
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFFFFF]">
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      01
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      Tantangan menanam pohon
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      24-10-2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      31-10-2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      150
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      Belum Kadaluwarsa
                      <div className="relative inline-block">
                        <DropdownTable />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-[#ECECEC]">
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      02
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      Tantangan menanam pohon
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      24-10-2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      31-10-2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      150
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      Belum Kadaluwarsa
                      <div className="relative inline-block">
                        <DropdownTable />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-[#FFFFFF]">
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      03
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      Tantangan menanam pohon
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      24-10-2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      31-10-2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      100
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      Belum Kadaluwarsa
                      <div className="relative inline-block">
                        <DropdownTable />
                      </div>
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

export default IndexChallenge;
