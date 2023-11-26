import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Layout from "@/components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import { IoArrowBack } from "react-icons/io5";
import Star from "@/components/review/star";
import Delete from "@/components/delete/delete";
import { getDetailProducts } from "@/utils/api/products/api";
import formatCurrency from "@/utils/formatter/currencyIdr";

export default function DetailProducts() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailProducts(id);
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();

  function toRoute() {
    navigate("/produk/edit-produk");
  }

  function handleDelete() {
    Delete({
      title: "Yakin mau hapus data?",
      text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
    });
  }

  let apiStarValue = 4;
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
                {Array.isArray(products.categories) &&
                  products.categories.map((category) => (
                    <p
                      className="bg-gray-300 border border-black px-5 py-1 rounded-full font-normal text-base mr-3"
                      key={category.id}
                    >
                      {category.name}
                    </p>
                  ))}
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between w-full items-center">
                <h1 className=" text-3xl font-semibold">{products.name}</h1>
                <p className=" text-xs font-semibold">
                  {products.gram_plastic} gram
                </p>
              </div>
              <div className="flex my-3 items-center">
                <Star starValue={apiStarValue} />
                <p className=" text-xs font-medium">
                  (4.0 Partisipasi Pelanggan)
                </p>
              </div>
              <div className=" flex items-center gap-8">
                <p className=" text-base font-semibold">
                  {formatCurrency(products.price)}
                </p>
                <p className=" text-xs font-normal">
                  Diskon Produk : {formatCurrency(products.discount)}
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
              onClick={handleDelete}
              label="Hapus Produk"
              className="bg-white text-red-600 border rounded border-red-600 py-4 px-6 text-sm font-medium"
            />
            <Button
              label="Edit Produk"
              className="bg-primary-green text-white border rounded py-4 px-7 text-sm font-medium ml-5"
              onClick={toRoute}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
