import React, { useState } from "react";

import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { getVoucher } from "@/utils/api/voucher/api";
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
  voucherTotal: z.string().min(1, { message: "Field tidak boleh kosong" }),
  discount: z
    .string()
    .min(1, { message: "Field tidak boleh kosong" })
    .refine((value) => !Number.isNaN(parseInt(value)), {
      message: "Harus berupa angka",
    }),
  minPurchase: z
  .string()
  .min(1, { message: "Field tidak boleh kosong" })
  .refine((value) => !Number.isNaN(parseInt(value)), {
    message: "Harus berupa angka",
  }),
});

function CreateVoucher() {
  const { toast } = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data) {
    try {
      const newVoucher = {
        name: data.voucherName,
        description: data.voucherDescription,
        total: data.voucherTotal,
        start: data.startDate,
        end: data.endDate,
        code: data.voucherCode,
        category: data.voucherFor,
        discount: parseInt(data.discount),
        minimal: parseInt(data.minPurchase),
      };
      await createVoucher(newVoucher);
      navigate("/kupon");
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
      console.log(error);
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menambahkan Produk!</span>
          </div>
        ),
        description: { error },
      });
    }
  }

  return (
    <Layout>
      <Breadcrumbs pages="Buat Kupon" />

      <div className="my-5 py-5 px-11 rounded-md shadow-lg border-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* baris 1 */}
          <div className="flex gap-28 pt-5">
            <div className="w-full">
              <label htmlFor="voucherName">Nama Kupon</label>
              <Input
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
              <Select register={register} error={errors.voucherFor?.message}>
                <SelectTrigger>
                  <SelectValue placeholder="Kategori Kupon" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="cursor-pointer" value="Bronze">
                    Bronze
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="Silver">
                    Silver
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="Gold">
                    Gold
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer"
                    value="Semua Pelanggan"
                  >
                    Semua Pelanggan
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="Kadaluwarsa">
                    Kadaluwarsa
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer"
                    value="Belum Kadaluwarsa"
                  >
                    Belum Kadaluwarsa
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <label htmlFor="voucherTotal">Total Yang Tersedia</label>
              <Input
                type="text"
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
                type="text"
                placeholder="Diskon"
                name="discount"
                register={register}
                error={errors.discount?.message}
              />
            </div>
            <div className="w-full">
              <label htmlFor="minPurchase">Minimal Pembelian</label>
              <Input
                type="text"
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
            className="h-36"
            placeholder="Deskripsi Kupon"
            name="voucherDescription"
            register={register}
            error={errors.voucherDescription?.message}
          />

          <div className="flex gap-2 justify-end py-5">
            <Link to="/kupon">
            
            <Button
              type="button"
              label="Batal"
              className="border-[#25745A] text-[#25745A] border-2 py-2 px-3 rounded-lg"
            />
            </Link>
            <Button
              type="submit"
              label="Buat Voucher"
              className="bg-[#25745A] text-white py-2 px-3 rounded-lg"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default CreateVoucher;
