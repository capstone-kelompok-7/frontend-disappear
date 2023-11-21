import React, { useState } from "react";
import SidebarList from "./sidebar/sidebarList";

export default function Dropdown(props) {
  const { icon, label, iconDrop, isSidebarOpen, sidebarItems } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isSidebarOpen && (
        <div
          className={`gap-3 items-center px-3 py-3 mx-3 rounded-md cursor-pointer justify-between ${
            isOpen
              ? "active:bg-white"
              : "hover:bg-primary-green hover:text-white"
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <p className="text-xl">{icon}</p>
              <button className="font-medium text-sm">{label}</button>
            </div>
            <div>
              <p>{iconDrop}</p>
            </div>
          </div>
          {isOpen && (
            <div className="relative top-full left-0 block bg-white z-10 w-full rounded">
              {sidebarItems.map((item, index) => (
                <SidebarList
                  key={index}
                  to={item.to}
                  label={item.label}
                  icon={item.icon}
                  isSidebarOpen={isSidebarOpen}
                  isActive={false}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
