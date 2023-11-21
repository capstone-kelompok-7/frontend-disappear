/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircle } from "react-icons/io5";

export default function Navbar(props) {
  const { label, onClick } = props;

  return (
    <nav className="shadow-md h-20  w-full flex justify-between items-center px-7 bg-primary-green">
      <div className="text-2xl cursor-pointer">
        <GiHamburgerMenu onClick={onClick} className=" text-white" />
      </div>
      <div className="flex gap-3 items-center">
        <IoPersonCircle className="text-4xl text-white" />
        <h1 className="text-xl font-semibold text-white">{label}</h1>
      </div>
    </nav>
  );
}
