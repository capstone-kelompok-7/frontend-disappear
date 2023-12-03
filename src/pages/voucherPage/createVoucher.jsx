import React, { useState } from "react";

import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  voucherName: z.string().min(1, { message: "Field tidak boleh kosong" }),
  startDate: z.string().min(1, { message: "Field tidak boleh kosong" }),
  voucherCode: z.string().min(1, { message: "*kode harus unik" }),
  endDate: z.string().min(1, { message: "Field tidak boleh kosong" }),
  voucherFor: z.string().min(1, { message: "Field tidak boleh kosong" }),
  voucherTotal: z.string().min(1, { message: "Field tidak boleh kosong" }),
  voucherDescription: z.string().min(1, { message: "Field tidak boleh kosong" }),
  discount: z.string().min(1, { message: "Field tidak boleh kosong" })
  .refine((value) => !Number.isNaN(parseInt(value)), {
    message: "Harus berupa angka",
  }),
  minPurchase: z.string().min(1, { message: "Field tidak boleh kosong" }),
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

  const onSubmit = (data) => {
    toast({
      title: (
        <div className="flex items-center">
          <CheckCircledIcon />
          <span className="ml-2">Berhasil Menambahkan Kupon!</span>
        </div>
      ),
      description: "Data kupon telah berhasil ditambahkan, nih. Silahkan nikmati fitur lainnya!",
    });
  };

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
              <label htmlFor="voucherFor">Kupon Untuk</label>
              <Input
                type="text"
                placeholder="Kupon Untuk"
                name="voucherFor"
                register={register}
                error={errors.voucherFor?.message}
              />
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
            <Button
              type="button"
              label="Batal"
              className="border-[#25745A] text-[#25745A] border-2 py-2 px-3 rounded-lg"
              onClick={() => {
                toast({
                  variant: "destructive",
                  title: (
                    <div className="flex items-center">
                      <CrossCircledIcon />
                      <span className="ml-2">Gagal Menambahkan Kupon!</span>
                    </div>
                  ),
                  description:
                    "Oh, noo! Sepertinya ada masalah saat proses perubahan data, nih. Periksa koneksimu dan coba lagi, yuk!",
                });
              }}
            />
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