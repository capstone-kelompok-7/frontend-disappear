import Layout from "../components/layout";
import SideBar from "../components/sidebar/sidebar";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { VscTriangleDown } from "react-icons/vsc";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Layout>
        <div className="mt-7 border-spacing-x-2 shadow-md p-4 flex justify-between items-center">
          <h1 className="font-bold">Artikel</h1>
          <p>Dashborad/Artikel</p>
        </div>
        <div className="mt-9 border-t-2 border-l-2 p-4 flex justify-between">
          <button className="flex items-center space-x-2 border bg-slate-500 text-white p-4 rounded-lg">
            <AiOutlinePlus />
            <div>Buat Artikel</div>
          </button>
          <div className="flex space-x-3">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Cari Artikel"
                className="border pl-4 p-4 px-9 rounded-lg"
              />
              <FiSearch className="absolute ml-52" />
            </div>
            <div className="my-auto">
              <button className="flex border text-black hover:bg-slate-400 hover:text-white p-4 items-center space-x-40 rounded-lg">
                <div>Filter</div>
                <VscTriangleDown />
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
