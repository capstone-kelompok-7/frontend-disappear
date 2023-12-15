import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { IoTrashOutline } from "react-icons/io5";

import Layout from "@/components/layout";
import Button from "@/components/button";
import Breadcrumbs from "@/components/breadcrumbs";
import TextEditor from "@/components/textEditorChallenge/tipTap";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { ChallengeSchema } from "@/utils/api/challenge/challenge/schema";
import {
  getDetailChallenge,
  createChallenge,
  updateChallenge,
} from "@/utils/api/challenge/challenge/api";
import { FaRegCheckCircle } from "react-icons/fa";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { Loading } from "@/components/loading";

function CreateChallenge() {
  const { id } = useParams();
  const [selectedId, setSelectedId] = useState(0);
  const [challenge, setChallenge] = useState([]);
  const [gambar, setGambar] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: zodResolver(ChallengeSchema),
    defaultValues: {
      exp: 0,
      image: "",
    },
  });

  useEffect(() => {
    if (id !== undefined) {
      fetchData();
    }
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailChallenge(id);
      setChallenge(result.data);

      if (result.data) {
        setSelectedId(result.data.id);
        setValue("challengeName", result.data.title);
        setValue(
          "challengeStart",
          format(new Date(result.data.start_date), "yyyy-MM-dd")
        );
        setValue(
          "challengeEnd",
          format(new Date(result.data.end_date), "yyyy-MM-dd")
        );
        setValue("description", result.data.description);
        setValue("exp", result.data.exp);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Mendapatkan data Tantangan!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses pencarian data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(data) {
    try {
      const newChallenge = {
        photo: data.image[0],
        title: data.challengeName,
        start_date: format(
          new Date(data.challengeStart + "T00:00:00Z"),
          "yyyy-MM-dd'T'HH:mm:ss'Z'"
        ),
        end_date: format(
          new Date(data.challengeEnd + "T00:00:00Z"),
          "yyyy-MM-dd'T'HH:mm:ss'Z'"
        ),
        description: data.description,
        exp: data.exp,
      };
      setIsLoading(true);
      await createChallenge(newChallenge);
      navigate("/tantangan");
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Berhasil Menambahkan Tantangan!
            </span>
          </div>
        ),
        description:
          "Data tantangan berhasil ditambahkan, nih. Silahkan nikmati fitur lainnya!!",
      });
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
        description: "Gagal menambahkan tantangan",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmitEdit(data) {
    try {
      const editChallenge = {
        photo: data.image[0],
        id: selectedId,
        title: data.challengeName,
        start_date: format(
          new Date(data.challengeStart + "T00:00:00Z"),
          "yyyy-MM-dd'T'HH:mm:ss'Z'"
        ),
        end_date: format(
          new Date(data.challengeEnd + "T00:00:00Z"),
          "yyyy-MM-dd'T'HH:mm:ss'Z'"
        ),
        description: data.description,
        exp: data.exp,
      };
      setIsLoading(true);
      await updateChallenge(editChallenge);
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Berhasil Mengubah Tantangan!
            </span>
          </div>
        ),
        description:
          "Data tantangan berhasil diperbarui, nih. Silahkan nikmati fitur lainnya!!",
      });
      navigate("/tantangan");
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
      clearErrors("image");
      setGambar(file);
      setValue("image", [file]);
      const previewURL = URL.createObjectURL(file);
      setPreviewImage([previewURL]);
    }
  };

  const removeFile = (index) => {
    setPreviewImage((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <Layout>
      <div className="my-6">
        <Breadcrumbs
          pages={selectedId === 0 ? "Tambah Tantangan" : "Edit Tantangan"}
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-8">
          <form
            onSubmit={handleSubmit(selectedId === 0 ? onSubmit : onSubmitEdit)}
            className="w-full"
          >
            <div className="mb-10">
              <div className="flex">
                <div className="flex-col w-1/2 pr-8">
                  <label className="font-semibold">Mulai</label>
                  <Input
                    id="input-tanggal-mulai"
                    register={register}
                    label="Mulai"
                    type="date"
                    name="challengeStart"
                    className="block w-full rounded-md py-1 px-4 mt-3"
                    error={errors.challengeStart?.message}
                  />
                </div>

                <div className="flex-col w-1/2 pl-8">
                  <label className="font-semibold">Berakhir</label>
                  <Input
                    id="input-tanggal-berakhir"
                    register={register}
                    label="Berakhir"
                    type="date"
                    name="challengeEnd"
                    className="block w-full rounded-md py-1 px-4 mt-3"
                    error={errors.challengeEnd?.message}
                  />
                </div>
              </div>
            </div>

            <div className="mb-10 flex">
              <div className="flex-col w-1/2 pr-8">
                <label className="font-semibold">Nama Tantangan</label>
                <Input
                  id="input-nama-tantangan"
                  register={register}
                  type="text"
                  name="challengeName"
                  placeholder="Nama Tantangan"
                  label="Nama Tantangan"
                  className="rounded-md py-1 px-4 mt-3"
                  error={errors.challengeName?.message}
                />
              </div>

              <div className="flex-col w-1/2 pl-8">
                <label className="font-semibold">EXP</label>
                <Input
                  id="input-exp-tantangan"
                  register={register}
                  type="number"
                  name="exp"
                  placeholder="EXP"
                  label="EXP"
                  className="rounded-md py-1 px-4 mt-3"
                  error={errors.exp?.message}
                />
              </div>
            </div>

            <div className="mb-6 flex">
              <div className="flex-col w-1/2 pr-8">
                <label
                  htmlFor="gambar-tantangan"
                  className="block font-semibold text-black"
                >
                  Unggah File
                </label>
                <div className="mt-3 flex items-center">
                  <div
                    className={`flex w-full items-center justify-center border rounded-md ${
                      errors.image ? "border-red-500" : "border-slate-200"
                    }`}
                  >
                    <label className="w-full h-[12rem] flex flex-col items-center justify-center p-2 bg-neutral-100 rounded-lg tracking-wide uppercase cursor-pointer">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_1505_13585"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="80"
                          height="80"
                        >
                          <rect width="80" height="80" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1505_13585)">
                          <path
                            d="M39.9998 58.3333C44.1665 58.3333 47.7082 56.875 50.6248 53.9583C53.5415 51.0417 54.9998 47.5 54.9998 43.3333C54.9998 39.1667 53.5415 35.625 50.6248 32.7083C47.7082 29.7917 44.1665 28.3333 39.9998 28.3333C35.8332 28.3333 32.2915 29.7917 29.3748 32.7083C26.4582 35.625 24.9998 39.1667 24.9998 43.3333C24.9998 47.5 26.4582 51.0417 29.3748 53.9583C32.2915 56.875 35.8332 58.3333 39.9998 58.3333ZM39.9998 51.6667C37.6665 51.6667 35.6943 50.8611 34.0832 49.25C32.4721 47.6389 31.6665 45.6667 31.6665 43.3333C31.6665 41 32.4721 39.0278 34.0832 37.4167C35.6943 35.8056 37.6665 35 39.9998 35C42.3332 35 44.3054 35.8056 45.9165 37.4167C47.5276 39.0278 48.3332 41 48.3332 43.3333C48.3332 45.6667 47.5276 47.6389 45.9165 49.25C44.3054 50.8611 42.3332 51.6667 39.9998 51.6667ZM13.3332 70C11.4998 70 9.93039 69.3472 8.62484 68.0417C7.31928 66.7361 6.6665 65.1667 6.6665 63.3333V23.3333C6.6665 21.5 7.31928 19.9306 8.62484 18.625C9.93039 17.3194 11.4998 16.6667 13.3332 16.6667H23.8332L29.9998 10H49.9998L56.1665 16.6667H66.6665C68.4998 16.6667 70.0693 17.3194 71.3748 18.625C72.6804 19.9306 73.3332 21.5 73.3332 23.3333V63.3333C73.3332 65.1667 72.6804 66.7361 71.3748 68.0417C70.0693 69.3472 68.4998 70 66.6665 70H13.3332Z"
                            fill="#767676"
                          />
                        </g>
                      </svg>
                      <p className="mt-2 text-base leading-normal text-neutral-500">
                        Tambah Foto
                      </p>

                      <Input
                        id="input-gambar-tantangan"
                        register={register}
                        type="file"
                        className="hidden"
                        name="image"
                        accept="image/jpeg, image/jpg, image/png"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>
                <div className={`text-xs mt-1 ${"text-gray-500"}`}>
                  {errors.image ? (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.image.message}
                    </div>
                  ) : (
                    "*maksimal 2MB dengan format PNG, JPG, JPEG"
                  )}
                </div>

                {previewImage.length > 0 && selectedId == 0 && (
                  <ul className="mt-3">
                    <li
                      key={0}
                      className="bg-white border border-gray-300 w-full mt-4 flex items-center justify-between py-2 pl-6 pr-6 rounded"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={previewImage[0]}
                          alt={`preview-0`}
                          className="w-40 h-20 rounded object-cover"
                          onLoad={() => {
                            URL.revokeObjectURL(previewImage[0]);
                          }}
                        />
                        <div>
                          <p>{gambar.name}</p>
                          <p className="text-gray-500">
                            {gambar.size / 1000} kb
                          </p>
                        </div>
                      </div>
                      <IoTrashOutline
                        id="hapus-preview"
                        className="text-base cursor-pointer"
                        onClick={() => removeFile(0)}
                      />
                    </li>
                  </ul>
                )}

                {previewImage.length === 0 && selectedId !== 0 && (
                  <ul className="mt-3">
                    <li
                      key={0}
                      className="bg-white border border-gray-300 w-full mt-4 flex items-center justify-between py-2 pl-6 rounded"
                    >
                      <div className="flex items-center">
                        <img
                          src={challenge.photo}
                          alt={`preview-0`}
                          className="w-40 h-20 rounded object-cover"
                          onLoad={() => {
                            URL.revokeObjectURL(challenge.photo);
                          }}
                        />
                      </div>
                    </li>
                  </ul>
                )}
              </div>

              <div className="flex-col w-1/2 pl-8">
                <label
                  htmlFor="deskripsi-tantangan"
                  className="block font-semibold text-black"
                >
                  Deskripsi
                </label>
                <div className="overflow-auto">
                  <TextEditor
                    id="input-deskripsi-tantangan"
                    register={register}
                    setContent={(description) =>
                      setValue("description", description)
                    }
                    initialContent={challenge.description}
                    name="description"
                    error={errors.description?.message}
                  />
                </div>
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button
                id="btn-batal"
                label="Batal"
                type="button"
                className="w-24 h-12 rounded-md border border-primary-green p-3.5 text-primary-green text-sm font-semibold items-center justify-center inline-flex"
                onClick={() => navigate(`/tantangan`)}
              />

              <Button
                id="btn-submit"
                label={
                  selectedId === 0 ? "Tambah Tantangan" : "Simpan Perubahan"
                }
                type="submit"
                className="w-44 h-12 bg-secondary-green rounded-md text-white text-sm font-semibold p-3.5"
              />
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
}

export default CreateChallenge;
