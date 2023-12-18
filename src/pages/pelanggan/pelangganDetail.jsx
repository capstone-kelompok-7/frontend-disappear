import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import "../../styles/pelanggan/pelangganDetail.css";
import { FaRegCheckCircle, FaUserCircle } from "react-icons/fa";
import { Progress } from "flowbite-react";
import Button from "@/components/button";
import Delete from "@/components/delete/delete";
import {
  deleteUsers,
  getActivity,
  getPelangganDetail,
} from "@/utils/api/pelanggan/api";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import { Loading } from "@/components/loading";
import { useToast } from "@/components/ui/use-toast";
import { CrossCircledIcon } from "@radix-ui/react-icons";

function PelangganDetail() {
  const [users, setUsers] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [activity, setActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });

      if (result.isConfirmed) {
        setIsLoading(true);
        await deleteUsers(id);
        navigate("/pelanggan");
        toast({
          title: (
            <div className="flex items-center">
              <FaRegCheckCircle />
              <span className="ml-2">Pelanggan berhasil dihapus!</span>
            </div>
          ),
          description:
            "Data pelanggan telah berhasil dihapus, nih. Silahkan nikmati fitur lainnya!",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menghapus Pelanggan!</span>
          </div>
        ),
        description: "Terjadi kesalahan saat menghapus pelanggan.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  async function fetchData() {
    try {
      setIsLoading(true);
      const detail = await getPelangganDetail(id);
      setUsers(detail.data);
      setAddresses(detail.data.addresses);
      const result = await getActivity(id);
      setActivity(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  const exp = users.exp;
  const maxExp = 1001;
  const progressPercentage = (exp / maxExp) * 100;
  return (
    <Layout>
      <div className="">
        <Breadcrumbs pages="Detail Pelanggan" />
        <div className="w-[85%] px-5 py-5 m-8 mx-auto shadow-md bg-white font-bold text-lg">
          <h1>Pelanggan</h1>
        </div>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="flex">
                {/* kotak profile pict */}

                <div className="flex w-[30%] ml-[8%] border rounded-sm bg-white">
                  <div className="pt-8 pl-6 text-8xl mb-4">
                    <img
                      src={users.photo_profile}
                      className="w-16 h-20 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col pt-8 pl-8 pr-8 break-all pb-8">
                    <p className="font-bold text-xl">{users.name}</p>
                    <p className="text-base mt-[0.2rem]">{users.email}</p>
                    <p className="text-sm mt-[0.2rem] text-[#6E6E6E] ">
                      Login terakhir 15 Agus 23, 10.35 AM
                    </p>
                  </div>
                </div>
                {/* kotak exp bar */}
                <div className="ml-16 w-[50%] mr-[8%] h-38 flex justify-center border rounded-sm bg-white  max-h-36">
                  <div className="w-[85%] pt-14 relative">
                    <Progress
                      progress={progressPercentage}
                      size="md"
                      color="dark"
                    />
                    <div
                      className="absolute top-[15%] text-[#000] font-bold whitespace-nowrap transform translate-x-[-50%]"
                      style={{
                        left: `calc(${Math.min(
                          progressPercentage,
                          100
                        )}% - 10px)`,
                      }}
                    >
                      {exp} EXP
                    </div>
                    <span
                      className={`progress-dot ${
                        progressPercentage > 0 ? "dot-active" : ""
                      }`}
                      style={{ left: "0%" }}
                    ></span>
                    <span
                      className={`progress-dot ${
                        progressPercentage > 50 ? "dot-active" : ""
                      }`}
                      style={{ left: "49%" }}
                    ></span>
                    <span
                      className={`progress-dot ${
                        progressPercentage >= 100 ? "dot-active" : ""
                      }`}
                      style={{ left: "99%" }}
                    ></span>
                    <div className="exp-level">
                      <div className="flex justify-between mt-2 absolute w-[100%] font-bold">
                        <p className="">Bronze</p>
                        <p className="ml-[-2rem]">Silver</p>
                        <p className="mr-[-1.5rem]">Gold</p>
                      </div>
                      <div className="flex justify-between absolute mt-8 w-[100%] whitespace-nowrap">
                        <p className="">0-500</p>
                        <p className="ml-[-1rem]">501-1000</p>
                        <p className="mr-[-2rem]">1001 ++</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                {/* kotak informasi pelanggan */}
                <div className="w-[30%] ml-[8%] mt-8 border rounded-sm bg-white">
                  <h1 className="pt-4 pl-6 font-bold text-lg">
                    Informasi Pelanggan
                  </h1>
                  <div className="flex w-full">
                    <div className="flex flex-col w-1/4 pt-6 pl-6 pr-6 gap-8 pb-6">
                      <p className="">Nama</p>
                      <p className="">Email</p>
                      <p className="">Telepon</p>
                      <p className="">Alamat</p>
                    </div>
                    <div className="flex flex-col w-3/4 pl-6 pt-6 gap-8 pb-6">
                      <p className="">
                        {users.name ? users.name : "Tidak ada nama"}
                      </p>
                      <p className=" break-all">
                        {users.email ? users.email : "Tidak ada email"}
                      </p>
                      <p className="">
                        {users.phone ? users.phone : "Tidak ada nomor"}
                      </p>
                      <p className="">
                        {addresses && addresses.length > 0
                          ? addresses[0].address
                          : "Tidak ada alamat"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* aktivitas pelanggan */}
                <div className="w-[50%] mt-8 mr-[8%] h-[9.5rem] ml-16 rounded-sm bg-white">
                  <h1 className="text-lg font-bold">Aktivitas Pelanggan</h1>
                  <div className="flex">
                    <div className="mt-6 w-[40%] h-[235px] border rounded-sm bg-white">
                      <p className="flex justify-center mt-14 font-bold text-5xl">
                        {activity.total_orders}
                      </p>
                      <p className="flex justify-center font-medium text-xl">
                        Pesanan
                      </p>
                      <p className="flex justify-center mt-2 font-medium text-xs text-[#787878]">
                        {activity.num_successful_orders} pesanan sukses
                      </p>
                      <p className="flex justify-center mt-1 font-medium text-xs text-[#787878]">
                        {activity.num_failed_orders} pesanan gagal
                      </p>
                    </div>
                    <div className="ml-8 mt-6 w-[40%] h-[235px] border rounded-sm bg-white">
                      <p className="flex justify-center mt-14 font-bold text-5xl">
                        {activity.total_challenges}
                      </p>
                      <p className="flex justify-center font-medium text-xl">
                        Tantangan
                      </p>
                      <p className="flex justify-center mt-2 font-medium text-xs text-[#787878]">
                        {activity.num_successful_challenges} tantangan sukses
                      </p>
                      <p className="flex justify-center mt-2 font-medium text-xs text-[#787878]">
                        {activity.num_failed_challenges} tantangan gagal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex  justify-end relative mt-4 mr-[15.5%] whitespace-nowrap">
                <Button
                  id="button-delete"
                  onClick={() => handleDelete(users.id)}
                  label="Hapus Pelanggan"
                  className="text-white rounded-md bg-black py-3 px-3"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default PelangganDetail;
