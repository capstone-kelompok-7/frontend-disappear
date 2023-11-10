/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const DetailCard = ({ imgSrc, name, date, amount, status }) => {
  return (
    <div className="flex items-center px-4 py-2 gap-32">
      <div className="flex gap-6 items-center">
        <div className="rounded-full w-16 h-16 bg-[#C4C4C4]">
          {/* <img src={imgSrc} className="w-full h-full" /> */}
        </div>
        <div className="">
          <p className="font-bold text-2xl">{name}</p>
          <p className="text-sm">{`on ${date}`}</p>
        </div>
      </div>

      <div className="flex items-center">
        <p className=" font-semibold">{`Rp. ${amount}`}</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div
          className={`rounded-full w-4 h-4 ${
            status === "Menunggu Pembayaran" ? "bg-[#c4c4c4]" : "bg-[#c4c4c4]"
          }`}
        ></div>
        <p className="text-sm">{status}</p>
      </div>
    </div>
  );
};

export default DetailCard;
