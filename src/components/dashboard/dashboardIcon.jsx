/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const DashboardIcon = ({ iconSrc, title, value, className }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center shadow-lg rounded-lg w-full h-full py-6 bg-white">
      <img src={iconSrc} alt="" className="h-10" />
      <p className="text-lg">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardIcon;
