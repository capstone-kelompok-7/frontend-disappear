/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircle } from "react-icons/io5";

export default function Navbar(props) {
  const { label, onClick } = props;

  return (
    <nav className="shadow-md h-20 bg-white w-full flex justify-between items-center px-7">
      <div className="text-2xl cursor-pointer">
        <GiHamburgerMenu onClick={onClick} />
      </div>
      <div className="flex gap-3">
        <IoPersonCircle className="text-4xl" />
        <h1 className="text-xl font-semibold">{label}</h1>
      </div>
    </nav>
  );
}
