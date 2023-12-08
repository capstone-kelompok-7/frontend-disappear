import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Layout from "../../components/layout";
import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { getDetailArtikel } from "@/utils/api/artikel/api";
import { Loading } from "@/components/loading";

function DetailNews() {
  const { id } = useParams();
  const [artikel, setArtikel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchArtikel();
  }, []);

  async function fetchArtikel() {
    try {
      setIsLoading(true);
      const result = await getDetailArtikel(id);
      setArtikel(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const { title, content, photo, author, date } = artikel;
  const sanitizedContent = DOMPurify.sanitize(content);

  const formattedDate = new Date(date)
    .toLocaleDateString("id-ID", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })
    .split("/")
    .join("-");

  return (
    <Layout>
      <div className="mt-5 text-xl">
        <Link to="/artikel">
          <button className="flex items-center space-x-2">
            <IoArrowBack />
            <div className="font-bold">Artikel</div>
          </button>
        </Link>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-5 mx-8 border-t-2 border-l-2 p-4 flex">
          <div className="p-4">
            <div className="p-2">
              <h2 className="text-3xl font-bold mb-3">{title}</h2>
              <div className="mb-6 flex items-center space-x-8">
                <p className="text-xl font-semibold text-[#AF8050]">{author}</p>
                <p className="text-xl my-auto font-semibold text-[#AF8050]">
                  {formattedDate}
                </p>
              </div>
            </div>
            <div className="mx-auto mb-8">
              <img
                className="w-full h-[50rem] rounded-md object-cover"
                src={photo}
                alt={title}
              />
            </div>
            <p dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
            <div className="justify-between my-7 flex">
              <button
                type="submit"
                className="border border-black text-black px-4 rounded"
              >
                Hapus Artikel
              </button>
              <button
                type="button"
                className="bg-secondary-green text-white px-4 py-2 rounded"
              >
                Edit Artikel
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default DetailNews;
