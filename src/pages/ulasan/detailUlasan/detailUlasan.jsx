import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";
import { Progress } from "flowbite-react";
import Layout from "@/components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import Star from "@/components/review/star";

export default function LihatUlasan() {
  const apiStarValue = 4;

  return (
    <Layout>
      <div className="mt-3">
        <Breadcrumbs pages="Lihat Ulasan" />
      </div>

      <div className="mt-2 mb-4 mx-6 px-[15px] py-5 flex justify-between">
        <div className="flex items-center font-bold w-full">
          <Link to="/ulasan">
            <BsArrowLeft />
          </Link>
          <p className="pl-2 text-xl">Kembali</p>
        </div>
      </div>

      <div className="mx-10 flex mt-4 items-center">
        <div className="flex-col w-1/4">
          <p className="font-semibold pb-4">Totebag</p>
          <p>P00B4532</p>
        </div>

        <div className="flex flex-row justify-end w-3/4">
          <div className="flex-col w-1/4 mr-10">
            <p className="font-semibold pb-4">Total Ulasan</p>
            <div className="flex">
              <p className="text-2xl font-bold">100K</p>
              <p className="font-semibold pl-5">pelanggan</p>
            </div>
          </div>

          <div className="flex-col w-1/4 mr-10">
            <p className="font-semibold pb-4">Total Rating</p>
            <div className="flex">
              <p className="text-2xl font-bold pr-5">4.8</p>
              <Star starValue={apiStarValue} />
            </div>
          </div>

          <div className="flex-col w-1/4">
            <div className="flex items-center h-4">
              <p className="pr-2 text-sm">5</p>
              <Progress progress={35} className="w-52" />
              <p className="pl-2 text-sm">35</p>
            </div>

            <div className="flex items-center">
              <p className="pr-2 text-sm">4</p>
              <Progress progress={22} className="w-52" />
              <p className="pl-2 text-sm">22</p>
            </div>

            <div className="flex items-center h-4">
              <p className="pr-2 text-sm">3</p>
              <Progress progress={28} className="w-52" />
              <p className="pl-2 text-sm">28</p>
            </div>

            <div className="flex items-center">
              <p className="pr-2 text-sm">2</p>
              <Progress progress={10} className="w-52" />
              <p className="pl-2 text-sm">10</p>
            </div>

            <div className="flex items-center h-4">
              <p className="pr-2 text-sm">1</p>
              <Progress progress={5} className="w-52" />
              <p className="pl-2 text-sm">5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 mx-[60px] shadow-md bg-white rounded-[5px]">
        <div className="flex justify-between">
          <h1 className="font-semibold">Nama</h1>
        </div>
      </div>
    </Layout>
  );
}
