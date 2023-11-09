import { useState, useEffect } from "react";
import Layout from "../components/layout";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { Select } from "../components/input";
import { getArtikel } from "../utils/api/artikel/apiArtikel";

function App() {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    fetchArtikel();
  }, []);

  async function fetchArtikel() {
    try {
      const result = await getArtikel();
      setArtikel(result.data);
      console.log(result.data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Layout>
      <div className="mx-[41px] flex mt-7 border-spacing-x-2 shadow-md p-4 justify-between items-center">
        <h1 className="font-bold">Artikel</h1>
        <p>Dashborad/Artikel</p>
      </div>
      <div className="mt-9 mx-[41px] border-t-2 border-l-2 p-4">
        <div className="flex space-x-3 justify-between">
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 border bg-slate-500 hover:bg-slate-200 text-white hover:text-black hover:border-black p-4 rounded-lg">
              <AiOutlinePlus />
              <div>Buat Artikel</div>
            </button>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Cari Artikel"
                className="border pl-4 p-4 px-14 rounded-lg"
              />
              <FiSearch className="absolute ml-56" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <p>Artikel Untuk</p>
            <SlCalender size={20} />
            <Select
              options={["30 Hari Terakhir", "7 Hari Terakhir", "Hari ini"]}
            />
          </div>
          <div className="flex items-center space-x-3">
            <p>Artikel Untuk</p>
            <SlCalender size={20} />
            <Select
              options={["30 Hari Terakhir", "7 Hari Terakhir", "Hari ini"]}
            />
          </div>
        </div>
        <div>
          {artikel.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <img src={item.image_url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default App;
