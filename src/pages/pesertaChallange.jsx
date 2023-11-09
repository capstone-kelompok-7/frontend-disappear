import { useState } from "react";
import Layout from "../components/layout";
import { BiEdit } from "react-icons/bi";
import { VscTriangleDown } from "react-icons/vsc";

function App() {
  return (
    <div className="flex">
      <Layout>
        <div className="mt-6 mb-6 mx-10 px-[15px] py-5 bg-white rounded-[5px] shadow-md flex justify-between">
          <h1 className="font-bold">Peserta Tantangan</h1>
          <p>Dashborad / Peserta Tantangan</p>
        </div>

        <div className="mt-6 mb-6 mx-10 px-[15px] py-5 shadow-md bg-white rounded-[5px]">
          <div className="flex space-x-3 pb-7">
            <div className="my-auto">
              <button className="flex border text-black hover:bg-slate-400 hover:text-white p-4 items-center space-x-40 rounded-lg">
                <div>Filter</div>
                <VscTriangleDown />
              </button>
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
