import Layout from "../../components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import "../../styles/pelanggan/pelangganDetail.css";
import { FaUserCircle } from "react-icons/fa";
import { Progress } from "flowbite-react";
import Button from "@/components/button";
import Delete from "@/components/delete/delete";
function PelangganDetail() {
  const handleDelete = () => {
    Delete({
      title: "Yakin mau hapus data?",
      text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
    });
  };
  const exp = 950;
  const maxExp = 1001;
  const progressPercentage = (exp / maxExp) * 100;
  return (
    <Layout>
      <div className="">
        <Breadcrumbs pages="Detail Pelanggan" />
        <div className="w-[85%] px-5 py-5 m-8 mx-auto shadow-md bg-white font-bold text-lg">
          <h1>Pelanggan</h1>
        </div>
        <div className="flex">
          {/* kotak profile pict */}

          <div className="flex w-[30%] ml-[8%] border rounded-sm bg-white">
            <div className="pt-8 pl-6 text-8xl mb-4">
              <FaUserCircle />
            </div>
            <div className="flex flex-col pt-8 pl-8 pr-8 break-all">
              <p className="font-bold text-xl">Dimas Banyuwangis</p>
              <p className="text-base mt-[0.2rem]">
                dimasbayuwangis05@gmail.com
              </p>
              <p className="text-sm mt-[0.2rem] text-[#6E6E6E] ">
                Login terakhir 15 Agus 23, 10.35 AM
              </p>
            </div>
          </div>
          {/* kotak exp bar */}
          <div className="ml-16 w-[50%] mr-[8%] h-38 flex justify-center border rounded-sm bg-white  max-h-36">
            <div className="w-[85%] pt-14 relative">
              <Progress progress={progressPercentage} size="md" color="dark" />
              <div
                className="absolute top-[15%] text-[#000] font-bold whitespace-nowrap transform translate-x-[-50%]"
                style={{
                  left: `calc(${Math.min(progressPercentage, 100)}% - 20px)`,
                }}
              >
                {exp} EXP
              </div>
              <span
                className={`progress-dot ${
                  progressPercentage > 0 ? "dot-active" : ""
                }`}
                style={{ left: "0%" }}
              ></span>
              <span
                className={`progress-dot ${
                  progressPercentage > 50 ? "dot-active" : ""
                }`}
                style={{ left: "49%" }}
              ></span>
              <span
                className={`progress-dot ${
                  progressPercentage >= 100 ? "dot-active" : ""
                }`}
                style={{ left: "99%" }}
              ></span>
              <div className="exp-level">
                <div className="flex justify-between mt-2 absolute w-[100%] font-bold">
                  <p className="">Bronze</p>
                  <p className="ml-[-2rem]">Silver</p>
                  <p className="mr-[-1.5rem]">Gold</p>
                </div>
                <div className="flex justify-between absolute mt-8 w-[100%] whitespace-nowrap">
                  <p className="">0-500</p>
                  <p className="ml-[-1rem]">501-1000</p>
                  <p className="mr-[-2rem]">1001 ++</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* kotak informasi pelanggan */}
          <div className="w-[30%] ml-[8%] mt-8 border rounded-sm bg-white">
            <h1 className="pt-4 pl-6 font-bold text-lg">Informasi Pelanggan</h1>
            <div className="flex w-full">
              <div className="flex flex-col w-1/4 pt-6 pl-6 pr-6 gap-8">
                <p className="">Nama</p>
                <p className="">Email</p>
                <p className="">Telepon</p>
                <p className="">Alamat</p>
              </div>
              <div className="flex flex-col w-3/4 pl-6 pt-6 gap-8 pb-6">
                <p className="">Dimas Bayuwangis</p>
                <p className=" break-all">dimasbayuwangis05@gmail.com</p>
                <p className="">0848-7965-7909</p>
                <p className="">Bandung</p>
              </div>
            </div>
          </div>
          {/* aktivitas pelanggan */}
          <div className="w-[50%] mt-8 mr-[8%] h-[9.5rem] ml-16 rounded-sm bg-white">
            <h1 className="text-lg font-bold">Aktivitas Pelanggan</h1>
            <div className="flex">
              <div className="mt-6 w-[40%] h-[235px] border rounded-sm bg-white">
                <p className="flex justify-center mt-14 font-bold text-5xl">
                  145
                </p>
                <p className="flex justify-center font-medium text-xl">
                  Pesanan
                </p>
                <p className="flex justify-center mt-2 font-medium text-xs text-[#787878]">
                  13 pesanan sukses
                </p>
                <p className="flex justify-center mt-1 font-medium text-xs text-[#787878]">
                  5 pesanan gagal
                </p>
              </div>
              <div className="ml-8 mt-6 w-[40%] h-[235px] border rounded-sm bg-white">
                <p className="flex justify-center mt-14 font-bold text-5xl">
                  125
                </p>
                <p className="flex justify-center font-medium text-xl">
                  Tantangan
                </p>
                <p className="flex justify-center mt-2 font-medium text-xs text-[#787878]">
                  4 tantangan sukses
                </p>
                <p className="flex justify-center mt-2 font-medium text-xs text-[#787878]">
                  1 tantangan gagal
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-end relative mt-4 mr-[15.5%] whitespace-nowrap">
          <Button
            onClick={handleDelete}
            label="Hapus Pelanggan"
            className="text-white rounded-md bg-black py-3 px-3"
          />
        </div>
      </div>
    </Layout>
  );
}

export default PelangganDetail;
