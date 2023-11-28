/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const DetailCard = ({ imgSrc, name, date, amount, status }) => {
  return (
    <div className="flex items-center px-4 py-2 gap-40 w-full">
      <p className="font-bold text-2xl">{name}</p>
      <p className="text-sm">{`${date}`}</p>
      <p className=" font-semibold">{`Rp. ${amount}`}</p>

      <div className="flex items-center justify-center gap-2">
        <div
          className={`rounded-full w-4 h-4 ${
            status === "Menunggu Konfirmasi" ? "bg-[#F7BC3B]" : "bg-[#37FF33]"
          }`}
        ></div>
        <p className="text-sm">{status}</p>
      </div>
    </div>
  );
};

export default DetailCard;
