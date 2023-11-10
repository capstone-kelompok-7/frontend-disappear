/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import { useSidebar } from "../utils/states/sidebarContext";
import SideBar from "./sidebar/sidebar";
import Navbar from "./sidebar/navbar";

export default function Layout(props) {
  const { children } = props;
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  return (
    <div className="w-full overflow-auto flex flex-row bg-white">
      <SideBar isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-center shadow-md h-20 bg-white w-full">
          <Navbar
            label="Admin"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
        <div className="flex flex-col flex-grow mx-12">{children}</div>
      </div>
    </div>
  );
}
