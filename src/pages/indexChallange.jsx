import { useState } from "react";
import Layout from "../components/layout";
import { AiOutlinePlus } from "react-icons/ai";
import { VscTriangleDown } from "react-icons/vsc";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
                      <div className="absolute inline-block ml-20">
                        <div>
                          <button
                            type="button"
                            className="flex px-2 text-gray-600 hover:text-gray-800"
                            onClick={toggleDropdown}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M12 5C13.1046 5 14 5.89543 14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5ZM12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12ZM12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19Z"
                              ></path>
                            </svg>
                          </button>
                        </div>

                        {isOpen && (
                          <div className="absolute right-0 mt-2 w-20 rounded-md shadow-lg bg-neutral-400 ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                              >
                                Edit
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                              >
                                Hapus
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                              >
                                Lihat
                              </a>
                            </div>
                          </div>
                        )}
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
                      Kadaluwarsa
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
