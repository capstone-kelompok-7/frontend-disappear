import React from "react";
import { useLocation } from "react-router-dom";

export default function Breadcrumbs(props) {
  const { pages } = props;

  const location = useLocation();

  const seperatePathname = location.pathname
    .split("/")
    .filter((path) => path !== " / ");

  return (
    <div className=" bg-white w-full flex justify-between items-center  shadow-md text mt-5  rounded px-5  py-5">
      <h1 className=" font-bold text-4xl">{pages}</h1>
      <h2 className=" font-medium text-sm text-gray-300">
        dashboard {seperatePathname.join(" / ")}
      </h2>
    </div>
  );
}
