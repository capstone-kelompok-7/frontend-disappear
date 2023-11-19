import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import App from "../pages/App";
import IndexCategory from "../pages/category/indexCategory";
import Dashboard from "../pages/dashboard/dashboard";
import LoginPage from "../pages/login/LoginPage";
import Pelanggan from "../pages/pelanggan/pelanggan";
import PelangganDetail from "../pages/pelanggan/pelangganDetail";
import IndexChallenge from "@/pages/challenge/indexChallenge";
import CreateEditChallenge from "@/pages/challenge/createEditChallenge/createEditChallenge";
import DetailChallenge from "@/pages/challenge/detailChallenge/detailChallenge";
import ParticipantChallange from "@/pages/challenge/participantChallenge/participantChallenge";
import EditParticipantChallenge from "@/pages/challenge/editParticipantChallenge/editParticipantChallenge";
import IndexProducts from "@/pages/products/indexProducts";
import CreateEditProducts from "@/pages/products/createEditProducts/createEditProducts";
import DetailProducts from "@/pages/products/detailProducts/detailProducts";
import Review from "../pages/review/review";
import VoucherApp from "../pages/voucherPage/voucherIndex";
import CreateVoucher from "@/pages/voucherPage/createVoucher";
import EditVoucher from "../pages/voucherPage/editVoucher";

import DetailNews from "../pages/Artikel/detailNews";
import CreateNews from "../pages/Artikel/createNews";
import EditNews from "@/pages/Artikel/editNews";
import IndexNews from "../pages/Artikel/indexNews";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/category",
      element: <IndexCategory />,
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
      path: "/pelanggandetail",
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
      path: "/tantangan/edit-tantangan",
      element: <CreateEditChallenge />,
    },
    {
      path: "/tantangan/detail-tantangan",
      element: <DetailChallenge />,
    },
    {
      path: "/peserta-tantangan",
      element: <ParticipantChallange />,
    },
    {
      path: "/peserta-tantangan/edit-peserta-tantangan",
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
      path: "/produk/detail-produk",
      element: <DetailProducts />,
    },
    {
      path: "/star",
      element: <Review />,
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
      path: "/create-news",
      element: <CreateNews />,
    },
    {
      path: "/edit-news",
      element: <EditNews />,
    },
    {
      path: "/detail-news",
      element: <DetailNews />,
    },
    {
      path: "/artikel",
      element: <IndexNews />,
    },
  ]);
  return <RouterProvider router={router} />;
}
