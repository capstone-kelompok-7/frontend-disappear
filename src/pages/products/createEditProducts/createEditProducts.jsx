import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/button";
import AsyncSelect from "react-select/async";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createImageProducts,
  createProducts,
  getDetailProducts,
  updateProducts,
} from "@/utils/api/products/api";
import { useToast } from "@/components/ui/use-toast";
import { FaRegCheckCircle } from "react-icons/fa";
import { getCategory } from "@/utils/api/category/api";
import { Loading } from "@/components/loading";
import { IoImagesOutline, IoTrashOutline } from "react-icons/io5";
import { CrossCircledIcon } from "@radix-ui/react-icons";

const MAX_FILE_SIZE = 1024 * 2000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const schema = z.object({
  productsName: z.string().min(1, { message: "Field tidak boleh kosong" }),

  productsPrice: z.number().min(1, { message: "Field tidak boleh kosong" }),
  discount: z.number().min(1, { message: "Field tidak boleh kosong" }),
  stock: z.number().min(1, { message: "Field tidak boleh kosong" }),
  exp: z.number().min(1, { message: "Field tidak boleh kosong" }),
  gram: z.number().min(1, { message: "Field tidak boleh kosong" }),
  description: z.string().min(1, { message: "Field tidak boleh kosong" }),
  category: z
    .array(z.object({ value: z.number(), label: z.string() }))
    .refine((value) => value.length > 0, {
      message: "Pilih setidaknya satu kategori",
    }),
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "*maksimal 2MB dengan format PNG, JPG, JPEG"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "*format PNG, JPG, JPEG"
    )
    .optional()
    .or(z.literal("")),
});

