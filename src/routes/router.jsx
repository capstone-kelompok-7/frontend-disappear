import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import App from "../pages/App";
import Dashboard from "../pages/dashboard/dashboard";
import LoginPage from "../pages/login/LoginPage";
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
      path: "/produk",
      element: <IndexProducts />,
    },
    {
      path: "/buat-Produk",
      element: <CreateEditProducts />,
    },
    {
      path: "/edit-produk",
      element: <CreateEditProducts />,
    },
    {
      path: "/detail-produk",
      element: <DetailProducts />,
    },
  ]);
  return <RouterProvider router={router} />;
}
