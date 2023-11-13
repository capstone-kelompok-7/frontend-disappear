import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
