/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { BiEdit } from "react-icons/bi";
import {
  LuCircleDollarSign,
  LuLayoutPanelLeft,
  LuList,
  LuNewspaper,
  LuPalmtree,
} from "react-icons/lu";
import {
  IoBasketOutline,
  IoCashOutline,
  IoChevronDown,
  IoExitOutline,
  IoPeopleOutline,
} from "react-icons/io5";

import SidebarList from "./sidebarList";
import Dropdown from "../dropdown";

export default function SideBar(props) {
  const { isSidebarOpen } = props;

  return (
    <>
      <div className=" flex">
        <div
          className={` ${
            isSidebarOpen ? "w-72" : "w-0"
          } duration-300 h-full bg-gray-300`}
        >
          <div className=" flex items-center p-5 w-20  gap-5">
            <img src="./logoDisappear.jpeg" alt="" className="rounded" />
            <h1
              className={` text-black origin-left duration-300 font-semibold text-xl ${
                !isSidebarOpen && " scale-0"
              }`}
            >
              DISAPPEAR
            </h1>
          </div>
          <hr className=" border-black" />

          <div
            className={`pt-9 duration-300 origin-left ${
              !isSidebarOpen && " scale-0"
            } flex flex-col justify-between flex-grow h-screen`}
          >
            <div>
              <SidebarList
                to="/dashboard"
                label="Dasbor"
                icon={<LuLayoutPanelLeft />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                label="Kategori"
                icon={<LuList />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                label="Produk"
                icon={<IoBasketOutline />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                label="Pelanggan"
                icon={<IoPeopleOutline />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                label="Pesanan"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.875 7.5C6.875 7.33424 6.94085 7.17527 7.05806 7.05806C7.17527 6.94085 7.33424 6.875 7.5 6.875H12.5C12.6658 6.875 12.8247 6.94085 12.9419 7.05806C13.0592 7.17527 13.125 7.33424 13.125 7.5C13.125 7.66576 13.0592 7.82473 12.9419 7.94194C12.8247 8.05915 12.6658 8.125 12.5 8.125H7.5C7.33424 8.125 7.17527 8.05915 7.05806 7.94194C6.94085 7.82473 6.875 7.66576 6.875 7.5ZM7.5 10.625H12.5C12.6658 10.625 12.8247 10.5592 12.9419 10.4419C13.0592 10.3247 13.125 10.1658 13.125 10C13.125 9.83424 13.0592 9.67527 12.9419 9.55806C12.8247 9.44085 12.6658 9.375 12.5 9.375H7.5C7.33424 9.375 7.17527 9.44085 7.05806 9.55806C6.94085 9.67527 6.875 9.83424 6.875 10C6.875 10.1658 6.94085 10.3247 7.05806 10.4419C7.17527 10.5592 7.33424 10.625 7.5 10.625ZM10 11.875H7.5C7.33424 11.875 7.17527 11.9408 7.05806 12.0581C6.94085 12.1753 6.875 12.3342 6.875 12.5C6.875 12.6658 6.94085 12.8247 7.05806 12.9419C7.17527 13.0592 7.33424 13.125 7.5 13.125H10C10.1658 13.125 10.3247 13.0592 10.4419 12.9419C10.5592 12.8247 10.625 12.6658 10.625 12.5C10.625 12.3342 10.5592 12.1753 10.4419 12.0581C10.3247 11.9408 10.1658 11.875 10 11.875ZM17.5 3.75V12.2414C17.5005 12.4056 17.4684 12.5683 17.4055 12.72C17.3426 12.8717 17.2502 13.0093 17.1336 13.125L13.125 17.1336C13.0093 17.2502 12.8717 17.3426 12.72 17.4055C12.5683 17.4684 12.4056 17.5005 12.2414 17.5H3.75C3.41848 17.5 3.10054 17.3683 2.86612 17.1339C2.6317 16.8995 2.5 16.5815 2.5 16.25V3.75C2.5 3.41848 2.6317 3.10054 2.86612 2.86612C3.10054 2.6317 3.41848 2.5 3.75 2.5H16.25C16.5815 2.5 16.8995 2.6317 17.1339 2.86612C17.3683 3.10054 17.5 3.41848 17.5 3.75ZM3.75 16.25H11.875V12.5C11.875 12.3342 11.9408 12.1753 12.0581 12.0581C12.1753 11.9408 12.3342 11.875 12.5 11.875H16.25V3.75H3.75V16.25ZM13.125 13.125V15.3672L15.3664 13.125H13.125Z"
                      fill="black"
                    />
                  </svg>
                }
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                label="Pembayaran"
                icon={<LuCircleDollarSign />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                label="Ulasan"
                icon={<BiEdit />}
                isSidebarOpen={isSidebarOpen}
              />
              <Dropdown
                label="Tantangan"
                icon={<LuPalmtree />}
                iconDrop={<IoChevronDown />}
                isSidebarOpen={isSidebarOpen}
                sidebarItems={[
                  { to: "", label: "Tantangan" },
                  { to: "", label: "Peserta Tantangan" },
                ]}
              />

              <SidebarList
                label="Kupon"
                icon={<IoCashOutline />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                label="Artikel"
                icon={<LuNewspaper />}
                isSidebarOpen={isSidebarOpen}
              />
            </div>
            <div className=" pb-32">
              <SidebarList
                label="Keluar"
                icon={<IoExitOutline />}
                isSidebarOpen={isSidebarOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
