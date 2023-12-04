import React, { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { Input } from "@/components/ui/input";

import Layout from "../../components/layout";
import TextEditor from "@/components/texteditor/tipTap";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/breadcrumbs";

function EditNews() {
  return (
    <Layout>
      <div>
        <Breadcrumbs pages="Artikel" />
      </div>
      <form>
        <div className="mt-8 border-t-2 border-l-2 border-b-2 rounded-xl">
          <div className="bg-primary-green p-7 rounded-t-xl">
            <h1 className="font-bold text-white">Tambah Artikel</h1>
          </div>
          <div className="mt-6 ml-4 flex space-x-3 ">
            <div className="w-full ">
              <label className="font-bold" htmlFor="">
                Judul
              </label>
              <Input
                className="border rounded-sm border-black p-2 bg-white mt-3"
                type="text"
                name="title"
                placeholder="Judul Artikel"
              />
            </div>
            <div className="flex flex-col mb-4 w-full">
              <label className="text-black font-bold mb-3">Unggah File</label>
              <div className="border p-2 rounded-sm border-black flex">
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer flex items-center px-2 bg-[#404040] w-[6.5rem] text-white rounded-md"
                >
                  <input
                    id="fileInput"
                    className="border rounded-sm border-black p-[4px]"
                    type="file"
                    accept="image/*"
                    name="image"
                    hidden
                  />
                  <p className="mx-auto">Pilih File</p>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-6 ml-4">
            <label className="text-black font-bold">Konten</label>
            <div>
              <TextEditor />
            </div>
          </div>
          <div className="mt-6 justify-end mb-7 flex space-x-3">
            <button
              type="button"
              className="bg-secondary-green text-white px-4 py-2 rounded"
            >
              Edit Artikel
            </button>
            <button
              type="button"
              className="border border-black text-black px-4 rounded"
            >
              Batal
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default EditNews;
