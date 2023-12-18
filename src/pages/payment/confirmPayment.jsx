import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import Layout from "@/components/layout";
import { useToast } from "@/components/ui/use-toast";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { getDetailOrder } from "@/utils/api/paymentAndOrder/api";
import formatCurrency from "@/utils/formatter/currencyIdr";
import { format } from "date-fns";
import { Loading } from "@/components/loading";
import {
  createStatusPaymentToCancel,
  createStatusPaymentToConfirm,
} from "@/utils/api/payment/api";
import { CrossCircledIcon } from "@radix-ui/react-icons";

export default function ConfirmPayment() {
  const [payment, setPayment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const { toast } = useToast();

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailOrder(id);
      setPayment(result.data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Memuat Pembayaran!</span>
          </div>
        ),
        description:
          "Terjadi kesalahan saat memuat pembayaran, silahkan cek internet terlebih dahulu atau reload halaman",
      });
    } finally {
      setIsLoading(false);
    }
  }

  // Code for handle Confirm Payment
  const handleConfirmPayment = async () => {
    try {
      setIsLoading(true);
      await createStatusPaymentToConfirm(payment.id);

      navigate("/pembayaran");
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Konfirmasi Pembayaran Berhasil!
            </span>
          </div>
        ),
        description:
          "Pembayaran telah berhasil dikonfimasi. Silahkan nikmati fitur lainnya!!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center gap-3">
            <FaRegTimesCircle className="text-[#E50000] text-3xl" />
            <span className=" text-base font-semibold">
              Konfirmasi Pembayaran Gagal!
            </span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses konfirmasi pembayaran. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelPayment = async () => {
    try {
      setIsLoading(true);
      await createStatusPaymentToCancel(payment.id);

      navigate("/pembayaran");
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Konfirmasi Pembayaran Berhasil!
            </span>
          </div>
        ),
        description:
          "Pembayaran telah berhasil dikonfimasi. Silahkan nikmati fitur lainnya!!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center gap-3">
            <FaRegTimesCircle className="text-[#E50000] text-3xl" />
            <span className=" text-base font-semibold">
              Konfirmasi Pembayaran Gagal!
            </span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses konfirmasi pembayaran. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
    return regex.test(dateString);
  };

  return (
    <>
      <Layout>
        <Breadcrumbs pages="Pembayaran" />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="border border-black rounded mt-4 shadow">
              <p className="text-[#AF8050] text-sm font-semibold m-4">
                Informasi Pesanan{" "}
                <span className="text-[#AF8050] text-xl font-semibold">
                  {payment.id_order}
                </span>
              </p>

              {payment &&
                payment.order_details &&
                payment.order_details.map((orderDetail) => (
                  <div
                    className="flex items-center justify-between  mx-6"
                    key={orderDetail.id}
                  >
                    <div className="flex items-center">
                      <img
                        src={orderDetail.product.product_photos?.[0]?.url}
                        alt="image-product"
                        className=" w-16 h-20 rounded mr-5"
                      />
                      <div>
                        <p className="mb-3">{orderDetail.product.name}</p>
                        <p>ID : {payment.id_order}</p>
                      </div>
                    </div>
                    <div className=" flex items-center gap-6">
                      <div className="flex items-center">
                        <p>
                          {formatCurrency(orderDetail.product.price)} X{" "}
                          {orderDetail.quantity}
                        </p>
                      </div>
                      <div>
                        <p>{formatCurrency(orderDetail.total_price)}</p>
                      </div>
                    </div>
                  </div>
                ))}

              <hr className=" border-gray-300 mx-5" />

              <div className="flex items-center justify-between m-6">
                <p className="font-semibold text-[#AF8050]">Total Pembayaran</p>
                <p>{formatCurrency(payment.grand_total_price)}</p>
              </div>
              <div className="flex items-center justify-between m-6">
                <p>Pengiriman ( Kelas Ekonomi )</p>
                <p>{formatCurrency(payment.shipment_fee)}</p>
              </div>
              <div className="flex items-center justify-between m-6">
                <p>Biaya Admin</p>
                <p>{formatCurrency(payment.admin_fees)}</p>
              </div>
              <div className="flex items-center justify-between m-6">
                <p>Voucher</p>
                <p>{formatCurrency(payment.voucher?.discount)}</p>
              </div>
              <div className="flex items-center justify-between m-6">
                <p>Diskon Produk</p>
                <p>{formatCurrency(payment.grand_total_discount)}</p>
              </div>
              <div className="flex items-center justify-between m-6">
                <p className="font-semibold text-[#AF8050]">Total</p>
                <p>{formatCurrency(payment.total_amount_paid)}</p>
              </div>
              <hr className=" border-black mx-5" />
              <div className="flex items-center justify-between m-6">
                <p>Dibayar Oleh Pelanggan</p>
                <p>{formatCurrency(payment.total_amount_paid)}</p>
              </div>
            </div>

            <div className="border border-black rounded mt-4 shadow">
              <p className="text-[#AF8050] text-sm font-semibold m-4">
                Informasi Pembayaran
              </p>
              <div className="flex items-center justify-between m-6">
                <p>Transfer</p>
                <p>{formatCurrency(payment.total_amount_paid)}</p>
              </div>
              <div className="flex items-center justify-between m-6">
                <p>Tanggal</p>
                <p>
                  {isValidDate(payment.created_at)
                    ? format(new Date(payment.created_at), "dd-MM-yyyy")
                    : "Invalid Date"}
                </p>
              </div>
              <div className="flex items-center justify-between m-6">
                <p>Metode Pembayaran</p>
                <p>Transfer M-Banking</p>
              </div>
              <div className="flex items-center justify-between m-6">
                <p>Transfer Dari</p>
                <p>BCA a.n. Dimas Bayuwangis</p>
              </div>
            </div>
            <Button
              id="buttonConfirmPayment"
              onClick={handleConfirmPayment}
              type="submit"
              label="Konfirmasi Pembayaran"
              className=" bg-secondary-green w-full my-3 text-white py-5 rounded-md text-xl font-medium flex justify-center items-center"
            />
            <Button
              id="buttonCancelPayment"
              onClick={handleCancelPayment}
              type="submit"
              label="Pembayaran Tidak Valid"
              className=" bg-white w-full my-3 text-[#E50000] py-5 rounded-md text-xl font-medium flex justify-center items-center border border-[#E50000]"
            />
          </>
        )}
      </Layout>
    </>
  );
}
