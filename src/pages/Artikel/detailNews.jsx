import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { IoArrowBack } from "react-icons/io5";
import { Link, useParams, useNavigate } from "react-router-dom";

import Layout from "../../components/layout";
import { getDetailArtikel, deleteArtikel } from "@/utils/api/artikel/api";
import { Loading } from "@/components/loading";
import Delete from "@/components/delete/delete";
import { useToast } from "@/components/ui/use-toast";

function DetailNews() {
  const { id } = useParams();
  const [artikel, setArtikel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchArtikel();
  }, []);

  async function fetchArtikel() {
    try {
      setIsLoading(true);
      const result = await getDetailArtikel(id);
      setArtikel(result.data);
    } catch (error) {
      toast({
        title: "GAGAL MEMUAT ARTIKEL!",
        description: "Konten artikel gagal dimuat!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const { title, content, photo, author, date } = artikel;

  // content html
  const sanitizedContent = DOMPurify.sanitize(content);

  // date
  const formattedDate = new Date(date)
    .toLocaleDateString("id-ID", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })
    .split("/")
    .join("-");

  // Edit Artikel
  const navigate = useNavigate();

  const toEditArtikel = (id) => {
    navigate(`/artikel/edit-news/${id}`);
  };

  async function handleDeleteClick(id) {
    try {
      const result = await Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });

      if (result.isConfirmed) {
        setIsLoading(true);
        await deleteArtikel(id);
        navigate("/artikel");
        toast({
          title: (
            <div className="flex items-center">
              <FaRegCheckCircle />
              <span className="ml-2">Artikel berhasil dihapus!</span>
            </div>
          ),
          description:
            "Data produk telah berhasil dihapus, nih. Silahkan nikmati fitur lainnya!",
        });
        window.location.reload();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menghapus Artikel!</span>
          </div>
        ),
        description: "Terjadi kesalahan saat menghapus produk.",
      });
    } finally {
      setIsLoading(false);
    }
  }

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
                className="w-full h-[50rem] rounded-md object-contain"
                src={photo}
                alt=""
              />
            </div>
            <div
              className="space-y-3"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            ></div>
            <div className="justify-end space-x-3 my-7 flex">
              <button
                type="submit"
                className="border border-black text-black px-4 rounded"
                onClick={() => handleDeleteClick(id)}
                id="=detail-artikel-delete"
              >
                Hapus Artikel
              </button>
              <button
                type="button"
                className="bg-secondary-green text-white px-4 py-2 rounded"
                onClick={() => toEditArtikel(id)}
                id="detail-artikel-edit"
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
