import { PiFacebookLogoFill, PiInstagramLogoFill, PiTwitterLogoFill } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="md:flex sm:flex-none py-14 px-16 ">
      <div className="md:pr-[32rem] sm:pr-0 ">
        <div className="flex pb-8">
          <img src="/logoDisappear.png" alt="" className="md:w-16 sm:w-8" />
          <h1 className="self-center font-bold md:text-4xl sm:text-xl">DISAPPEAR</h1>
        </div>
        <p className="sm:text-sm md:text-base">
          Kami adalah tim berkomitmen yang menawarkan produk ramah lingkungan
          berkualitas tinggi. Aplikasi kami bukan hanya tempat belanja, tapi
          juga sumber inspirasi dan edukasi tentang pentingnya menjaga
          lingkungan. Bergabunglah dengan kami dalam perjalanan menuju dunia
          yang lebih hijau dan berkelanjutan.
        </p>
        <div className="flex pt-8 gap-5">
            <PiInstagramLogoFill style={{width: "2.5rem", height: "2.5rem"}} />
            <PiFacebookLogoFill style={{width: "2.5rem", height: "2.5rem"}}/>
            <PiTwitterLogoFill style={{width: "2.5rem", height: "2.5rem"}}/>
        </div>
      </div>
      <div>
        <h1 className="font-bold md:text-3xl sm:text-xl sm:pt-12 md:pt-0">Kontak</h1>
        <div className="flex py-8 ">
            <BsFillTelephoneFill style={{width: "1.5rem", height: "1.5rem"}} />
            <p className="pl-3 font-medium md:text-xl sm:text-sm">+62 823 908 7654</p>
        </div>
        <div className="flex pb-8">
            <IoMailSharp style={{width: "1.5rem", height: "1.5rem"}} />
            <p className="pl-3 font-medium md:text-xl sm:text-sm">disappearorganization@gmail.com</p>
        </div>
        <div className="flex pb-8">
            <MdLocationOn style={{width: "2.5rem", height: "2.5rem"}} />
            <p className="pl-3 font-medium md:text-xl sm:text-sm">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
        </div>
      </div>
    </div>
  );
}