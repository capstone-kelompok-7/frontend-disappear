import React, { useState } from "react";
import Layout from "@/components/layout";
import Button from "@/components/button";
import Breadcrumbs from "@/components/breadcrumbs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

function editPesertaChallange() {
  const [gambar, setGambar] = useState(null);

  const onGambarChange = (e) => {
    setGambar(e.target.files[0]);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="my-6">
        <Breadcrumbs pages="Edit Peserta Tantangan" />
      </div>

      <div className="my-6 mx-[100px] px-[25px] py-5 flex justify-center bg-[#FFFFFF] shadow-md border-2">
        <form onSubmit={submitForm} className="w-full">
          <div className="mb-9">
            <div className="flex">
              <div className="flex-col w-1/4 pr-8">
                <label className="font-semibold">Username Instagram</label>
                <Input
                  type="text"
                  name="usernameInstagram"
                  label="Username Instagram"
                  className="w-full rounded-md border border-black shadow-sm py-1 px-4 mt-3"
                />
              </div>

              <div className="flex-col w-1/4 pr-8">
                <label className="font-semibold">EXP Tantangan</label>
                <Input
                  type="text"
                  name="expTantangan"
                  label="EXP Tantangan"
                  className="w-full rounded-md border border-black shadow-sm py-1 px-4 mt-3"
                />
              </div>

              <div className="flex-col w-1/2 pl-8">
                <label
                  htmlFor="status"
                  className="block font-semibold text-black"
                >
                  Status
                </label>
                <Select>
                  <SelectTrigger className="w-full border border-black mt-3">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="border border-black">
                    <SelectItem value="valid">Valid</SelectItem>
                    <SelectItem value="tidakValid">Tidak Valid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex-col w-1/2 pr-8 mb-10">
              <label className="font-semibold">Berpartisipasi</label>
              <Input
                label="Berpartisipasi"
                type="date"
                name="berpartisipasi"
                className=" block w-full rounded-md border border-black shadow-sm py-1 px-4 mt-3"
              />
            </div>

            <div className="flex w-1/2 pl-8 mt-6 justify-end">
              <div className="pr-3">
                <Button
                  label="Batal"
                  type="submit"
                  className="rounded-[5px] border border-black px-2.5 py-1.5 shadow"
                />
              </div>
              <div className="pr-3">
                <Button
                  label="Edit"
                  type="submit"
                  className="bg-[#25745A] rounded-[5px] px-3 py-2 shadow text-white"
                />
              </div>
            </div>
          </div>

          <div className="mb-6 flex">
            <div className="flex-col w-1/2 pr-8">
              <label
                htmlFor="gambar-tantangan"
                className="block font-semibold text-black"
              >
                Bukti Berpartisipasi
              </label>
              <div className="mt-3 mb-4 flex items-center">
                <div className="flex w-full items-center justify-center border border-black rounded-md">
                  <label className="w-full h-[12rem] flex flex-col items-center justify-center p-2 bg-neutral-100 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                    {!gambar ? (
                      <>
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_1505_13585"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="80"
                            height="80"
                          >
                            <rect width="80" height="80" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1505_13585)">
                            <path
                              d="M39.9998 58.3333C44.1665 58.3333 47.7082 56.875 50.6248 53.9583C53.5415 51.0417 54.9998 47.5 54.9998 43.3333C54.9998 39.1667 53.5415 35.625 50.6248 32.7083C47.7082 29.7917 44.1665 28.3333 39.9998 28.3333C35.8332 28.3333 32.2915 29.7917 29.3748 32.7083C26.4582 35.625 24.9998 39.1667 24.9998 43.3333C24.9998 47.5 26.4582 51.0417 29.3748 53.9583C32.2915 56.875 35.8332 58.3333 39.9998 58.3333ZM39.9998 51.6667C37.6665 51.6667 35.6943 50.8611 34.0832 49.25C32.4721 47.6389 31.6665 45.6667 31.6665 43.3333C31.6665 41 32.4721 39.0278 34.0832 37.4167C35.6943 35.8056 37.6665 35 39.9998 35C42.3332 35 44.3054 35.8056 45.9165 37.4167C47.5276 39.0278 48.3332 41 48.3332 43.3333C48.3332 45.6667 47.5276 47.6389 45.9165 49.25C44.3054 50.8611 42.3332 51.6667 39.9998 51.6667ZM13.3332 70C11.4998 70 9.93039 69.3472 8.62484 68.0417C7.31928 66.7361 6.6665 65.1667 6.6665 63.3333V23.3333C6.6665 21.5 7.31928 19.9306 8.62484 18.625C9.93039 17.3194 11.4998 16.6667 13.3332 16.6667H23.8332L29.9998 10H49.9998L56.1665 16.6667H66.6665C68.4998 16.6667 70.0693 17.3194 71.3748 18.625C72.6804 19.9306 73.3332 21.5 73.3332 23.3333V63.3333C73.3332 65.1667 72.6804 66.7361 71.3748 68.0417C70.0693 69.3472 68.4998 70 66.6665 70H13.3332Z"
                              fill="#767676"
                            />
                          </g>
                        </svg>
                      </>
                    ) : (
                      <>
                        <img
                          src={URL.createObjectURL(gambar)}
                          alt="gambar-tantangan"
                          className="h-full w-full object-cover"
                        />
                      </>
                    )}
                    <Input
                      type="file"
                      className="hidden"
                      onChange={onGambarChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default editPesertaChallange;
