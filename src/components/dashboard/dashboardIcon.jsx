/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const DashboardIcon = ({ iconSrc, title, value, className }) => {
  return (
    <div className="flex gap-5 items-center shadow-lg py-2 pl-2 pr-10 rounded-lg">
      <div className={`${className} rounded-lg bg-[#D9D9D9] w-16 h-16 xl:w-20 xl:h-20 p-5`}>
        <img src={iconSrc} alt="" className="w-10" />
      </div>
      <div>
        <p className="text-xl ">{title}</p>
        <p className="text-2xl  font-bold">{value}</p>
      </div>
    </div>
  );
};

export default DashboardIcon;
