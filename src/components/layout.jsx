import React from "react";
import Navbar from "./sidebar/navbar";
import SideBar from "./sidebar/sidebar";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="w-full h-screen overflow-auto ">
      <SideBar />
      <div className="container mx-auto grow ">{children}</div>
    </div>
  );
}
