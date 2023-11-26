import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const menuItems = [
    { label: "Beranda", link: "#beranda" },
    { label: "Misi", link: "#misi" },
    { label: "Alasan", link: "#alasan" },
    { label: "Manfaat", link: "#manfaat" },
    { label: "Testimoni", link: "#testimoni" },
    { label: "FAQ", link: "#faq" },
    { label: "Kontak", link: "#kontak" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-5 px-14">
        <div className="flex cursor-pointer items-center font-medium text-2xl ">
          <img src="/logoDisappear.png" alt="Logo Disappear" className="w-12" />
          <h1 className="text-[#25745A] font-semibold">DISAPPEAR</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu name={open ? "close" : "menu"} />
        </div>
        <ul
          className={`md:flex md:items-center gap-10 absolute md:static bg-white
         md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in py-2 text-center ${
           open ? "top-20" : "top-[-490px]"
         }`}
        >
          {menuItems.map((menuItem, index) => (
            <li key={index} className="md:my-0 my-4">
              <a
                href={menuItem.link}
                className="text-gray-400 hover:text-black duration-500"
              >
                {menuItem.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
