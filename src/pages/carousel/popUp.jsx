/* eslint-disable no-unused-vars */
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

import { CarouselSchema } from "@/utils/api/carousel/schema";
import { createCarousel } from "@/utils/api/carousel/api";
import { useToast } from "@/components/ui/use-toast";
import { Loading } from "@/components/loading";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";

function PopUp() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CarouselSchema),
  });

  const onSubmit = async (data) => {
    try {
      const newCarousel = {
        name: data.carouselName,
        photo: data.image[0],
      };
      setIsLoading(true);
      await createCarousel(newCarousel);
      navigate("/carousel");

      toast({
        title: (
          <div className="flex items-center gap-3">
            <CheckCircledIcon />
            <span className="ml-2">berhasil</span>
          </div>
        ),
        description: "berhasil deh",
        color: "#000000",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Terjadi kesalahan saat menyimpan data.",
        color: "#FF0000",
      });
    } finally {
      setIsLoading(false);
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
