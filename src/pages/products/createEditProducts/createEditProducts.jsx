import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import Dropzone from "@/components/dropzone";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/button";
import AsyncSelect from "react-select/async";
import { Link, useNavigate } from "react-router-dom";
import { createProducts } from "@/utils/api/products/api";
import { useToast } from "@/components/ui/use-toast";
import { FaRegCheckCircle } from "react-icons/fa";
import { CrossCircledIcon } from "@radix-ui/react-icons";

const schema = z.object({
  productsName: z.string().min(1, { message: "Field tidak boleh kosong" }),

  productsPrice: z
    .string()
    .min(1, { message: "Field tidak boleh kosong" })
    .refine((value) => !Number.isNaN(parseInt(value)), {
      message: "Harus berupa angka",
    }),
  discount: z
    .string()
    .min(1, { message: "Field tidak boleh kosong" })
    .refine((value) => !Number.isNaN(parseInt(value)), {
      message: "Harus berupa angka",
    }),
  stock: z
    .string()
    .min(1, { message: "Field tidak boleh kosong" })
    .refine((value) => !Number.isNaN(parseInt(value)), {
      message: "Harus berupa angka",
    }),
  exp: z
    .string()
    .min(1, { message: "Field tidak boleh kosong" })
    .refine((value) => !Number.isNaN(parseInt(value)), {
      message: "Harus berupa angka",
    }),
  gram: z
    .string()
    .min(1, { message: "Field tidak boleh kosong" })
    .refine((value) => !Number.isNaN(parseInt(value)), {
      message: "Harus berupa angka",
    }),
  description: z.string().min(1, { message: "Field tidak boleh kosong" }),
});

export default function CreateEditProducts() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data) {
    try {
      const newProduct = {
        name: data.productsName,
        description: data.description,
        gram_plastic: parseInt(data.gram),
        price: parseInt(data.productsPrice),
        stock: parseInt(data.stock),
        discount: parseInt(data.discount),
        exp: parseInt(data.exp),
        categories: [4],
      };
      await createProducts(newProduct);
      navigate("/produk");
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Berhasil Menambah Produk!
            </span>
          </div>
        ),
        description:
          "Data Produk berhasil ditambahkan, nih. Silahkan nikmati fitur lainnya!!",
      });
      reset();
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menambahkan Produk!</span>
          </div>
        ),
        description: { error },
      });
    }
  }

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "#ccc",
        borderRadius: "9999px",
        borderWidth: "1px",
        borderColor: "#000",
        fontSize: "12px",
        paddingLeft: "10px",
        paddingRight: "10px",
      };
    },
  };

  function handleChange(selectedOption) {
    console.log("handleChange", selectedOption);
  }

  const options = [
    { label: "Strawberry", value: "strawberry" },
    { label: "Melon", value: "melon" },
    { label: "Nangka", value: "nangka" },
    { label: "Semangka", value: "semangka" },
  ];

  const loadOptions = async (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log("loadOptions", searchValue, filteredOptions);
      callback(filteredOptions);
    }, 2000);
  };

  return (
    <>
      <Layout>
        <Breadcrumbs pages="Tambah Produk" />
        <form
          className="bg-white rounded border my-5 p-5 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full justify-between gap-14">
            <div className=" w-full">
              <div>
                <label>Nama Produk</label>
                <Input
                  register={register}
                  name="productsName"
                  placeholder="Nama Produk"
                  type="text"
                  className=" mt-4"
                  error={errors.productsName?.message}
                />
              </div>
              <div className="mt-5">
                <label>Kategori Produk</label>
                <AsyncSelect
                  loadOptions={loadOptions}
                  defaultOptions
                  onChange={handleChange}
                  isMulti
                  styles={colorStyles}
                />
              </div>
              <div className="mt-5">
                <label>Harga Produk</label>
                <Input
                  placeholder="Rp."
                  type="number"
                  className=" mt-4"
                  register={register}
                  name="productsPrice"
                  error={errors.productsPrice?.message}
                />
              </div>
              <div className="mt-5">
                <label>Diskon (Rp.)</label>
                <Input
                  placeholder="Rp."
                  type="number"
                  className=" mt-4"
                  register={register}
                  name="discount"
                  error={errors.discount?.message}
                />
              </div>
              <div className="mt-5">
                <label>Stock Produk</label>
                <Input
                  placeholder="Stock Produk"
                  type="number"
                  className=" mt-4"
                  register={register}
                  name="stock"
                  error={errors.stock?.message}
                />
              </div>
              <div className=" flex mt-5 w-full justify-between">
                <div>
                  <label>EXP</label>
                  <Input
                    placeholder="00"
                    type="number"
                    className=" mt-4"
                    register={register}
                    name="exp"
                    error={errors.exp?.message}
                  />
                </div>
                <div>
                  <label>Kalkulasi Gram Plastik</label>
                  <Input
                    placeholder="Gram"
                    type="number"
                    className=" mt-4"
                    register={register}
                    name="gram"
                    error={errors.gram?.message}
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <Dropzone className=" border-dashed bg-gray-300 border-black w-full border-2 rounded cursor-pointer" />
            </div>
          </div>
          <div className="mt-5">
            <label>Deskripsi Produk</label>
            <Textarea
              placeholder="Deskripsi Produk"
              className=" h-52 mt-4"
              register={register}
              name="description"
              error={errors.description?.message}
            />
          </div>

          <div className=" gap-4 flex items-center justify-end mt-5">
            <Link
              to="/produk"
              className=" bg-white px-10 py-3 rounded text-primary-green border border-primary-green"
            >
              Batal
            </Link>
            <Button
              type="submit"
              label="Tambah Produk"
              className=" bg-secondary-green px-3 py-3 rounded border text-white"
            />
          </div>
        </form>
      </Layout>
    </>
  );
}
