import React, { useState } from "react";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import Dropzone from "@/components/dropzone";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/button";
import Select from "react-select";

export default function CreateEditProducts() {
  const [isEdit, setIsEdit] = useState(true);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "semangka", label: "Semangka" },
  ];

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

  return (
    <>
      <Layout>
        <Breadcrumbs pages={!isEdit ? "Edit Produk" : "Buat Produk"} />
        <form className="bg-white rounded border my-5 p-5 flex flex-col">
          <div className="flex w-full justify-between gap-14">
            <div className=" w-full">
              <div>
                <label>Nama Produk</label>
                <Input
                  placeholder="Nama Produk"
                  type="text"
                  className=" mt-4"
                />
              </div>
              <div className="mt-5">
                <label>Kategori Produk</label>
                <Select
                  options={options}
                  onChange={handleChange}
                  isMulti
                  styles={colorStyles}
                />
              </div>
              <div className="mt-5">
                <label>Harga Produk</label>
                <Input placeholder="Rp." type="number" className=" mt-4" />
              </div>
              <div className="mt-5">
                <label>Diskon (Rp.)</label>
                <Input placeholder="Rp." type="number" className=" mt-4" />
              </div>
              <div className="mt-5">
                <label>Stock Produk</label>
                <Input
                  placeholder="Stock Produk"
                  type="number"
                  className=" mt-4"
                />
              </div>
              <div className=" flex mt-5 w-full justify-between">
                <div>
                  <label>EXP</label>
                  <Input placeholder="00" type="number" className=" mt-4" />
                </div>
                <div>
                  <label>Kalkulasi Gram Plastik</label>
                  <Input placeholder="Gram" type="number" className=" mt-4" />
                </div>
              </div>
            </div>
            <div className="w-full">
              <Dropzone className=" border-dashed bg-gray-300 border-black w-full border-2 rounded" />
            </div>
          </div>
          <div className="mt-5">
            <label>Deskripsi Produk</label>
            <Textarea placeholder="Deskripsi Produk" className=" h-52 mt-4" />
          </div>
          <Button
            type="submit"
            label="Publish Produk"
            className="bg-gray-500 px-3 py-2 mt-5 rounded text-white self-end"
          />
        </form>
      </Layout>
    </>
  );
}
