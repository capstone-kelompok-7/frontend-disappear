import { useState } from "react";
import Layout from "../components/layout";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";
import Breadcrumbs from "@/components/breadcrumbs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoChevronDown } from "react-icons/io5";

function App() {
  return (
    <Layout>
      <div className="">
        {/* ISI CONTENT DISINI */}
        <Breadcrumbs pages="Halaman" />
        <h1>ISI CONTENT DISINI</h1>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="picture">Picture</label>
          <Input id="picture" type="file" />
          <Button type="submit" />
          <div className=" flex mt-9 justify-between items-center">
            <Button
              icon="+"
              label="Buat Produk"
              className=" rounded-md bg-gray-300 py-3 px-3"
            />
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
                <DropdownMenuItem>apa</DropdownMenuItem>
                <DropdownMenuItem>apa aja</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
