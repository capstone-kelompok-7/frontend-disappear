import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { Link, useNavigate } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { CrossCircledIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteArtikel } from "@/utils/api/artikel/api";
import Delete from "@/components/delete/delete";
import { useToast } from "@/components/ui/use-toast";
import { Loading } from "@/components/loading";

function CardArtikel({ title, content, photo, date, artikelId }) {
  // Intragrated content
  const truncateContent = (text, maxWords) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };
  const truncatedContent = truncateContent(content, 40);
  const cleanContent = DOMPurify.sanitize(truncatedContent);

  // Intragrate Date
  const formattedDatee = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  const releaseDate = new Date(date);

  function calculateCountdown() {
    const now = new Date();
    const difference = now - releaseDate;
    const daysAgo = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursAgo = Math.floor(difference / (1000 * 60 * 60));

    if (daysAgo === 0) {
      if (hoursAgo === 0) {
        const minutesAgo = Math.floor(difference / (1000 * 60));
        return `${minutesAgo} Menit Yang Lalu`;
      }
      return `${hoursAgo} Jam Yang Lalu`;
    } else if (daysAgo === 1) {
      return "Kemarin";
    } else if (daysAgo <= 7) {
      return `${daysAgo} Hari lalu`;
    } else if (daysAgo <= 28) {
      const weeksAgo = Math.floor(daysAgo / 7);
      return `${weeksAgo} Minggu Yang Lalu`;
    } else {
      const monthsAgo = Math.floor(daysAgo / 30);
      return `${monthsAgo} Bulan Yang Lalu`;
    }
  }

  const [countdown] = useState(calculateCountdown(date));

  // Navigate Artikel
  const navigate = useNavigate();

  const toDetailArtikel = () => {
    navigate(`/artikel/detail-news/${artikelId}`);
  };

  const toEditArtikel = () => {
    navigate(`/artikel/edit-news/${artikelId}`);
  };

  // Delete Artikel
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteClick(id) {
    try {
      const result = await Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });

      if (result.isConfirmed) {
        setIsLoading(true);
        await deleteArtikel(id);
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex border-y-4 p-4 mt-4 mb-4 space-x-3 shadow-md items-center justify-between">
          <div className="p-4">
            <p className="mb-2">{formattedDatee}</p>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <div className="mr-12">
              <p dangerouslySetInnerHTML={{ __html: cleanContent }} />
              <div className="flex justify-between pt-3">
                <p className="items-center">{`${countdown}`}</p>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 2C13 2.55228 13.4477 3 14 3C14.5523 3 15 2.55228 15 2C15 1.44772 14.5523 1 14 1C13.4477 1 13 1.44772 13 2Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 2C7 2.55228 7.44772 3 8 3C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Link>
                      <DropdownMenuItem
                        className=" hover:bg-secondary-green cursor-pointer gap-3 items-center text-black hover:text-white"
                        onClick={toDetailArtikel}
                        id="to-detail-artikel"
                      >
                        <IoEye />
                        <p>Detail Artikel</p>
                      </DropdownMenuItem>
                    </Link>
                    <Link>
                      <DropdownMenuItem
                        className=" hover:bg-secondary-green cursor-pointer gap-3 items-center text-black hover:text-white"
                        onClick={toEditArtikel}
                        id="to-edit-artikel"
                      >
                        <BiEdit />
                        <p>Edit Artikel</p>
                      </DropdownMenuItem>
                    </Link>

                    <DropdownMenuItem
                      className=" hover:bg-secondary-green cursor-pointer gap-3 items-center text-black hover:text-white"
                      id="delete-artikel"
                      onClick={() => handleDeleteClick(artikelId)}
                    >
                      <BiTrash />
                      <p>Hapus Artikel</p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <img
            className="items-center w-[16.875rem] h-[10.938rem] rounded-md object-cover"
            src={photo}
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default CardArtikel;
