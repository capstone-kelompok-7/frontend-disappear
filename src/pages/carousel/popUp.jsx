/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { CheckCircledIcon } from "@radix-ui/react-icons";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { FaRegCheckCircle } from "react-icons/fa";

import {
  createCarousel,
  getDetailCarousel,
  updateCarousel,
} from "@/utils/api/carousel/api";
import { CarouselSchema } from "@/utils/api/carousel/schema";
import { useToast } from "@/components/ui/use-toast";
import { Loading } from "@/components/loading";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";

function PopUp({handleForceFetch}) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [carousel, setCarousel] = useState([]);
  const [photo, setPhoto] = useState([]);

  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CarouselSchema),
  });

  useEffect(() => {
    if (id !== undefined) {
      fetchData();
    }
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailCarousel(id);
      setCarousel(result.data);

      if (result.data) {
        setSelectedId(result.data.id);
        setValue("carouselName", result.data.title);
        // setValue("image", result.data.photo);
        // if (result.data.photo) {
        //   const previewURL = URL.createObjectURL(result.data.photo);
        //   setPreviewImage([previewURL]);
        // }
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(data) {
    setIsLoading(true);
    try {
      const newCarousel = {
        name: data.carouselName,
        photo: data.image[0],
      };
      await createCarousel(newCarousel);
      navigate("/carousel");

      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Berhasil Menambahkan Carousel!
            </span>
          </div>
        ),
        description:
          "Data carousel berhasil ditambahkan, nih. Silahkan nikmati fitur lainnya!",
      });
      reset();
      handleForceFetch();
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menambahkan Carousel!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penambahan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmitEdit(data) {
    try {
      const editCarousel = {
        photo: data.image[0],
        id: selectedId,
        name: data.carouselName,
      };
      setIsLoading(true);
      await updateCarousel(editCarousel);
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Berhasil Mengubah Carousel!
            </span>
          </div>
        ),
        description:
          "Data tantangan carousel diperbarui, nih. Silahkan nikmati fitur lainnya!",
      });
      navigate("/carousel");
      setSelectedId(0);
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menambahkan Tantangan!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penyimpanan perubahan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setValue("image", [file]);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-semibold text-4xl text-center">
                Tambah Carousel
              </h3>
              <Input
                placeholder="Nama Carousel"
                type="text"
                className="my-10 "
                register={register}
                name="carouselName"
                error={errors.carouselName?.message}
              />
              <Input
                placeholder="Nama Carousel"
                type="file"
                register={register}
                name="image"
                error={errors.image?.message}
              />
              <div className="modal-action justify-around">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Button
                    className="bg-white rounded-full border-secondary-green border px-10 py-3 text-base font-semibold text-primary-green"
                    label="Batal"
                  />
                </form>
                <Button
                  type="submit"
                  className="rounded-full border px-10 bg-secondary-green text-white py-3"
                  label="Tambah"
                />
              </div>
            </div>
          </dialog>
        </form>
      )}
    </>
  );
}

export default PopUp;
