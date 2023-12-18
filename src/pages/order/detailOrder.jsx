import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { BsX } from "react-icons/bs";
import Button from "@/components/button";
import { FaUserCircle } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/input";
import { useForm } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import { getDetailOrder, updateOrder } from "@/utils/api/paymentAndOrder/api";
import formatCurrency from "@/utils/formatter/currencyIdr";
import { format } from "date-fns";
import { Loading } from "@/components/loading";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { FaRegCheckCircle } from "react-icons/fa";
import { Loader2 } from "lucide-react";

export default function DetailOrder() {
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [reff, setReff] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
    return regex.test(dateString);
  };

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCancel = () => {
    reset();
    navigate("/pesanan");
  };

  useEffect(() => {
    fetchData();
  }, [searchParams, reff]);

  async function fetchData() {
    try {
      setIsLoading(true);
      const detail_order = await getDetailOrder(id);
      setOrder(detail_order.data);
      reset({
        orderDate: format(
          new Date(detail_order.data.status_order_date),
          "yyyy-MM-dd"
        ),
        statusOrder: detail_order.data.order_status,
        extraInfo: detail_order.data.extra_info,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(data) {
    setUpdateLoading(true);
    try {
      const newOrder = {
        order_id: id,
        status_order_date: format(
          new Date(data.orderDate + "T00:00:00Z"),
          "yyyy-MM-dd'T'HH:mm:ss'Z'"
        ),
        order_status: data.statusOrder,
        extra_info: data.extraInfo,
      };

      await updateOrder(newOrder);
      setUpdateLoading(false);
      toast({
        title: (
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-[#05E500] text-3xl" />
            <span className=" text-base font-semibold">
              Berhasil Mengubah Detail Pesanan!
            </span>
          </div>
        ),
        description:
          "Detail pesanan berhasil diubah, nih. Silahkan nikmati fitur lainya!",
      });
      reset();
      setReff(true);
      navigate("/pesanan");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Layout>
        <Breadcrumbs pages="Detail Pesanan" />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="flex flex-row justify-between">
              <div className="flex justify-start flex-col">
                {/*DATA PESANAN*/}
                <div className="flex flex-col justify-start relative border shadow w-[940px] h-72 p-15 mt-4 border-gray-400 rounded-md gap-15">
                  <div className="flex">
                    <p className="text-sm font-semibold m-4 text-secondary-green">
                      Data Pesanan{"  "}
                      <span className="text-lg font-semibold text-secondary-green">
                        {order.id_order}
                      </span>
                    </p>
                  </div>
                  {order.order_details &&
                    order.order_details.length > 0 &&
                    order.order_details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between mx-6"
                      >
                        <img
                          src={detail.product.product_photos?.[0]?.url}
                          className="w-16 h-20 rounded-md"
                        />
                        <div>
                          <p className="text-sm mb-3 ps-2">
                            {detail.product.name}
                          </p>
                          <p className="text-sm mb-3 ps-2">
                            ID : {detail.product_id}
                          </p>
                        </div>
                        <div className="flex text-sm items-center gap-6">
                          <div className="flex text-sm items-center">
                            <p className="text-sm mb-3">
                              {formatCurrency(detail.product.price)}
                            </p>
                            <p className="text-sm mb-3">
                              <BsX />
                            </p>
                            <p className="text-sm mb-3">{detail.quantity}</p>
                          </div>
                          <div>
                            <p className="text-sm mb-3">
                              {formatCurrency(detail.total_price)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  <hr className="my-4 ml-3 mr-3 border-gray-400" />
                </div>

                {/*TOTAL PEMBAYARAN*/}
                <div className="flex flex-col justify-start relative border shadow w-[940px] h-80 mt-4 border-gray-400 rounded-md">
                  <div className="flex items-center justify-between m-6">
                    <p className="font-semibold justify-between text-sm text-primary-green">
                      Total Pembayaran
                    </p>
                    <p className="text-sm">
                      {formatCurrency(order.grand_total_price)}
                    </p>
                  </div>
                  <div className="flex items-center text-sm justify-between mb-5 mx-6">
                    <p>Pengiriman (Kelas Ekonomi)</p>
                    <p>{formatCurrency(order.shipment_fee)}</p>
                  </div>
                  <div className="flex items-center text-sm justify-between mb-5 mx-6">
                    <p>Biaya Admin</p>
                    <p>{formatCurrency(order.admin_fees)}</p>
                  </div>
                  <div className="flex items-center text-sm justify-between mb-5 mx-6">
                    <p>Voucher</p>
                    <p>{formatCurrency(order.grand_total_discount)}</p>
                  </div>
                  <div className="flex items-center text-sm justify-between mb-5 mx-6">
                    <p>Diskon Produk</p>
                    <p>{formatCurrency(order.grand_total_discount)}</p>
                  </div>
                  <div className="flex items-center text-sm justify-between mb-1 mx-6">
                    <p className=" font-semibold text-primary-green">Total</p>
                    <p> {formatCurrency(order.total_amount_paid)}</p>
                  </div>
                  <hr className="my-3 ml-5 mr-5 mb-3 border-gray-400" />
                  <div className="flex items-center text-sm justify-between mb-2 mx-6">
                    <p> Dibayar Oleh Pelanggan</p>
                    <p> {formatCurrency(order.total_amount_paid)}</p>
                  </div>
                </div>

                {/*DETAIL PEMBAYARAN*/}
                <div className="flex flex-col justify-start relative border shadow w-[940px] h-[217px] mt-4 border-gray-400 rounded-md">
                  <div className="flex flex-col justify-between items-start gap-4 p-5">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex text-sm font-semibold mb-1 text-left text-primary-green">
                        Detail Pembayaran
                      </div>
                      <div className="flex  rounded bg-secondary-green">
                        <Button
                          id="btn-view"
                          label="View"
                          className="text-xs font-medium text-white px-3.5 py-1.5"
                          onClick={() => navigate(`/pembayaran/${id}`)}
                        />
                      </div>
                    </div>
                    <div className="flex text-xs justify-between mb-1 gap-[780px]">
                      <p>Transfer</p>
                      <p>{formatCurrency(order.total_amount_paid)}</p>
                    </div>
                    <div className="flex text-xs justify-between mb-1 gap-[780px]">
                      <p>Tanggal</p>
                      <p>
                        {isValidDate(order.created_at)
                          ? format(new Date(order.created_at), "dd-MM-yyyy")
                          : "Invalid Date"}
                      </p>
                    </div>
                    <div className="flex text-xs justify-between mb-1 gap-[795px]">
                      <p>Status</p>
                      <p>{order.payment_status}</p>
                    </div>
                    <div className="flex text-xs justify-between mb-1 gap-[760px]">
                      <p>Transfer Dari</p>
                      <p>{order.payment_method}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-start flex-col">
                {/*Catatan*/}
                <div className="flex flex-col justify-start relative border shadow w-[485px] h-[110px] p-15 mt-4 ml-10 border-gray-400 rounded-md">
                  <div className="flex items-center m-6">
                    <p className="font-semibold text-sm text-primary-green">
                      Catatan
                    </p>
                  </div>
                  {order.note ? (
                    <div className="flex items-center text-sm mb-3 mx-6">
                      <p>{order.note}</p>
                    </div>
                  ) : (
                    <div className="flex items-center text-sm mb-3 mx-6">
                      <p>Tidak ada catatan dari customer</p>
                    </div>
                  )}
                </div>

                {/*Info Pelanggan*/}
                <div className="flex flex-col justify-start relative border shadow w-[485px] h-[360px] p-15 mt-4 ml-10 border-gray-400 rounded-md">
                  <div className="flex items-center justify-between mt-6 ml-6 mr-6">
                    <p className="font-semibold text-sm text-primary-green">
                      Pelanggan
                    </p>
                    <img
                      src={
                        order.user
                          ? order.user.photo_profile
                          : "URL_DEFAULT_JIKA_TIDAK_ADA_PHOTO"
                      }
                      className="rounded-full w-16 h-16"
                    />
                  </div>
                  <div className="flex flex-col gap-3 ml-6">
                    <div className="flex items-center mt-3 ">
                      <p className="font-semibold text-sm text-primary-green">
                        Nama
                      </p>
                    </div>
                    <div className="flex text-sm mt-1 ">
                      <p>
                        {order.address
                          ? order.address.accepted_name
                          : "Alamat tidak tersedia"}
                      </p>
                    </div>
                    <div className="flex items-center ">
                      <p className="font-semibold text-sm text-primary-green">
                        Kontak Informasi
                      </p>
                    </div>
                    <div className="flex text-sm mt-1">
                      <p>
                        {order.user ? order.user.email : "email tidak tersedia"}
                      </p>
                    </div>
                    <div className="flex items-center ">
                      <p className="font-semibold text-sm text-primary-green">
                        Alamat Pengiriman
                      </p>
                    </div>
                    <div className="flex text-sm mt-1">
                      <p>
                        {order.address
                          ? order.address.address
                          : "Alamat tidak tersedia"}
                      </p>
                    </div>
                  </div>
                </div>

                {/*Status Pesanan*/}
                <div className="flex flex-col justify-start relative border shadow w-[485px] h-[355px] p-15 mt-4 ml-10 border-gray-400 rounded-md">
                  <div className="flex items-center m-6">
                    <p className="font-semibold text-sm text-primary-green">
                      Status Pesanan
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mt-2 gap-2 ml-6">
                      <div className="flex justify-between items-center">
                        <label htmlFor="orderDate" className="text-sm">
                          Tanggal
                        </label>
                        <Input
                          id="input-date"
                          type="date"
                          name="orderDate"
                          register={register}
                          error={errors.status?.message}
                          className="block w-[290px] rounded-md border border-[#5D5D5D] py-1 px-4 mr-6 text-muted-foreground"
                        />
                      </div>
                      <div className="flex justify-between mr-5 items-center">
                        <label className="text-sm" htmlFor="statusOrder">
                          Status Pesanan
                        </label>
                        <Select
                          id="select-status-order"
                          className="py-1 px-4 mr-6"
                          name="statusOrder"
                          options={[
                            "Pengiriman",
                            "Proses",
                            "Menunggu Konfirmasi",
                            "Gagal",
                            "Selesai",
                          ]}
                          placeholder="Status"
                          register={register}
                          error={errors.status?.message}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <label htmlFor="extraInfo" className="text-sm">
                          Ekstra Info
                        </label>
                        <Textarea
                          id="extra-info"
                          name="extraInfo"
                          register={register}
                          error={errors.status?.message}
                          placeholder="Pesanan anda dalam perjalanan menuju kota Bandung."
                          className="p-3 mt-3 block w-72 h-14 text-xs border border-black rounded-md resize-none mr-6"
                        />
                      </div>
                      <div className="flex flex-row justify-end gap-5 mr-6">
                        <Button
                          id="btn-cancel"
                          label="Batal"
                          type="button"
                          onClick={handleCancel}
                          className="rounded bg-white border border-primary-green text-primary-green py-3 px-3 items-center font-semibold"
                        />
                        {updateLoading ? (
                          <div className="rounded bg-primary-green text-white py-3 px-8 items-center font-semibold">
                            <Loader2 className="animate-spin" size={20} />
                          </div>
                        ) : (
                          <Button
                            id="btn-submit"
                            label="Kirim"
                            type="submit"
                            className="rounded bg-primary-green text-white py-3 px-3 items-center font-semibold"
                          />
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
}
