import React, { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

import Layout from "../../components/layout";
import { Inputt } from "../../components/input";
import TextEditor from "@/components/texteditor/tipTap";
import { Link } from "react-router-dom";

function CreateNews() {
  return (
    <Layout>
      <form>
        <div className="mt-5 text-xl">
          <Link to="/artikel">
            <button className="flex items-center space-x-2">
              <IoArrowBack />
              <div className="font-bold">Artikel</div>
            </button>
          </Link>
        </div>
        <div className="mt-5 mx-8 border-t-2 border-l-2 border-b-2">
          <div className="mt-5 ml-5">
            <h1 className="font-bold">Tambah Artikel</h1>
          </div>
          <hr className="border border-black mt-5" />
          <div className="mt-6 ml-4 flex space-x-3">
            <Inputt
              className="border rounded-sm border-black p-2"
              type="text"
              name="title"
              label="Judul"
              placeholder="Judul Artikel"
            />
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
                  <IoMdCloudUpload className="mr-2" />
                  Pilih File
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
          <div className="mt-6 ml-4 mb-7 flex space-x-3">
            <button
              type="button"
              className="bg-slate-600 text-white px-4 py-2 rounded"
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

export default CreateNews;
