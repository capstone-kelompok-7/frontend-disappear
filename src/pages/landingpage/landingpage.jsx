import React, { useEffect, useState } from "react";
import Nav from "@/components/landingpage/nav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bgImage from "@/assets/bgImage.png";
import motherNature from "@/assets/mothernature.png";
import ecommerce from "@/assets/ecommerce.png";
import truck from "@/assets/truck.png";
import listImage from "@/assets/listisempty.png";
import grid from "@/assets/grid.png";
import gogreen from "@/assets/gogreen.png";
import avatar from "@/assets/avatar.png";
import pana from "@/assets/pana.png";
import playstore from "@/assets/playstorebutton.png";
import applestore from "@/assets/appstorebutton.png";
import { MdOutlineLocationSearching } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import "@/styles/landingpage/landingpage.css";
import Footer from "@/components/landingpage/footer";
import { getReviews, getLandingPage } from "@/utils/api/landingpage/api";

export default function Landingpage() {
  const [reviews, setReviews] = useState([]);
  const [landingPageData, setLandingPageData] = useState({});


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getReviews();
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const landingPageResponse = await getLandingPage();
        setLandingPageData(landingPageResponse.data);
      } catch (error) {
        console.error("Error fetching landing page data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <>
      <Nav />
      {/* Hero Beranda */}
      <img id="beranda" src={bgImage} alt="Background Image" className="w-full" />
      <div  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-white md:text-4xl font-medium w-[1034px] sm:w-auto sm:text-2xl sm:pb-80 md:pb-0" >
          Merawat lingkungan hari ini untuk kehidupan yang lebih baik Kedepannya
        </p>
      </div>

      {/* Card */}
      <div className="bg-[#D9F2EA] p-6 md:flex sm:block  gap-14 justify-center">
        <div className="cardHero flex bg-white text-center gap-8 md:w-[1316px] sm:w-auto sm:pt-36 sm:pb-20 md:py-12 px-16 mt-[-140px]">
          <div>
            <MdOutlineLocationSearching
              style={{ width: "3rem", height: "3rem" }}
            />
            <h1 className="pt-10 pb-6 font-semibold md:text-xl sm:text-base">
              Edukasi dan Kesadaran
            </h1>
            <p className="sm:text-sm md:text-base">
              Mengedukasi dan meningkatkan kesadaran masyarakat tentang
              pentingnya penggunaan produk ramah lingkungan untuk mendukung
              perubahan perilaku menuju gaya hidup berkelanjutan.
            </p>
          </div>
          <div>
            <PiStrategyBold style={{ width: "3rem", height: "3rem" }} />
            <h1 className="pt-10 pb-6 font-semibold md:text-xl sm:text-base">
              Inovasi Berkelanjutan
            </h1>
            <p className="sm:text-sm md:text-base">
              Mengembangkan produk inovatif dan ramah lingkungan untuk memenuhi
              kebutuhan pelanggan tanpa mengorbankan keseimbangan ekologi.
            </p>
          </div>
          <div>
            <BsBoxSeam style={{ width: "3rem", height: "3rem" }} />
            <h1 className="pt-10 pb-6 font-semibold md:text-xl sm:text-base">
              Produk Bertanggung Jawab
            </h1>
            <p className="sm:text-sm md:text-base">
              Memastikan bahwa setiap tahap siklus hidup produk, mulai dari
              desain hingga pemrosesan, distribusi, penggunaan, dan pembuangan,
              meminimalkan dampak negatif terhadap lingkungan.
            </p>
          </div>
        </div>
      </div>

      {/* MISI */}
      <div id="misi" className="flex bg-[#D9F2EA]">
        <div className="self-center px-32 sm:py-20">
          <h1 className="font-semibold md:text-4xl pb-4 sm:text-2xl">Membawa Perubahan</h1>
          <p className="md:text-2xl font-normal sm:text-base">
            Mari bersama membangun komitmen untuk menciptakan perubahan positif
            dalam upaya pelestarian lingkungan. Bersama kami, mari kita ciptakan
            lingkungan yang aman dan nyaman untuk semuanya, memimpin perjalanan
            menuju dunia yang lebih hijau dan berkelanjutan.
          </p>
        </div>
        <img
          src={motherNature}
          alt="Mother Nature Image"
          className="sm:hidden md:block z-0"
        />
      </div>

      {/* ALASAN */}
      <h1  id="alasan" className="text-center md:pt-32 md:pb-11 sm:pt-20 md:text-5xl font-semibold sm:text-xl">
        Kenapa Harus Pilih Disappear, sih?
      </h1>
      <div className="flex justify-center md:gap-24 md:pb-44 sm:pb-24 sm:gap-10">
        <div className="md:w-64 sm:w-52">
          <img src={ecommerce} alt="E-commerce" />
          <h1 className="pt-7 pb-5 font-semibold md:text-2xl text-center sm:text-lg">
            Kualitas Produk Ramah Lingkungan
          </h1>
          <p className="text-justify sm:text-sm md:text-base">
            produk kami yang telah dikurasi dengan cermat pilihan produk
            berkelanjutan kami, masing-masing dirancang untuk mengurangi jejak
            karbon.
          </p>
        </div>
        <div className="md:w-72 pt-12 sm:w-52">
          <img src={truck} alt="Truck Image" />
          <h1 className="pt-20 pb-5 font-semibold md:text-2xl text-center sm:text-lg">
            Jaminan Barang Aman Sampai Tujuan
          </h1>
          <p className="text-justify sm:text-sm md:text-base">
            Kami menjamin seluruh barang yang kami kirim sampai dengan aman
            ditangan pelanggan dan menerima segala kritikkan yang bersifat
            membangun dari pelanggan.
          </p>
        </div>
        <div className="md:w-64 sm:w-52">
          <img src={listImage} alt="List Image" />
          <h1 className="pt-7 pb-5 font-semibold md:text-2xl text-center sm:text-lg">
            Berita & Edukasi Terkini Lingkungan
          </h1>
          <p className="text-justify sm:text-sm md:text-base">
            Tentunya pelanggan tidak hanya dapat membeli produk melainkan
            pengguna juga mendapatkan informasi-informasi terkait lingkungan
            saat ini.
          </p>
        </div>
      </div>

      {/* MANFAAT */}
      <div id="manfaat" className="flex justify-center px-32 bg-[#D9F2EA] py-44 sm:py-24">
        <img src={grid} alt="Product Image" className="pl-70 sm:hidden md:block" />
        <div>
          <h1 className="md:text-4xl font-semibold pb-14 sm:text-2xl">
            Manfaat Menggunakan Produk Ramah Lingkungan
          </h1>
          <div className="ps-24">
            <div className="flex gap-7 items-center pb-12">
              <FaCircleArrowRight />
              <p className="font-medium">Berkontribusi pada dunia konservasi</p>
            </div>
            <div className="flex gap-7 items-center  pb-12">
              <FaCircleArrowRight />
              <p className="font-medium">Mengurangi pencemaran lingkungan</p>
            </div>
            <div className="flex gap-7 items-center pb-12">
              <FaCircleArrowRight />
              <p className="font-medium">Rumah menjadi lebih sehat</p>
            </div>
            <div className="flex gap-7 items-center pb-12">
              <FaCircleArrowRight />
              <p className="font-medium">Mengurangi limbah sampah</p>
            </div>
            <div className="flex gap-7 items-center pb-12">
              <FaCircleArrowRight />
              <p className="font-medium">Aman bagi kesehatan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#D9F2EA]">
        <h1 className="text-center md:text-4xl font-semibold pb-7 sm:text-2xl">
          Mari membangun bumi hijau bersama kami
        </h1>
        <p className="text-center pb-20 sm:text-sm md:text-base">
          Warisan paling istimewa untuk generasi berikutnya adalah lingkungan
          yang lestari dan terjaga.
        </p>
        <img src={gogreen} alt="Go Green Logo" className="w-full pb-40" />

        {/* TESTIMONI */}
        <h1 id="testimoni" className="text-center md:text-5xl font-semibold pb-60 sm:text-2xl">
          Testimoni Pelanggan
        </h1>
      </div>

      <div className="bg-[#25745A] py-24 px-32">
        <section className="container mt-[-260px]">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="testimonial mySwiper"
          >
            {reviews.map((category) => (
              <div key={category.id} className="testi-content">
                {category.review.map((review) => (
                  <SwiperSlide key={review.id} className="slide">
                    <img src={review.user.photo_profile} alt="Avatar Image" className="image rounded-full" />
                    <p id="description">{review.description}</p>
                    <div className="star-icon flex" id="rating">
                      {Array.from({ length: review.rating }, (_, index) => (
                        <FaStar key={index} style={{ color: "#DC9B09" }} />
                      ))}
                    </div>
                    <div className="details">
                      <span className="font-semibold text-2xl">{review.user.name}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            ))}
          </Swiper>
        </section>

        <div className="flex gap-16 py-20 px-32 text-white text-center sm:justify-center">
          <div>
            <h1 className="pb-5 font-semibold md:text-6xl sm:text-4xl">{landingPageData.user_count}</h1>
            <p>Total pengguna aktif dalam penggunaan aplikasi </p>
          </div>
          <div>
            <h1 className="pb-5 font-semibold md:text-6xl sm:text-4xl">{landingPageData.gram_plastic}</h1>
            <p>Gram sampah dari pembelian produk ramah lingkungan</p>
          </div>
          <div>
            <h1 className="pb-5 font-semibold md:text-6xl sm:text-4xl">{landingPageData.order_count}</h1>
            <p>Total penjualan produk ramah lingkungan</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="bg-[#D9F2EA] px-48 pt-20 pb-40">
        <h1 className="text-center font-semibold md:text-5xl pt-28 pb-20 sm:text-2xl sm:pt-14">
          Masih Bingung? Yuk Lihat Ini
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Apa yang membuat produk ini ramah lingkungan?
            </AccordionTrigger>
            <AccordionContent>
              Produk ini ramah lingkungan karena kami menggunakan bahan baku
              yang memiliki jejak karbon rendah, mengadopsi proses produksi yang
              efisien energi, dan mengurangi penggunaan sumber daya alam.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Bagaimana produk ini membantu mengurangi jejak karbon?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              dolor veritatis minima necessitatibus dicta at est consectetur
              amet maxime harum, nemo unde totam pariatur, deleniti quam,
              quisquam voluptate numquam enim.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Apakah perusahaan ini melakukan evaluasi dampak lingkungan secara
              teratur?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quaerat iure quis quos aperiam ea dicta exercitationem
              consequuntur odit, dolorem officia hic minima deleniti sunt sint
              illum quisquam atque iste excepturi nisi! Eaque, debitis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Apakah produk yang dijual mengandung bahan kimia berbahaya?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptatum pariatur quia, magnam expedita doloribus! Quo vitae
              ipsa earum facilis eligendi tenetur dolore non culpa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Bagaimana produk ini membantu mengurangi jejak karbon?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quo odio omnis ipsa quia minus a exercitationem, ad
              architecto, ducimus libero adipisci perspiciatis nostrum quas
              deleniti aliquam tenetur.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* KONTAK */}
      <div id="kontak" className="flex bg-[#25745A] text-white py-24 px-16">
        <div className="self-center md:ps-12 sm:ps-0">
          <h1 className="font-semibold md:text-5xl pb-8 md:leading-snug sm:text-3xl">
            Dapatkan Akses Langsung Di Aplikasi Kami
          </h1>
          <p className="md:text-3xl pb-14 sm:text-xl">
            Yuk! tunggu apa lagi, Mari bangun kebiasaan hidup sehat untuk
            lingkungan yang lestari dan terjaga
          </p>
          <div className="flex">
            <a href="" id="playstoreButton">
              <img src={playstore} alt="" />
            </a>
            <a href="applestoreButton">
              <img src={applestore} alt="" />
            </a>
          </div>
        </div>
        <img src={pana} alt="Mobile Access Image" className="sm:hidden md:block" />
      </div>

      <Footer />
    </>
  );
}