/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarList(props) {
  const { label, icon, isSidebarOpen, to, onClick } = props;

  const location = useLocation();

  const isActive = location.pathname === to;

  const handleLogout = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    isSidebarOpen && (
      <Link
        to={to}
        className={`flex gap-3 items-center px-3 py-3 mx-3  rounded-md cursor-pointer justify-between  ${
          isActive
            ? "bg-primary-green text-white"
            : "hover:bg-primary-green hover:text-white"
        }`}
        onClick={handleLogout}
      >
        <div className="flex gap-3">
          <p className="text-xl ">{icon}</p>
          <p className="font-medium text-sm">{label}</p>
        </div>
      </Link>
    )
  );
}
