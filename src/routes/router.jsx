/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

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
import App from "../pages/App";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
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
  ]);
  return <RouterProvider router={router} />;
}
