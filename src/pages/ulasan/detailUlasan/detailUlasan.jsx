import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { Progress } from "flowbite-react";

import Layout from "@/components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import Star from "@/components/review/star";
import { getDetailUlasan } from "@/utils/api/ulasan/api";
import { Loading } from "@/components/loading";
import Stars from "@/components/userReview/Stars";
import { useToast } from "@/components/ui/use-toast";
import "@/styles/ulasan/detail.css";

export default function LihatUlasan() {
  const { toast } = useToast();
  const { id } = useParams();
  const [ulasan, setUlasan] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailUlasan(id);
      setUlasan(result.data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Mendapatkan Data Ulasan!</span>
          </div>
        ),
        description:
          "Oh, noo! Sepertinya ada kesalahan saat proses pencarian data, nih. Periksa koneksi mu dan coba lagi, yuk!!",
      });
    } finally {
      setIsLoading(false);
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

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  let totalReview = ulasan.rating;

  return (
    <Layout>
      <div className="mt-3">
        <Breadcrumbs pages="Lihat Ulasan" />
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
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
              <p className="font-semibold pb-4">{ulasan.name}</p>
            </div>

            <div className="flex-col w-1/4 mr-10">
              <p className="font-semibold pb-4">Total Ulasan</p>
              <div className="flex">
                <p className="text-2xl font-bold">{ulasan.total_review}</p>
                <p className="font-semibold pl-5">Pelanggan</p>
              </div>
            </div>

            <div className="flex-col w-1/4">
              <p className="font-semibold pb-4">Total Rating</p>
              <div className="flex">
                <p className="text-2xl font-bold pr-5">{totalReview}</p>
                <Star starValue={totalReview} />
              </div>
            </div>

            <div className="flex-col w-1/4">
              <div className="flex items-center h-4 ">
                <p className="pr-2 text-sm w-4">5</p>
                <Progress
                  progress={ulasan.current_rating_five}
                  className="w-52"
                  theme={customTheme}
                  color="primary"
                  size="sm"
                />
                <p className="pl-2 text-sm w-4">{ulasan.current_rating_five}</p>
              </div>

              <div className="flex items-center">
                <p className="pr-2 text-sm w-4">4</p>
                <Progress
                  progress={ulasan.current_rating_four}
                  className="w-52"
                  theme={customTheme}
                  color="primary"
                  size="sm"
                />
                <p className="pl-2 text-sm w-4">{ulasan.current_rating_four}</p>
              </div>

              <div className="flex items-center h-4">
                <p className="pr-2 text-sm w-4">3</p>
                <Progress
                  progress={ulasan.current_rating_three}
                  className="w-52"
                  theme={customTheme}
                  color="primary"
                  size="sm"
                />
                <p className="pl-2 text-sm w-4">
                  {ulasan.current_rating_three}
                </p>
              </div>

              <div className="flex items-center">
                <p className="pr-2 text-sm w-4">2</p>
                <Progress
                  progress={ulasan.current_rating_two}
                  className="w-52"
                  theme={customTheme}
                  color="primary"
                  size="sm"
                />
                <p className="pl-2 text-sm w-4">{ulasan.current_rating_two}</p>
              </div>

              <div className="flex items-center h-4">
                <p className="pr-2 text-sm w-4">1</p>
                <Progress
                  progress={ulasan.current_rating_one}
                  className="w-52"
                  theme={customTheme}
                  color="primary"
                  size="sm"
                />
                <p className="pl-2 text-sm w-4">{ulasan.current_rating_one}</p>
              </div>
            </div>
          </div>

          <div className="grow overflow-auto h-0 mt-9 scroll">
            {ulasan.reviews?.map((review) => {
              return (
                <div
                  key={review.id}
                  className="mt-7 mr-5 p-6 border rounded-sm"
                >
                  <div className="flex items-center">
                    <div className="flex justify-between w-full">
                      <img
                        src={review.photo_profile}
                        alt=""
                        className="rounded-full w-12 h-12"
                      />
                      <div className="pl-3 flex-grow">
                        <h1 className="font-semibold">{review.name}</h1>
                        <p className="text-neutral-400 text-xs">
                          {formatDate(review.date)}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Stars userReview={review.rating} />
                      </div>
                    </div>
                  </div>

                  <div className="flex pt-5 justify-between">
                    <p>{review.description}</p>
                    <div className="flex gap-2">
                      {review.photo &&
                        review.photo.slice(0, 3).map((photo, index) => (
                          <div key={photo.id} className="relative">
                            <img
                              src={photo.photo}
                              alt=""
                              className="w-12 h-12 rounded"
                            />
                            {index === 2 && review.photo.length > 3 && (
                              <div className="absolute top-0 right-1/2 transform translate-y-1/2 translate-x-1/2 text-white w-6 h-6 flex items-center justify-center">
                                +{review.photo.length - 3}
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </Layout>
  );
}
