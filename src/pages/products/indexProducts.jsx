import React from "react";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function IndexProducts() {
  return (
    <>
      <Layout>
        <Breadcrumbs pages="Produk" />
        <div className=" flex justify-between items-center mt-10">
          <Link
            to="/buat-produk"
            className=" font-medium text-sm rounded-md text-white bg-gray-500 px-3 py-3 flex items-center justify-between gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                fill="white"
              />
              <path
                d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                fill="white"
              />
            </svg>
            Buat Produk
          </Link>
          <div className=" flex gap-5 items-center justify-end w-1/2">
            <div className=" relative w-3/6">
              <Input type="text" placeholder="Cari Produk" />

              <svg
                className="absolute right-3 top-3 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3648 9.472C11.8184 8.62769 12.0757 7.66225 12.0757 6.63672C12.0757 3.32301 9.38939 0.636719 6.07568 0.636719C2.76198 0.636719 0.0756836 3.32301 0.0756836 6.63672C0.0756836 9.95043 2.76198 12.6367 6.07568 12.6367C7.63993 12.6367 9.06437 12.0381 10.1324 11.0575L12.3177 13.0969C12.7215 13.4738 13.3543 13.4519 13.7311 13.0481C14.1079 12.6444 14.0861 12.0116 13.6823 11.6348L11.3648 9.472ZM6.07568 10.5367C3.92177 10.5367 2.17568 8.79063 2.17568 6.63672C2.17568 4.48281 3.92177 2.73672 6.07568 2.73672C8.22959 2.73672 9.97568 4.48281 9.97568 6.63672C9.97568 8.79063 8.22959 10.5367 6.07568 10.5367Z"
                  fill="#888888"
                />
              </svg>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-between items-center rounded-md bg-white py-3 px-3 border gap-20">
                <p>Filter</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                >
                  <path
                    d="M5 4.5L0.669872 0.75L9.33013 0.75L5 4.5Z"
                    fill="#373737"
                  />
                </svg>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>Alat Rumah Tangga</DropdownMenuItem>
                <DropdownMenuItem>Produk Ramah Lingkungan</DropdownMenuItem>
                <DropdownMenuItem>Botol Air</DropdownMenuItem>
                <DropdownMenuItem>Bag</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Link to="/detail-produk" className=" py-3 px-3">
          Detail Produk
        </Link>
      </Layout>
    </>
  );
}
