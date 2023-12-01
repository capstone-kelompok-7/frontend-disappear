import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "@/styles/ulasan/detail.css";
import { BsArrowLeft } from "react-icons/bs";
import { Progress } from "flowbite-react";
import { FaUserCircle } from "react-icons/fa";
import Layout from "@/components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import Star from "@/components/review/star";
import { useParams } from "react-router-dom";
import { getDetailUlasan } from "@/utils/api/ulasan/api";

export default function LihatUlasan() {
  const [ulasan, setUlasan] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailUlasan(id);
      setUlasan(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const customTheme = {
    color: {
      primary: "bg-orange-400",
    },
    size: {
      sm: "h-2",
    },
  };

  const reviewsData = [
    {
      id: 1,
      name: "Nama1",
      date: "12 Ags 2023",
      content:
        "Totebag kanvas ini benar-benar jawara dalam kategori fungsional dan gaya. Kuat, stylish, dan ramah lingkungan, cocok banget buat kegiatan belanja atau sekadar jalan-jalan santai.",
    },
    {
      id: 2,
      name: "Nama2",
      date: "12 Ags 2023",
      content:
        "Totebag kanvas ini benar-benar jawara dalam kategori fungsional dan gaya. Kuat, stylish, dan ramah lingkungan, cocok banget buat kegiatan belanja atau sekadar jalan-jalan santai.",
    },
    {
      id: 3,
      name: "Nama3",
      date: "12 Ags 2023",
      content:
        "Totebag kanvas ini benar-benar jawara dalam kategori fungsional dan gaya. Kuat, stylish, dan ramah lingkungan, cocok banget buat kegiatan belanja atau sekadar jalan-jalan santai.",
    },
    {
      id: 4,
      name: "Nama4",
      date: "12 Ags 2023",
      content:
        "Totebag kanvas ini benar-benar jawara dalam kategori fungsional dan gaya. Kuat, stylish, dan ramah lingkungan, cocok banget buat kegiatan belanja atau sekadar jalan-jalan santai.",
    },
    {
      id: 5,
      name: "Nama5",
      date: "12 Ags 2023",
      content:
        "Totebag kanvas ini benar-benar jawara dalam kategori fungsional dan gaya. Kuat, stylish, dan ramah lingkungan, cocok banget buat kegiatan belanja atau sekadar jalan-jalan santai.",
    },
  ];

  return (
    <Layout>
      <div className="mt-3">
        <Breadcrumbs pages="Lihat Ulasan" />
      </div>

      <div className="mt-2 mb-4 py-5 flex justify-between">
        <div className="flex items-center font-bold w-full">
          <Link to="/ulasan">
            <BsArrowLeft />
          </Link>
          <p className="pl-2 text-xl">Kembali</p>
        </div>
      </div>

      <div className="flex mt-4 items-center">
        <div className="flex-col w-1/2">
          <p className="font-semibold pb-4">Totebag</p>
          <p>P00B4532</p>
        </div>

        <div className="flex-col w-1/4 mr-10">
          <p className="font-semibold pb-4">Total Ulasan</p>
          <div className="flex">
            <p className="text-2xl font-bold">100K</p>
            <p className="font-semibold pl-5">Pelanggan</p>
          </div>
        </div>

        <div className="flex-col w-1/4">
          <p className="font-semibold pb-4">Total Rating</p>
          <div className="flex">
            <p className="text-2xl font-bold pr-5">4.8</p>
            <Star />
          </div>
        </div>

        <div className="flex-col w-1/4">
          <div className="flex items-center h-4 ">
            <p className="pr-2 text-sm w-4">5</p>
            <Progress
              progress={35}
              className="w-52"
              theme={customTheme}
              color="primary"
              size="sm"
            />
            <p className="pl-2 text-sm w-4">35</p>
          </div>

          <div className="flex items-center">
            <p className="pr-2 text-sm w-4">4</p>
            <Progress
              progress={22}
              className="w-52"
              theme={customTheme}
              color="primary"
              size="sm"
            />
            <p className="pl-2 text-sm w-4">22</p>
          </div>

          <div className="flex items-center h-4">
            <p className="pr-2 text-sm w-4">3</p>
            <Progress
              progress={28}
              className="w-52"
              theme={customTheme}
              color="primary"
              size="sm"
            />
            <p className="pl-2 text-sm w-4">28</p>
          </div>

          <div className="flex items-center">
            <p className="pr-2 text-sm w-4">2</p>
            <Progress
              progress={10}
              className="w-52"
              theme={customTheme}
              color="primary"
              size="sm"
            />
            <p className="pl-2 text-sm w-4">10</p>
          </div>

          <div className="flex items-center h-4">
            <p className="pr-2 text-sm w-4">1</p>
            <Progress
              progress={5}
              className="w-52"
              theme={customTheme}
              color="primary"
              size="sm"
            />
            <p className="pl-2 text-sm w-4">5</p>
          </div>
        </div>
      </div>

      <div className="grow overflow-auto h-0 mt-9 scroll">
        {reviewsData.map((review) => (
          <div key={review.id} className="mt-7 mr-5 p-6 border rounded-sm">
            <div className="flex items-center">
              <div className="flex justify-between w-full">
                <FaUserCircle className="text-4xl" />
                <div className="pl-3 flex-grow">
                  <h1 className="font-semibold">{review.name}</h1>
                  <p className="text-neutral-400 text-xs">{review.date}</p>
                </div>
                <div className="flex items-center">
                  <Star />
                </div>
              </div>
            </div>

            <div className="flex pt-5 justify-between">
              <p>{review.content}</p>
              <div className="flex gap-2">
                <img src="" alt="" className="bg-gray-300 w-12 h-12 rounded" />
                <img src="" alt="" className="bg-gray-300 w-12 h-12 rounded" />
                <img src="" alt="" className="bg-gray-300 w-12 h-12 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
