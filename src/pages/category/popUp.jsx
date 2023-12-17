import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

import {
  createCategory,
  updateCategory,
  getDetailCategory,
} from "@/utils/api/category/api";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";
import { Loading } from "@/components/loading";
import { useNavigate } from "react-router-dom";
import { categorySchema } from "@/utils/api/category/schema";

const PopUp = ({
  categoryId,
  update,
  popLoading,
  setPopLoading,
  popUpTitle,
  setReload,
}) => {
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
    defaultValues: {
      image: "",
    },
  });

  useEffect(() => {
    if (categoryId !== 0) {
      (async () => {
        try {
          const response = await getDetailCategory(categoryId);
          setValue("categoryName", response.data.name);
          // setValue("image", response.data.photo);
          setPopLoading(false);
        } catch (error) {
          console.error(error);
        }
      })();
    } else {
      setValue("categoryName");
    }
  }, [categoryId, reset]);

  const onSubmit = async (data) => {
    try {
      const newCategory = {
        name: data.categoryName,
        photo: data.image[0],
      };
      setIsLoading(true);
      if (update) {
        await updateCategory(categoryId, newCategory);
      } else {
        await createCategory(newCategory);
      }
      setReload(true);
      navigate("/category");

      toast({
        title: (
          <div className="flex items-center gap-3">
            <CheckCircledIcon />
            {popUpTitle === "Tambah" ? (
              <span className="ml-2">Berhasil Menambahkan Kategori!</span>
            ) : (
              <span className="ml-2">Berhasil Mengubah Kategori!</span>
            )}
          </div>
        ),
        description:
          popUpTitle === "Tambah"
            ? "Kategori produk berhasil ditambahkan, nih. Silakan nikmati fitur lainnya!"
            : "Kategori produk berhasil diperbarui, nih. Silakan nikmati fitur lainnya!",
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
            <div className="modal-box px-20 py-20">
              <h3 className="font-semibold text-4xl text-center">
                {popUpTitle + " Kategori"}
              </h3>

              {popLoading ? (
                <div className="justify-center flex my-10">
                  <Loader2 className="animate-spin" size={50} />
                </div>
              ) : (
                <>
                  <Input
                    id="input-nama-kategori"
                    placeholder="Nama Kategori"
                    type="text"
                    className="my-10"
                    register={register}
                    name="categoryName"
                    error={errors.categoryName?.message}
                  />
                  <Input
                    id="input-file-kategori"
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
                </>
              )}

              <div className="modal-action flex justify-center gap-5 pt-5">
                <form method="dialog">
                  <Button
                    id="btn-cancel"
                    className="bg-white rounded-full border-secondary-green border px-10 py-3 text-base font-semibold text-primary-green"
                    label="Batal"
                  />
                </form>
                <Button
                  id="btn-submit"
                  type="submit"
                  className="rounded-full border px-10 bg-secondary-green text-white py-3"
                  label={popUpTitle}
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
