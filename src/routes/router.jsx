import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import App from "../pages/App";
import Dashboard from "../pages/dashboard/dashboard";
import LoginPage from "../pages/login/LoginPage";

import App from "../pages/indexNews";
import DetailNews from "../pages/Artikel/detailNews";
import CreateNews from "../pages/Artikel/createNews";
import EditNews from "@/pages/Artikel/editNews";
import IndexNews from "../pages/indexNews";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/artikel",
      element: <IndexNews />,
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
      path: "/detail-news",
      element: <DetailNews />,
    },
    {
      path: "/create-news",
      element: <CreateNews />,
    },
    {
      path: "/edit-news",
      element: <EditNews />,
    },
  ]);
  return <RouterProvider router={router} />;
}
