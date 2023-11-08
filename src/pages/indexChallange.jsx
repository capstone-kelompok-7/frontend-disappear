import { useState } from "react";
import Layout from "../components/layout";
import { AiOutlinePlus } from "react-icons/ai";
import { VscTriangleDown } from "react-icons/vsc";

function App() {
  return (
    <div className="flex">
      <Layout>
        <div className="mt-6 mb-6 mx-10 px-[15px] py-5 bg-white rounded-[5px] shadow-md flex justify-between">
          <h1 className="font-bold">Tantangan</h1>
          <p>Dashborad / Tantangan</p>
        </div>

        <div className="mt-6 mb-6 mx-10 px-[15px] py-5 shadow-md bg-white rounded-[5px]">
          <div className="flex justify-between pb-7">
            <button className="flex items-center space-x-2 border bg-neutral-400 text-white p-3 rounded-lg">
              <AiOutlinePlus />
              <div>Buat Tantangan</div>
            </button>
            <div className="flex space-x-3">
              <div className="my-auto">
                <button className="flex border text-black hover:bg-slate-400 hover:text-white p-4 items-center space-x-40 rounded-lg">
                  <div>Filter</div>
                  <VscTriangleDown />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded- border border-neutral-500">
                <thead>
                  <tr className="bg-[#C7C7C7] text-black">
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      Nama
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      Usia
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-black uppercase tracking-wider border border-neutral-500">
                      Alamat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFFFFF]">
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      John Doe
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      30
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      123 Main St
                    </td>
                  </tr>
                  <tr className="bg-[#ECECEC]">
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      Jane Smith
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      25
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-neutral-500">
                      456 Elm St
                    </td>
                  </tr>
                  {/* <!-- Tambahkan baris lain sesuai kebutuhan --> */}
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
