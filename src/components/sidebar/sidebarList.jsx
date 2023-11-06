import React from "react";

export default function SidebarList(props) {
  const { label, icon } = props;
  return (
    <li className="flex gap-3 items-center  px-3 py-2 mx-3 hover:bg-white rounded-md cursor-pointer">
      <a href="" className=" text-xl">
        {icon}
      </a>
      <a href="" className=" font-medium text-sm">
        {label}
      </a>
    </li>
  );
}
