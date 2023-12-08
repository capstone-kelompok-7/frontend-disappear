import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import EditParticipantChallenge from "@/pages/challenge/editParticipantChallenge/editParticipantChallenge";
import ParticipantChallange from "@/pages/challenge/participantChallenge/participantChallenge";
import CreateEditChallenge from "@/pages/challenge/createEditChallenge/createEditChallenge";
import DetailChallenge from "@/pages/challenge/detailChallenge/detailChallenge";
import IndexChallenge from "@/pages/challenge/indexChallenge";

import CreateEditProducts from "@/pages/products/createEditProducts/createEditProducts";
import DetailProducts from "@/pages/products/detailProducts/detailProducts";
import IndexProducts from "@/pages/products/indexProducts";

import PelangganDetail from "@/pages/pelanggan/pelangganDetail";
import Pelanggan from "@/pages/pelanggan/pelanggan";

import CreateVoucher from "@/pages/voucherPage/createVoucher";
import VoucherApp from "@/pages/voucherPage/voucherIndex";
import EditVoucher from "@/pages/voucherPage/editVoucher";

import ConfirmPayment from "@/pages/payment/confirmPayment";
import IndexPayment from "@/pages/payment/indexPayment";

import DetailOrder from "@/pages/order/detailOrder";
import Pesanan from "@/pages/order/order";

import DetailNews from "@/pages/Artikel/detailNews";
import CreateEditNews from "@/pages/Artikel/createEditNews";
import IndexNews from "@/pages/Artikel/indexNews";

import DetailUlasan from "@/pages/ulasan/detailUlasan/detailUlasan";
import IndexUlasan from "@/pages/ulasan/indexUlasan";

import IndexCategory from "@/pages/category/indexCategory";
import Landingpage from "@/pages/landingpage/landingpage";
import Dashboard from "@/pages/dashboard/dashboard";
import LoginPage from "@/pages/login/LoginPage";
import Carousel from "@/pages/carousel/index";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      path: "/category",
      element: <IndexCategory />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/pelanggan",
      element: <Pelanggan />,
    },
    {
      path: "/pelanggan/pelanggandetail",
      element: <PelangganDetail />,
    },
    {
      path: "/tantangan",
      element: <IndexChallenge />,
    },
    {
      path: "/tantangan/buat-tantangan",
      element: <CreateEditChallenge />,
    },
    {
      path: "/tantangan/:id/edit-tantangan",
      element: <CreateEditChallenge />,
    },
    {
      path: "/tantangan/:id",
      element: <DetailChallenge />,
    },
    {
      path: "/peserta-tantangan",
      element: <ParticipantChallange />,
    },
    {
      path: "/peserta-tantangan/:id/edit-peserta-tantangan",
      element: <EditParticipantChallenge />,
    },
    {
      path: "/produk",
      element: <IndexProducts />,
    },
    {
      path: "/produk/buat-Produk",
      element: <CreateEditProducts />,
    },
    {
      path: "/produk/edit-produk",
      element: <CreateEditProducts />,
    },
    {
      path: "/produk/:id",
      element: <DetailProducts />,
    },
    {
      path: "/kupon",
      element: <VoucherApp />,
    },
    {
      path: "/kupon/buat-kupon",
      element: <CreateVoucher />,
    },
    {
      path: "/kupon/edit-kupon",
      element: <EditVoucher />,
    },
    {
      path: "/artikel/create-news",
      element: <CreateEditNews />,
    },
    {
      path: "/artikel/edit-news/:id",
      element: <CreateEditNews />,
    },
    {
      path: "/artikel/detail-news/:id",
      element: <DetailNews />,
    },
    {
      path: "/artikel",
      element: <IndexNews />,
    },
    {
      path: "/pesanan",
      element: <Pesanan />,
    },
    {
      path: "/pesanan/detail-pesanan",
      element: <DetailOrder />,
    },
    {
      path: "/pembayaran",
      element: <IndexPayment />,
    },
    {
      path: "/pembayaran/:id",
      element: <ConfirmPayment />,
    },
    {
      path: "/ulasan",
      element: <IndexUlasan />,
    },
    {
      path: "/ulasan/:id",
      element: <DetailUlasan />,
    },
    {
      path: "/carousel",
      element: <Carousel />,
    },
  ]);
  return <RouterProvider router={router} />;
}
