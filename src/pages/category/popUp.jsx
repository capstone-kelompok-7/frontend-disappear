import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createCategory } from "@/utils/api/category/api";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";
import { Loading } from "@/components/loading";
import { useNavigate } from "react-router-dom";
import { categorySchema } from "@/utils/api/category/schema";

const PopUp = () => {
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
    resolver: zodResolver(categorySchema),
  });

  const onSubmit = async (data) => {
    try {
      const newCategory = {
        name: data.categoryName,
        photo: data.image[0],
      };
      setIsLoading(true);
      await createCategory(newCategory);
      navigate("/category");

      toast({
        title: (
          <div className="flex items-center gap-3">
            <CheckCircledIcon />
            <span className="ml-2">Berhasil Menambahkan Kategori!</span>
          </div>
        ),
        description:
          "Kategori produk berhasil ditambahkan, nih. Silakan nikmati fitur lainnya!",
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
            <div className="modal-box flex flex-col justify-center h-[70vh] px-20">
              <h3 className="font-semibold text-4xl text-center">
                Tambah Kategori
              </h3>
              <Input
                placeholder="Nama Kategori"
                type="text"
                className="my-10 "
                register={register}
                name="categoryName"
                error={errors.categoryName?.message}
              />
              <Input
                placeholder="File Kategori"
                type="file"
                register={register}
                name="image"
                error={errors.image?.message}
              />
              {!errors.image && (
                <p className="text-xs mt-1">
                  *maksimal 2MB dengan format PNG, JPG, JPEG
                </p>
              )}
              <div className="modal-action flex justify-center gap-5 pt-5">
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
};

export default PopUp;
