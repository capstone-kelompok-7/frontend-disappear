import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import SidebarList from "./sidebar/sidebarList";

export default function Dropdown(props) {
  const { icon, label, iconDrop, isSidebarOpen } = props;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isSidebarOpen && (
        <div
          className="flex gap-3 items-center  px-3 py-3 mx-3 hover:bg-white rounded-md cursor-pointer justify-between active:bg-white"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex gap-3">
            <p className=" text-xl">{icon}</p>
            <button className=" font-medium text-sm">{label}</button>
          </div>
          {isOpen && (
            <>
              <SidebarList label="Tantangan" />
            </>
          )}
          {!isOpen ? <IoChevronDown /> : <IoChevronUp />}
        </div>
      )}
    </>
  );
}
