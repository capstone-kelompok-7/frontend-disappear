import React from "react";
import Layout from "../../components/layout";
import { IoArrowBack } from "react-icons/io5";
import { Input } from "../../components/input";
import { IoMdCloudUpload } from "react-icons/io";

function CreateNews() {
  return (
    <Layout>
      <form action="">
        <div className="mx-[41px] mt-5 text-xl">
          <button className="flex items-center space-x-2">
            <IoArrowBack />
            <div className="font-bold">Artikel</div>
          </button>
        </div>
        <div className="mt-9 mx-[70px] border-t-2 border-l-2">
          <div className="mt-5 ml-5 ">
            <h1 className="font-bold">Tambah Artikel</h1>
          </div>
          <hr className="border border-black mt-5" />
          <div className="mt-6 ml-4 flex space-x-3">
            <Input
              className="border rounded-sm border-black p-[7px]"
              type="text"
              label="Judul"
              placeholder="Judul Artikel"
            />
            <div className="flex flex-col mb-4 w-full">
              <label className="text-black font-bold mb-3">Unggah File</label>
              <div className="border p-[7px] rounded-sm border-black">
                <label htmlFor="fileInput" className="cursor-pointer flex items-center px-2 bg-[#404040] w-[6.5rem] text-white rounded-md">
                  <input
                    id="fileInput"
                    className="border rounded-sm border-black p-[4px]"
                    type="file"
                    accept="image/*"
                    hidden
                  />
                  <IoMdCloudUpload className="mr-2" />
                  Pilih File
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default CreateNews;
