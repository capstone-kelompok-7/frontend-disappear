/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { CrossCircledIcon } from "@radix-ui/react-icons";
import { FaRegCheckCircle } from "react-icons/fa";

import {
  createCarousel,
  getAllCarousel,
  updateCarousel,
} from "@/utils/api/carousel/api";
import { CarouselSchema } from "@/utils/api/carousel/schema";
import { useToast } from "@/components/ui/use-toast";
import { Loading } from "@/components/loading";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";

function PopUp({ handleForceFetch, selectedId, data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CarouselSchema),
    defaultValues: {
      image: "",
    },
  });

  useEffect(() => {
    if (selectedId !== null) {
      if (!data) {
        fetchData();
      } else {
        setValue("carouselName", data.name);
        setPhoto(data.photo);
      }
    }
  }, [selectedId, data]);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getAllCarousel(selectedId);
      const carouselData = result.data;

      if (carouselData) {
        setValue("carouselName", carouselData.name);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Mendapatkan data Carousel!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses mendapatkan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
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
    setIsLoading(true);
    try {
      const editCarousel = {
        photo: data.image[0],
        id: selectedId,
        name: data.carouselName,
      };

      await updateCarousel(editCarousel);
      navigate("/carousel");
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
          "Data carousel diperbarui, nih. Silahkan nikmati fitur lainnya!",
      });
      handleForceFetch();
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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <form
          onSubmit={handleSubmit(selectedId === null ? onSubmit : onSubmitEdit)}
        >
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box px-20 py-20">
              <h3 className="font-semibold text-4xl text-center">
                {selectedId === null ? "Tambah Carousel" : "Edit Carousel"}
              </h3>
              <Input
                placeholder="Nama Carousel"
                type="text"
                className="my-10"
                register={register}
                name="carouselName"
                error={errors.carouselName?.message}
                id="carouselName"
              />
              <Input
                type="file"
                register={register}
                name="image"
                error={errors.image?.message}
                id="image"
              />
              {!errors.image && (
                <p className="text-xs mt-1">
                  *maksimal 2MB dengan format PNG, JPG, JPEG
                </p>
              )}
              <div className="modal-action flex justify-center gap-5 pt-5">
                <form method="dialog">
                  <Button
                    className="bg-white rounded-full border-secondary-green border px-10 py-3 text-base font-semibold text-primary-green"
                    label="Batal"
                    id="btn-cancel"
                  />
                </form>
                <Button
                  type="submit"
                  className={
                    selectedId === null
                      ? "rounded-full border bg-secondary-green text-white px-10 py-3"
                      : "rounded-full border bg-secondary-green text-white px-14 py-3"
                  }
                  label={selectedId === null ? "Tambah" : "Edit"}
                  id="btn-submit"
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