export default function CreateEditProducts() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [defaultOptions, setDefaultOptions] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [gambar, setGambar] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);

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
    defaultValues: {
      discount: 0,
      stock: 0,
      exp: 0,
      gram: 0,
      productsPrice: 0,
      category: [],
      image: "",
    },
  });

  function transformCategoriesToOptions(categories) {
    return categories.map((category) => ({
      label: category.name,
      value: category.id,
    }));
  }

  async function fetchCategoryOptions(searchValue, callback) {
    try {
      const result = await getCategory({ search: searchValue });
      const options = transformCategoriesToOptions(result.data);
      callback(options);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchDataDetail() {
    try {
      setIsloading(true);
      const result = await getDetailProducts(id);
      setProducts(result.data);

      if (result.data) {
        setSelectedId(result.data.id);
        setValue("productsName", result.data.name);
        setValue("productsPrice", result.data.price);
        setValue("discount", result.data.discount);
        setValue("exp", result.data.exp);
        setValue("stock", result.data.stock);
        setValue("gram", result.data.gram_plastic);
        setValue("description", result.data.description);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Mendapatkan Produk!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penyimpanan perubahan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    const fetchDefaultOptions = async () => {
      try {
        setIsloading(true);
        const result = await getCategory();
        const options = transformCategoriesToOptions(result.data);
        setDefaultOptions(options);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    };

    fetchDefaultOptions();
    if (id !== undefined) {
      fetchDataDetail();
    }
  }, []);

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
        categories: data.category.map((cat) => cat.value),
      };
      setIsloading(true);
      const createdProduct = await createProducts(newProduct);
      await Promise.all(
        gambar.map(async (image) => {
          await createImageProducts({
            product_id: createdProduct.data.id,
            photo: image,
          });
        })
      );

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
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menambahkan Produk!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penyimpanan perubahan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsloading(false);
    }
  }

  async function onSubmitEdit(data) {
    try {
      const editProducts = {
        id: selectedId,
        name: data.productsName,
        price: data.productsPrice,
        discount: data.discount,
        stock: data.stock,
        exp: data.exp,
        gram_plastic: data.gram,
        description: data.description,
        categories: data.category.map((cat) => cat.value),
      };
      setIsloading(true);
      await updateProducts(editProducts);

      navigate("/produk");
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Berhasil Mengubah Produk!
            </span>
          </div>
        ),
        description:
          "Data Produk berhasil diperbarui, nih. Silahkan nikmati fitur lainnya!!",
      });
      setSelectedId(0);
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Mengubah Produk!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penyimpanan perubahan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsloading(false);
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

  const loadOptions = async (searchValue, callback) => {
    await fetchCategoryOptions(searchValue, callback);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setGambar(files);
      setValue("image", files);
      const previewURLs = files.map((file) => URL.createObjectURL(file));
      setPreviewImage(previewURLs);
    }
  };

  const removeFile = (index) => {
    setPreviewImage((prevImages) => prevImages.filter((_, i) => i !== index));
    setGambar((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>
      <Layout>
        <Breadcrumbs
          pages={selectedId === 0 ? "Tambah Produk" : "Edit Produk"}
        />
        {isLoading ? (
          <>
            <Loading />
            <p className=" text-center">Tunggu sebentar ya :)</p>
          </>
        ) : (
          <form
            id="formCreateProducts"
            className="bg-white rounded border my-5 p-5 flex flex-col"
            onSubmit={handleSubmit(selectedId === 0 ? onSubmit : onSubmitEdit)}
          >
            <div className="flex w-full justify-between gap-14">
              <div className=" w-full">
                <div>
                  <label>Nama Produk</label>
                  <Input
                    id="inputNameProducts"
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
                    id="selectCategoryProducts"
                    loadOptions={loadOptions}
                    defaultOptions={defaultOptions}
                    onChange={(selectedOptions) =>
                      setValue("category", selectedOptions)
                    }
                    isMulti
                    styles={colorStyles}
                  />
                  {errors.category && (
                    <p className="text-xs text-left text-[#e50000] mt-1">
                      {errors.category?.message}
                    </p>
                  )}
                </div>
                <div className="mt-5">
                  <label>Harga Produk</label>
                  <Input
                    id="inputPriceProducts"
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
                    id="inputdiscountProducts"
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
                    id="inputStockProducts"
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
                      id="inputExpProducts"
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
                      id="inputGramProducts"
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
                <label className="w-full h-[12rem] flex flex-col items-center justify-center p-2  text-blue  tracking-wide   border-blue hover:bg-blue border-dashed bg-gray-300 border-black  border-2 rounded cursor-pointer">
                  <IoImagesOutline className=" text-9xl m-auto block" />
                  <div className="flex gap-3 items-center py-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.23788 13.3525C6.46427 13.3525 5.81895 12.7613 5.7514 11.9906C5.61015 10.3793 5.57441 8.76087 5.64427 7.14558C5.55994 7.13993 5.47563 7.13404 5.39133 7.12789L3.90178 7.01931C2.94973 6.94991 2.41752 5.88834 2.93151 5.08396C4.0277 3.36845 6.03693 1.44839 7.69038 0.260657C8.17419 -0.0868863 8.82584 -0.0868853 9.30966 0.260657C10.9631 1.44839 12.9723 3.36844 14.0685 5.08396C14.5825 5.88834 14.0503 6.94991 13.0983 7.01931L11.6087 7.12789C11.5244 7.13404 11.4401 7.13993 11.3558 7.14557C11.4256 8.76088 11.3899 10.3793 11.2486 11.9906C11.1811 12.7613 10.5358 13.3525 9.76215 13.3525H7.23788ZM7.18148 6.48778C7.06777 8.27501 7.089 10.0683 7.24504 11.8525H9.75499C9.91103 10.0683 9.93226 8.27501 9.81855 6.48778C9.8058 6.28741 9.87392 6.0903 10.0077 5.94056C10.1414 5.79081 10.3296 5.70095 10.5301 5.69107C10.8535 5.67514 11.1767 5.6554 11.4997 5.63186L12.5815 5.553C11.6219 4.1397 10.4204 2.90545 9.0313 1.9076L8.50002 1.52596L7.96873 1.9076C6.57962 2.90545 5.37813 4.13971 4.41858 5.553L5.50038 5.63186C5.82337 5.6554 6.14656 5.67514 6.4699 5.69107C6.67043 5.70095 6.85863 5.79081 6.99237 5.94056C7.12611 6.0903 7.19423 6.28741 7.18148 6.48778Z"
                        fill="#4E4E4E"
                      />
                      <path
                        d="M2.25 13.7253C2.25 13.311 1.91421 12.9753 1.5 12.9753C1.08579 12.9753 0.75 13.311 0.75 13.7253V15.7253C0.75 16.6917 1.5335 17.4753 2.5 17.4753H14.5C15.4665 17.4753 16.25 16.6917 16.25 15.7253V13.7253C16.25 13.311 15.9142 12.9753 15.5 12.9753C15.0858 12.9753 14.75 13.311 14.75 13.7253V15.7253C14.75 15.8633 14.6381 15.9753 14.5 15.9753H2.5C2.36193 15.9753 2.25 15.8633 2.25 15.7253V13.7253Z"
                        fill="#4E4E4E"
                      />
                    </svg>
                    <p>Letakkan File Anda Disini</p>
                  </div>

                  <Input
                    id="inputImageProducts"
                    register={register}
                    type="file"
                    className="hidden"
                    name="image"
                    onChange={handleImageChange}
                    multiple
                  />
                </label>
                {errors.image ? (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.image.message}
                  </div>
                ) : (
                  "*maksimal 2MB dengan format PNG, JPG, JPEG"
                )}
                {previewImage.length > 0 && (
                  <ul className="mt-3">
                    {previewImage.map((previewURL, index) => (
                      <li
                        key={index}
                        className="bg-white border border-gray-300 w-full mt-4 flex items-center justify-between p-4 rounded"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={previewURL}
                            alt={`preview-${index}`}
                            className="w-12 h-14 rounded object-cover"
                            onLoad={() => {
                              URL.revokeObjectURL(previewURL);
                            }}
                          />
                          <div>
                            <p>{gambar[index].name}</p>
                            <p>{gambar[index].size / 1000} kb</p>
                          </div>
                        </div>
                        <IoTrashOutline
                          className="text-base cursor-pointer"
                          onClick={() => removeFile(index)}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="mt-5">
              <label>Deskripsi Produk</label>
              <Textarea
                id="inputDescriptionProducts"
                placeholder="Deskripsi Produk"
                className=" h-52 mt-4"
                register={register}
                name="description"
                error={errors.description?.message}
              />
            </div>

            <div className=" gap-4 flex items-center justify-end mt-5">
              <Link
                id="cancelCreateEditProducts"
                to="/produk"
                className=" bg-white px-10 py-3 rounded text-primary-green border border-primary-green"
              >
                Batal
              </Link>
              <Button
                id="submitCreatedEditProducts"
                type="submit"
                label={selectedId === 0 ? "Tambah Produk " : "Simpan Perubahan"}
                className=" bg-secondary-green px-3 py-3 rounded border text-white"
              />
            </div>
          </form>
        )}
      </Layout>
    </>
  );
}
