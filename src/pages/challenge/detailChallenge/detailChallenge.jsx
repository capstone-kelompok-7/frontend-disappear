import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { CrossCircledIcon } from "@radix-ui/react-icons";

import Layout from "@/components/layout";
import { getDetailChallenge } from "@/utils/api/challenge/challenge/api";
import { Loading } from "@/components/loading";
import { useToast } from "@/components/ui/use-toast";

export default function DetailChallange() {
  const [challenge, setChallenge] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const { description } = challenge;
  const sanitizedContent = DOMPurify.sanitize(description);

  async function fetchData() {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const result = await getDetailChallenge(id);
      setChallenge(result.data);
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

  const formatDate = (dateString) => {
    const [day, month, year] = new Date(dateString)
      .toLocaleDateString("en-GB")
      .split("/");
    return `${day}-${month}-${year}`;
  };

  return (
    <Layout>
      <div className="m-6 px-4  py-5 flex justify-between">
        <div className="flex items-center font-bold">
          <Link to="/tantangan">
            <BsArrowLeft />
          </Link>
          <p className="pl-2 text-xl">Tantangan</p>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="p-6 mx-16 rounded-md">
          <div className="flex justify-between">
            <h1 className="font-bold text-[40px]">{challenge.title}</h1>
            <div>
              <div className="bg-[#82ff80] rounded-xl py-1 px-9 ">
                <p className="text-black">{challenge.status}</p>
              </div>
            </div>
          </div>

          <div className="flex my-6">
            <div className="justify-center items-center gap-2.5 flex">
              <p className="font-semibold">Mulai</p>
              <p className="grow shrink text-xs font-medium">
                {formatDate(challenge.start_date)}
              </p>
            </div>
            <div className="justify-center items-center gap-2.5 pl-7 flex">
              <p className="font-semibold">Berakhir</p>
              <p className="grow shrink text-xs font-medium">
                {formatDate(challenge.end_date)}
              </p>
            </div>
          </div>
          <div className="mb-10">
            <p>EXP : {challenge.exp}</p>
          </div>

          <div>
            <img
              src={challenge.photo}
              alt={challenge.photo}
              className="w-full h-80 my-10 rounded-md object-contain"
            />
          </div>
          <p
            className="text-base space-y-3"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          ></p>
        </div>
      )}
    </Layout>
  );
}
