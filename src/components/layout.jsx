import React from "react";
import Navbar from "./sidebar/navbar";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="w-full h-screen overflow-auto ">
      <Navbar label="Admin" />

      <div className="container mx-auto grow">{children}</div>
    </div>
  );
}
