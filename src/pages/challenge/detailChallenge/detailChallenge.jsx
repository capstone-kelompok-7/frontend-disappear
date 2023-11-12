import React from "react";
import Layout from "../../../components/layout";
import { BsArrowLeft } from "react-icons/bs";

export default function DetailChallange() {
  return (
    <Layout>
      <div className="mt-6 mb-6 mx-6 px-[15px] py-5 flex justify-between">
        <div className="flex items-center font-bold">
          <BsArrowLeft />
          <p className="pl-2 text-xl">Tantangan</p>
        </div>
      </div>

      <div className="p-6 mx-[60px] shadow-md bg-white rounded-[5px]">
        <div className="flex justify-between">
          <h1 className="font-bold text-[40px]">Tantangan Menanam Pohon</h1>
          <div className="bg-zinc-300 rounded-xl py-1 px-6 font-semibold">
            <p>Belum Kadaluwarsa</p>
          </div>
        </div>

        <div className="flex my-6">
          <div className="justify-center items-center gap-2.5 flex">
            <p className="font-semibold">Mulai</p>
            <p className="grow shrink text-xs font-medium">24-10-2023</p>
          </div>
          <div className="justify-center items-center gap-2.5 pl-7 flex">
            <p className="font-semibold">Berakhir</p>
            <p className="grow shrink text-xs font-medium">31-10-2023</p>
          </div>
        </div>
        <div className="mb-10">
          <p>EXP : 150</p>
        </div>

        <div className="w-full h-[230px] bg-zinc-300 my-5 rounded-[5px]"></div>
        <p className="text-xl">
          Tanamlah pohon saat kamu berjalan, bermeditasi, atau memasak. Ambil
          FOTO saat kamu membuatnya. Unggah di Instagram Anda dan beri tag
          @disappear !!!
          <br />
          #SAVEWORLD #SAVETHEEART #BETTERLIFE
          <br />
          <br />
          Mengapa tantangan pohon?
          <br />
          Karena Pohon membantu membersihkan udara yang kita hirup, menyaring
          air yang kita minum dan menyediakan habitat bagi lebih dari 80%
          keanekaragaman hayati di dunia. Hutan menyediakan lapangan pekerjaan
          bagi lebih dari 1,6 miliar orang, menyerap karbon berbahaya dari
          atmosfer, dan merupakan bahan utama dari 25% obat-obatan.
        </p>
      </div>
    </Layout>
  );
}
