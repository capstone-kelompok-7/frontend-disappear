import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function CardArtikel({ title, content, photo, date }) {
  const truncateContent = (text, maxWords) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  const truncatedContent = truncateContent(content, 55);
  const cleanContent = DOMPurify.sanitize(truncatedContent);

  const formattedDatee = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const releaseDate = new Date(date);

  const calculateCountdown = () => {
    const now = new Date();
    const difference = now - releaseDate;
    const daysAgo = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (daysAgo === 0) {
      return "Hari Ini";
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
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const intervalId = setInterval(
      () => setCountdown(calculateCountdown()),
      1000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex border-y-4 p-4 mt-4 mb-4 space-x-8 shadow-md items-center justify-between">
      <div className="p-4">
        <p className="mb-2">{formattedDatee}</p>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p
          className="text-black"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
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
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Hapus</DropdownMenuItem>
              <DropdownMenuItem>Lihat</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="items-center ">
        <img
          className="w-[20rem] h-[12rem] rounded-md object-cover"
          src={photo}
          alt=""
        />
      </div>
    </div>
  );
}

export default CardArtikel;
