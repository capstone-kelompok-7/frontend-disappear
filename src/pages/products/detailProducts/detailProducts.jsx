import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Layout from "@/components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import { IoArrowBack } from "react-icons/io5";
import Star from "@/components/review/star";
import Delete from "@/components/delete/delete";
import { deleteProducts, getDetailProducts } from "@/utils/api/products/api";
import formatCurrency from "@/utils/formatter/currencyIdr";
import { Loading } from "@/components/loading";
import { useToast } from "@/components/ui/use-toast";
import { FaRegCheckCircle } from "react-icons/fa";
import { CrossCircledIcon } from "@radix-ui/react-icons";

export default function DetailProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailProducts(id);
      setProducts(result.data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Memuat Produk!</span>
          </div>
        ),
        description:
          "Terjadi kesalahan saat memuat produk, silahkan cek internet terlebih dahulu atau reload halaman",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function toEditProduct(id) {
    navigate(`/produk/${id}/edit-produk`);
  }

  async function handleDeleteClick() {
    try {
      const result = await Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });

      if (result.isConfirmed) {
        setIsLoading(true);
        await deleteProducts(id);
        navigate("/produk");
        toast({
          title: (
            <div className="flex items-center">
              <FaRegCheckCircle />
              <span className="ml-2">Produk berhasil dihapus!</span>
            </div>
          ),
          description:
            "Data produk telah berhasil dihapus, nih. Silahkan nikmati fitur lainnya!",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menghapus Produk!</span>
          </div>
        ),
        description: "Terjadi kesalahan saat menghapus produk.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  let apiStarValue = products.rating;

  return (
    <>
      <Layout>
        <Breadcrumbs pages="Detail Produk" />
        <Link to="/produk" className="flex items-center my-5">
          <IoArrowBack />
          <p className=" text-base font-medium">Produk</p>
        </Link>
        {isLoading ? (
          <Loading />
        ) : (
          <div className=" w-full border shadow rounded mb-5">
            <div className="flex p-5 gap-8">
              <div className="w-4/6">
                <div>
                  {products.image_url && products.image_url.length > 0 && (
                    <img
                      src={products.image_url[0].image_url}
                      alt={products.image_url[0].image_url}
                      className="bg-gray-300 w-full h-96 rounded"
                    />
                  )}
                </div>
                {products.image_url && products.image_url.length > 1 && (
                  <div className="flex mt-3 gap-2">
                    {products.image_url.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image.image_url}
                        alt={image.image_url}
                        className="bg-gray-300 w-full h-28 rounded"
                      />
                    ))}
                  </div>
                )}
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
                    ({products.total_review} Partisipasi Pelanggan)
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
                    {products.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="m-4 flex justify-end">
              <Button
                onClick={() => handleDeleteClick(products.id)}
                label="Hapus Produk"
                className="bg-white text-red-600 border rounded border-red-600 py-4 px-6 text-sm font-medium"
              />
              <Button
                label="Edit Produk"
                className="bg-primary-green text-white border rounded py-4 px-7 text-sm font-medium ml-5"
                onClick={() => toEditProduct(products.id)}
              />
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}
