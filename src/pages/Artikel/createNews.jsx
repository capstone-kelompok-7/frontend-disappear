import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { IoMdCloudUpload } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Layout from "../../components/layout";
import { Inputt } from "../../components/input";

function CreateNews() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleTambahArtikel = () => {
    // Logika untuk menangani tombol "Tambah Artikel"
    console.log("Tambah Artikel");
  };

  const handleBatal = () => {
    // Logika untuk menangani tombol "Batal"
    console.log("Batal");
  };

  return (
    <Layout>
      <form action="">
        <div className="mx-10 mt-5 text-xl">
          <button className="flex items-center space-x-2">
            <IoArrowBack />
            <div className="font-bold">Artikel</div>
          </button>
        </div>
        <div className="mt-2 mx-20 border-t-2 border-l-2 border-b-2">
          <div className="mt-5 ml-5">
            <h1 className="font-bold">Tambah Artikel</h1>
          </div>
          <hr className="border border-black mt-5" />
          <div className="mt-6 ml-4 flex space-x-3">
            <Inputt
              className="border rounded-sm border-black p-[7px]"
              type="text"
              label="Judul"
              placeholder="Judul Artikel"
            />
            <div className="flex flex-col mb-4 w-full">
              <label className="text-black font-bold mb-3">Unggah File</label>
              <div className="border p-[7px] rounded-sm border-black">
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer flex items-center px-2 bg-[#404040] w-[6.5rem] text-white rounded-md"
                >
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
          <div className="mt-6 ml-4">
            <label className="text-black font-bold">Konten</label>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper mt-4 overflow-hidden"
              editorClassName="demo-editor border border-black"
              onEditorStateChange={onEditorStateChange}
            />
          </div>
          <div className="mt-20 ml-4 mb-7 flex space-x-3">
            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleTambahArtikel}
            >
              Tambah Artikel
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 rounded"
              onClick={handleBatal}
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
