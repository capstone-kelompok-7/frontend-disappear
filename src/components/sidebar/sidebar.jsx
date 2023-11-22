import React from "react";

import { BiEdit } from "react-icons/bi";
import { LuCircleDollarSign, LuLayoutGrid, LuList } from "react-icons/lu";
import { IoChevronDown, IoExitOutline, IoImageOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import {
  PiBasket,
  PiMoney,
  PiNewspaper,
  PiNoteDuotone,
  PiTree,
} from "react-icons/pi";
import { RxExit } from "react-icons/rx";

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
          } duration-300 h-full bg-white shadow-md`}
        >
          <div className=" flex items-center p-5 w-20  gap-5">
            <img
              src="/logoDisappear.png"
              alt="logo"
              className={`rounded origin-left duration-300 ${
                !isSidebarOpen && "scale-0"
              }`}
            />
            <h1
              className={` text-black origin-left duration-300 font-semibold text-xl ${
                !isSidebarOpen && " scale-0"
              }`}
            >
              DISAPPEAR
            </h1>
          </div>
          <hr
            className={`border-primary-green mx-5 border mb-1 origin-left duration-300 ${
              !isSidebarOpen && "scale-0"
            }`}
          />

          <div
            className={`pt-9 duration-300 origin-left ${
              !isSidebarOpen && " scale-0"
            } flex flex-col justify-between flex-grow h-screen`}
          >
            <div>
              <SidebarList
                to="/dashboard"
                label="Dasbor"
                icon={<LuLayoutGrid />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                label="Carousel"
                icon={<IoImageOutline />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                to="/category"
                label="Kategori"
                icon={<LuList />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                to="/produk"
                label="Produk"
                icon={<PiBasket />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                to="/pelanggan"
                label="Pelanggan"
                icon={<GoPeople />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                to="/pesanan"
                label="Pesanan"
                icon={<PiNoteDuotone />}
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
                icon={<PiTree />}
                iconDrop={<IoChevronDown />}
                isSidebarOpen={isSidebarOpen}
                sidebarItems={[
                  { to: "/tantangan", label: "Tantangan" },
                  { to: "/peserta-tantangan", label: "Peserta Tantangan" },
                ]}
              />
              <SidebarList
                to="/kupon"
                label="Kupon"
                icon={<PiMoney />}
                isSidebarOpen={isSidebarOpen}
              />
              <SidebarList
                to="/artikel"
                label="Artikel"
                icon={<PiNewspaper />}
                isSidebarOpen={isSidebarOpen}
              />
            </div>
            <div className=" mb-5">
              <SidebarList
                label="Keluar"
                icon={<RxExit />}
                isSidebarOpen={isSidebarOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
