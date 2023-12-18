import React, { useState, useEffect } from "react";

import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { FaRegCheckCircle } from "react-icons/fa";

import { Select } from "@/components/input";
import { Link } from "react-router-dom";
import {
  createVouchers,
  updateVouchers,
  getDetailVoucher,
} from "@/utils/api/voucher/api";
import { format } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "@/components/loading";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  voucherName: z.string().min(1, { message: "Field tidak boleh kosong" }),
  startDate: z.string().min(1, { message: "Field tidak boleh kosong" }),
  voucherCode: z.string().min(1, { message: "*kode harus unik" }),
  endDate: z.string().min(1, { message: "Field tidak boleh kosong" }),
  voucherFor: z.string().min(1, { message: "Field tidak boleh kosong" }),
  voucherDescription: z
    .string()
    .min(1, { message: "Field tidak boleh kosong" }),
  voucherTotal: z.number().min(1, { message: "Field tidak boleh kosong" }),
  discount: z.number().min(1, { message: "Field tidak boleh kosong" }),
  minPurchase: z.number().min(1, { message: "Field tidak boleh kosong" }),
});

function CreateVoucher() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [selectedId, setSelectedId] = useState(0);
  const [vouchers, setVouchers] = useState([]);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { discount: 0, minPurchase: 0, voucherTotal: 0 },
  });

  useEffect(() => {
    if (id !== undefined) {
      fetchData();
    }
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailVoucher(id);
      setVouchers(result.data);

      if (result.data) {
        setSelectedId(result.data.id);
        setValue("voucherName", result.data.name);
        setValue(
          "startDate",
          format(new Date(result.data.start_date), "yyyy-MM-dd")
        );
        setValue(
          "endDate",
          format(new Date(result.data["end-date"]), "yyyy-MM-dd")
        );
        setValue("voucherDescription", result.data.description);
        setValue("voucherCode", result.data.code);
        setValue("voucherFor", result.data.category);
        setValue("voucherTotal", result.data.stock);
        setValue("discount", result.data.discount);
        setValue("minPurchase", result.data.min_purchase);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(data) {
    try {
      const newVoucher = {
        name: data.voucherName,
        description: data.voucherDescription,
        code: data.voucherCode,
        category: data.voucherFor,
        discount: data.discount,
        start_date: format(
          new Date(data.startDate + "T00:00:00Z"),
          "yyyy-MM-dd'T'HH:mm:ss'Z'"
        ),
        end_date: format(
          new Date(data.endDate + "T00:00:00Z"),
          "yyyy-MM-dd'T'HH:mm:ss'Z'"
        ),
        min_purchase: data.minPurchase,
        stock: data.voucherTotal,
      };
      setIsLoading(true);
      await createVouchers(newVoucher);
      navigate("/kupon");
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Berhasil Menambah Voucher!
            </span>
          </div>
        ),
        description:
          "Data Voucher berhasil ditambahkan, nih. Silahkan nikmati fitur lainnya!!",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menambahkan Voucher!</span>
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
      const editVoucher = {
        id: selectedId,
        name: data.voucherName,
        category: data.voucherFor,
        description: data.voucherDescription,
        discount: data.discount,
        start_date: format(
          new Date(data.startDate + "T00:00:00Z"),
          "yyyy-MM-dd'T'HH:mm:ss'Z'"
        ),
        end_date: format(
          new Date(data.endDate + "T00:00:00Z"),
          "yyyy-MM-dd'T'HH:mm:ss'Z'"
        ),
        min_purchase: data.minPurchase,
        stock: data.voucherTotal,
      };
      setIsLoading(true);
      await updateVouchers(editVoucher);

      toast({
        title: (
          <div className="flex items-center gap-3">
            <CheckCircledIcon className="text-[#05E500] text-3xl" />
            <span className="text-base font-semibold">
              Berhasil Mengubah Kupon!
            </span>
          </div>
        ),
        description:
          "Data kupon berhasil diperbarui, nih. Nikmati fitur lainnya!",
      });

      navigate("/kupon");
      setSelectedId(0);
      reset();
    } catch (error) {
      console.log("something wrong", error);
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menambahkan Voucher!</span>
          </div>
        ),
        description:
          error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Layout>
      <Breadcrumbs pages={selectedId === 0 ? "Tambah Kupon" : "Edit Kupon"} />

      <div className="my-5 py-5 px-11 rounded-md shadow-lg border-2">
        {isLoading ? (
          <Loading />
        ) : (
          <form
            onSubmit={handleSubmit(selectedId === 0 ? onSubmit : onSubmitEdit)}
          >
            {/* baris 1 */}
            <div className="flex gap-28 pt-5">
              <div className="w-full">
                <label htmlFor="voucherName">Nama Kupon</label>
                <Input
                  id="voucherName"
                  type="text"
                  placeholder="Nama Produk"
                  name="voucherName"
                  register={register}
                  error={errors.voucherName?.message}
                />
              </div>
              <div className="w-full">
                <label htmlFor="startDate">Mulai</label>
                <Input
                  id="startDate"
                  type="date"
                  placeholder="Mulai"
                  name="startDate"
                  register={register}
                  error={errors.startDate?.message}
                />
              </div>
            </div>
            {/* baris 2 */}
            <div className="flex gap-28 pt-5">
              <div className="w-full">
                <label htmlFor="voucherCode">Kode Kupon</label>
                <Input
                  id="voucherCode"
                  type="text"
                  placeholder="Kode Kupon"
                  name="voucherCode"
                  register={register}
                  error={errors.voucherCode?.message}
                />
              </div>
              <div className="w-full">
                <label htmlFor="endDate">Berhenti</label>
                <Input
                  id="endDate"
                  type="date"
                  placeholder="Berhenti"
                  name="endDate"
                  register={register}
                  error={errors.endDate?.message}
                />
              </div>
            </div>
            {/* baris 3 */}
            <div className="flex gap-28 pt-5">
              <div className="w-full">
                <label htmlFor="voucherFor">Kategori</label>
                <Select
                  id="voucherFor"
                  name="voucherFor"
                  options={["bronze", "silver", "gold", "all Customer"]}
                  placeholder="Status"
                  register={register}
                  error={errors.voucherFor?.message}
                />
              </div>
              <div className="w-full">
                <label htmlFor="voucherTotal">Total Yang Tersedia</label>
                <Input
                  id="voucherTotal"
                  type="number"
                  placeholder="Total Yang Tersedia"
                  name="voucherTotal"
                  register={register}
                  error={errors.voucherTotal?.message}
                />
              </div>
            </div>
            {/* baris 4 */}
            <div className="flex gap-28 py-5">
              <div className="w-full">
                <label htmlFor="discount">Diskon</label>
                <Input
                  id="discount"
                  type="number"
                  placeholder="Diskon"
                  name="discount"
                  register={register}
                  error={errors.discount?.message}
                />
              </div>
              <div className="w-full">
                <label htmlFor="minPurchase">Minimal Pembelian</label>
                <Input
                  id="minPurchase"
                  type="number"
                  placeholder="Minimal Pembelian"
                  name="minPurchase"
                  register={register}
                  error={errors.minPurchase?.message}
                />
              </div>
            </div>
            {/* baris 5 */}
            <label htmlFor="voucherDescription">Deskripsi Kupon</label>
            <Textarea
              id="voucherDescription"
              className="h-36"
              placeholder="Deskripsi Kupon"
              name="voucherDescription"
              register={register}
              error={errors.voucherDescription?.message}
            />

            <div className="flex gap-2 justify-end py-5">
              <Link to="/kupon">
                <Button
                  id="cancelButton"
                  type="button"
                  label="Batal"
                  className="border-[#25745A] text-[#25745A] border-2 py-2 px-3 rounded-lg"
                />
              </Link>
              <Button
                id="submitButton"
                type="submit"
                label={selectedId === 0 ? "Buat Voucher" : "Simpan Perubahan"}
                className="bg-[#25745A] text-white py-2 px-3 rounded-lg"
              />
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
}

export default CreateVoucher;
