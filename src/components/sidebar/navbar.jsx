import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";

export default function Navbar(props) {
  const { label } = props;

  return (
    <nav className=" items-center  shadow-md w-full h-20">
      <div className=" flex  justify-end items-center  pt-5 px-7">
        <IoPersonCircle className=" text-4xl" />
        <h1 className=" text-xl font-semibold">{label}</h1>
      </div>
    </nav>
  );
}
