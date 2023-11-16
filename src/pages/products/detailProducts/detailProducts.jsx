import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Layout from "@/components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import { IoArrowBack } from "react-icons/io5";

export default function DetailProducts() {
  const navigate = useNavigate();

  function toRoute() {
    navigate("/produk/edit-produk");
  }
  return (
    <>
      <Layout>
        <Breadcrumbs pages="Detail Produk" />
        <Link to="/produk" className="flex items-center my-5">
          <IoArrowBack />
          <p className=" text-base font-medium">Produk</p>
        </Link>
        <div className=" w-full border shadow rounded mb-5">
          <div className="flex p-5 gap-8">
            <div className="w-2/3">
              <img src="" alt="" className="bg-gray-300 w-full h-96 rounded" />
              <div className="flex mt-3 gap-3">
                <img
                  src=""
                  alt=""
                  className="bg-gray-300 w-full h-28 rounded"
                />
                <img
                  src=""
                  alt=""
                  className="bg-gray-300 w-full h-28 rounded"
                />
                <img
                  src=""
                  alt=""
                  className="bg-gray-300 w-full h-28 rounded"
                />
              </div>
              <div className="flex mt-6">
                <p className="bg-gray-300 border border-black px-5 py-1 rounded-full font-normal text-base">
                  category
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between w-full items-center">
                <h1 className=" text-3xl font-semibold">GunnySack Bag</h1>
                <p className=" text-xs font-semibold">20 gram</p>
              </div>
              <div className="flex my-3 items-center">
                <p>*****</p>
                <p className=" text-xs font-medium">
                  (4.0 Partisipasi Pelanggan)
                </p>
              </div>
              <div className=" flex items-center gap-8">
                <p className=" text-base font-semibold">Rp. 120.000</p>
                <p className=" text-xs font-normal">
                  Diskon Produk : Rp. 15.000
                </p>
              </div>
              <div className=" mt-8">
                <p className=" text-base font-semibold">Deskripsi Produk</p>
                <p className="mt-4 font-normal text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, culpa! Officia nihil eum sequi minus quia in
                  molestias dolor vel autem, possimus iusto cumque sunt eveniet
                  dolorem ratione at voluptates.
                </p>
              </div>
            </div>
          </div>
          <div className="m-4 flex justify-end">
            <Button
              label="Hapus Produk"
              className="bg-white text-black border rounded border-black py-4 px-6 text-sm font-medium"
            />
            <Button
              label="Edit Produk"
              className="bg-black text-white border rounded py-4 px-6 text-sm font-medium ml-5"
              onClick={toRoute}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
