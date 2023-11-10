/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function SidebarList(props) {
  const { label, icon, isSidebarOpen, to, iconDrop } = props;
  return (
    isSidebarOpen && (
      <Link
        to={to}
        className="flex gap-3 items-center px-3 py-3 mx-3 hover:bg-white rounded-md cursor-pointer justify-between active:bg-white"
      >
        <div className="flex gap-3">
          <p className="text-xl">{icon}</p>
          <p className="font-medium text-sm">{label}</p>
        </div>
        <p>{iconDrop}</p>
      </Link>
    )
  );
}
