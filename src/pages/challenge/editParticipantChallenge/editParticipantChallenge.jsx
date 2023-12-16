import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { FaRegCheckCircle } from "react-icons/fa";

import Layout from "@/components/layout";
import Button from "@/components/button";
import Breadcrumbs from "@/components/breadcrumbs";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/input";
import { useToast } from "@/components/ui/use-toast";
import { participantSchema } from "@/utils/api/challenge/participantChallenge/schema";
import { Loading } from "@/components/loading";
import {
  updateParticipant,
  getDetailParticipant,
} from "@/utils/api/challenge/participantChallenge/api";

export default function editPesertaChallange() {
  const { id } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(0);
  const [participant, setParticipant] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(participantSchema),
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailParticipant(id);
      setParticipant(result.data);

      if (result.data) {
        setSelectedId(result.data.id);
        setValue("usernameIg", result.data.username);
        setValue("exp", result.data.exp);
        setValue(
          "berpartisipasi",
          format(new Date(result.data.tanggal_berpartisipasi), "yyyy-MM-dd")
        );
        setValue("image", result.data.photo);
        setValue("status", result.data.status);
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

  async function onSubmitEdit(data) {
    try {
      const editParticipant = {
        id: selectedId,
        status: data.status,
      };
      setIsLoading(true);
      await updateParticipant(editParticipant);
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Berhasil Mengubah Status Peserta!
            </span>
          </div>
        ),
        description:
          "Status peserta berhasil diubah, nih. Silahkan nikmati fitur lainya!",
      });
      navigate("/peserta-tantangan");
      setSelectedId(0);
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Mengubah Status Peserta!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses penyimpanan perubahan data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const onGambarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", [file]);
    }
  };

  return (
    <Layout>
      <div className="my-6">
        <Breadcrumbs pages="Edit Peserta Tantangan" />
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="my-6 mx-[100px] px-[25px] py-5 flex justify-center shadow-md">
          <form onSubmit={handleSubmit(onSubmitEdit)} className="w-full">
            <div className="mb-9">
              <div className="flex">
                <div className="flex-col w-1/4 pr-8">
                  <label className="font-semibold">Username Instagram</label>
                  <Input
                    register={register}
                    type="text"
                    name="usernameIg"
                    label="Username Instagram"
                    placeholder="Username Instagram"
                    className="w-full rounded-md py-1 px-4 mt-3"
                    disabled
                  />
                </div>

                <div className="flex-col w-1/4 pr-8">
                  <label className="font-semibold">EXP Tantangan</label>
                  <Input
                    register={register}
                    type="text"
                    name="exp"
                    label="EXP Tantangan"
                    placeholder="EXP Tantangan"
                    className="w-full rounded-md py-1 px-4 mt-3"
                    disabled
                  />
                </div>

                <div className="flex-col w-1/2 pl-8">
                  <label
                    htmlFor="status"
                    className="block font-semibold text-black"
                  >
                    Status
                  </label>
                  <Select
                    id="select-status"
                    name="status"
                    options={["valid", "tidak valid"]}
                    placeholder="Status"
                    register={register}
                    error={errors.status?.message}
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex-col w-1/2 pr-8 mb-10">
                <label className="font-semibold">Berpartisipasi</label>
                <Input
                  register={register}
                  label="Berpartisipasi"
                  type="date"
                  name="berpartisipasi"
                  className="block w-full rounded-md shadow-sm py-1 px-4 mt-3"
                  disabled
                />
              </div>

              <div className="flex w-1/2 pl-8 mt-16 justify-end gap-3">
                <Button
                  id="btn-batal"
                  label="Batal"
                  type="button"
                  className="w-24 h-12 rounded-md border border-primary-green p-3.5 shadow text-primary-green text-sm font-semibold items-center justify-center inline-flex"
                  onClick={() => navigate(`/peserta-tantangan`)}
                />

                <Button
                  id="btn-submit"
                  label="Simpan Perubahan"
                  type="submit"
                  className="w-44 h-12 bg-secondary-green rounded-md p-3.5 shadow text-white text-sm font-semibold"
                />
              </div>
            </div>

            <div className="mb-6 flex">
              <div className="flex-col w-1/2 pr-8">
                <label
                  htmlFor="gambar-tantangan"
                  className="block font-semibold text-black"
                >
                  Bukti Berpartisipasi
                </label>
                <div className="mt-3 mb-4 flex items-center">
                  <div className="flex w-full items-center justify-center rounded-md">
                    <div
                      className="w-full h-[12rem] items-center justify-center p-2 rounded-lg tracking-wide"
                      htmlFor="image"
                    >
                      <img
                        src={participant.photo}
                        alt="gambar tantangan"
                        className="h-[14rem] w-full object-contain opacity-60"
                      />
                      <Input
                        register={register}
                        type="file"
                        className="hidden"
                        name="image"
                        onChange={onGambarChange}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
}
