import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CreateVoucher() {
  const { toast } = useToast();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Layout>
      <Breadcrumbs pages="Buat Kupon" />

      <div className="my-5 py-5 px-11 rounded-md shadow-lg border-2 ">
        {/* baris 1 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Nama Kupon</label>
            <Input type="text" placeholder="Nama Produk" />
          </div>
          <div className="w-full">
            <label htmlFor="">Mulai</label>
            <Input type="date" placeholder="Mulai" />
          </div>
        </div>
        {/* baris 2 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Kode Kupon</label>
            <Input type="text" placeholder="Kode Kupon" />
          </div>
          <div className="w-full">
            <label htmlFor="">Berhenti</label>
            <Input type="date" placeholder="Berhenti" />
          </div>
        </div>
        {/* baris 3 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Kupon Untuk</label>
            <Input type="text" placeholder="Kupon Untuk" />
          </div>
          <div className="w-full">
            <label htmlFor="">Total Yang Tersedia</label>
            <Input type="text" placeholder="Total Yang Tersedia" />
          </div>
        </div>
        {/* baris 4 */}
        <div className="flex gap-28 py-5">
          <div className="w-full">
            <label htmlFor="">Diskon</label>
            <Input type="text" placeholder="Diskon" />
          </div>
          <div className="w-full">
            <label htmlFor="">Minimal Pembelian</label>
            <Input type="text" placeholder="Minimal Pembelian" />
          </div>
        </div>
        {/* baris 5 */}
        <label htmlFor="">Deskripsi Kupon</label>
        <Textarea classname="h-36" placeholder="Deskripsi Kupon" />

        <div className="flex gap-2 justify-end py-5">
          <Button
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
            label="Buat Voucher"
            className="bg-[#25745A] text-white py-2 px-3 rounded-lg"
            onClick={() => {
              toast({
                title: (
                  <div className="flex items-center">
                    <CheckCircledIcon />
                    <span className="ml-2">Berhasil Menambahkan Kupon!</span>
                  </div>
                ),
                description:
                  "Data kupon telah berhasil ditambahkan, nih. Silahkan nikmati fitur lainnya!",
              });
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default CreateVoucher;