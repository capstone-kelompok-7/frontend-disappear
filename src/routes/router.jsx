import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import App from "../pages/App";
import Dashboard from "../pages/dashboard/dashboard";
import LoginPage from "../pages/login/LoginPage";

import IndexChallenge from "@/pages/challenge/indexChallenge";
import CreateEditChallenge from "@/pages/challenge/createEditChallenge/createEditChallenge";
import DetailChalenge from "@/pages/challenge/detailChallenge/detailChallenge";
import ParticipantChallange from "@/pages/challenge/participantChallenge/participantChallenge";
import EditParticipantChallenge from "@/pages/challenge/editParticipantChallenge/editParticipantChallenge";
import IndexProducts from "@/pages/products/indexProducts";
import CreateEditProducts from "@/pages/products/createEditProducts/createEditProducts";
import DetailProducts from "@/pages/products/detailProducts/detailProducts";

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
      element: <DetailChalenge />,
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
  ]);
  return <RouterProvider router={router} />;
}
