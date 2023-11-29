/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import { useSidebar } from "../utils/states/sidebarContext";
import SideBar from "./sidebar/sidebar";
import Navbar from "./sidebar/navbar";
import { Toaster } from "./ui/toaster";

export default function Layout(props) {
  const { children } = props;
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  return (
    <div className="w-full  flex flex-row bg-white h-screen">
      <SideBar isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-col flex-grow overflow-auto">
        <div className="flex justify-between items-center shadow-md h-20 bg-white w-full">
          <Navbar
            label="Admin"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
        <div className="flex flex-col flex-grow px-12 overflow-auto">
          {children}
        </div>
        <Toaster />
      </div>
    </div>
  );
}
