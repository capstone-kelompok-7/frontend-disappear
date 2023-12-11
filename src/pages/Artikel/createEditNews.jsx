import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { CrossCircledIcon } from "@radix-ui/react-icons";

import Layout from "../../components/layout";
import TextEditor from "@/components/texteditor/tipTap";
import { artikelSchema } from "@/utils/api/artikel/schemaArtikel";
import Breadcrumbs from "@/components/breadcrumbs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  createArtikel,
  getDetailArtikel,
  updateArtikel,
} from "@/utils/api/artikel/api";
import { Loading } from "@/components/loading";
import Button from "@/components/button";

function CreateEditNews() {
  const { id } = useParams();
  const [artikel, setArtikel] = useState([]);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [fileName, setFileName] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(artikelSchema),
  });

  const handleFileNameChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setValue("photo", [selectedFile]);
    }
  };

  async function onSubmit(data) {
    try {
      const newArtikel = {
        title: data.title,
        photo: data.photo[0],
        content: data.content,
      };

      await createArtikel(newArtikel);
      navigate("/artikel");
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Berhasil Menambahkan Artikel!
            </span>
          </div>
        ),
        description:
          "Data Artikel berhasil ditambahkan, nih. Silahkan nikmati fitur lainnya!!",
      });
      reset();
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menambahkan Artikel!</span>
          </div>
        ),
        description: "Gagal menambahkan Artikel",
      });
    }
  }

  useEffect(() => {
    fetchArtikel();
  }, []);

  async function fetchArtikel() {
    try {
      setIsLoading(true);
      const result = await getDetailArtikel(id);
      setArtikel(result.data);
      if (result.data) {
        setSelectedId(result.data.id);
        setValue("title", result.data.title);
        setValue("content", result.data.initialContent);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmitEdit(data) {
    try {
      const editArtikel = {
        id: selectedId,
        photo: data.photo[0],
        title: data.title,
        content: data.content,
      };
      setIsLoading(true);
      await updateArtikel(editArtikel);
      navigate("/artikel");
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Berhasil Mengubah Artikel!
            </span>
          </div>
        ),
        description:
          "Data Artikel berhasil diperbarui, nih. Silahkan nikmati fitur lainnya!!",
      });
      setSelectedId(0);
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menambahkan Artikel!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penyimpanan perubahan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Layout>
      <div>
        <Breadcrumbs pages="Artikel" />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <form
          onSubmit={handleSubmit(selectedId === 0 ? onSubmit : onSubmitEdit)}
        >
          <div className="mt-8 border-t-2 border-l-2 border-b-2 rounded-xl">
            <div className="bg-primary-green p-7 rounded-t-xl">
              <h1 className="font-bold text-white">Tambah Artikel</h1>
            </div>
            <div className="mt-6 ml-4 flex space-x-3">
              <div className="w-full ">
                <label className="font-bold" htmlFor="">
                  Judul
                </label>
                <Input
                  register={register}
                  className="border rounded-sm border-black p-2 bg-white mt-3"
                  type="text"
                  name="title"
                  placeholder="Judul Artikel"
                  error={errors.title?.message}
                />
              </div>
              <div className="flex flex-col mb-4 w-full">
                <label className="text-black font-bold mb-3">Unggah File</label>
                <div
                  className={`border p-2 rounded-sm border-black flex ${
                    errors.image ? "border-red-500" : "border"
                  }`}
                >
                  <label
                    htmlFor="gambar-artikel"
                    className="cursor-pointer flex items-center px-5 bg-[#404040] w-[6.5rem] text-white rounded-md"
                  >
                    <p className="my-1 text-xs text-white">Pilih Foto</p>
                  </label>
                  <Input
                    id="gambar-artikel"
                    register={register}
                    type="file"
                    name="photo"
                    className="hidden"
                    onChange={handleFileNameChange}
                    accept="image/jpeg, image/jpg, image/png"
                  />
                  {fileName && (
                    <p className="ml-2 text-sm text-gray-500">{`${fileName}`}</p>
                  )}
                </div>
                <div className={`text-xs mt-1 ${"text-gray-500"}`}>
                  {errors.photo ? (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.photo.message}
                    </div>
                  ) : (
                    "*maksimal 2MB dengan format PNG, JPG, JPEG"
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 ml-4">
              <div className="flex justify-between items-center">
                <label className="text-black font-bold">Konten</label>
                <Button
                  label="Generate content article"
                  className="bg-secondary-green px-2 py-2 rounded border text-white"
                />
              </div>
              <div className="overflow-auto">
                <TextEditor
                  register={register}
                  error={errors.content?.message}
                  setContent={(content) => setValue("content", content)}
                  initialContent={artikel.content}
                />
              </div>
            </div>
            <div className="justify-end mb-7 flex space-x-3">
              <button
                type="button"
                className="border border-black text-black px-4 rounded"
                onClick={() => navigate(`/artikel`)}
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-secondary-green text-white px-4 py-2 rounded"
              >
                {selectedId === 0 ? "Tambah Artikel" : "Edit Artikel"}
              </button>
            </div>
          </div>
        </form>
      )}
    </Layout>
  );
}

export default CreateEditNews;
