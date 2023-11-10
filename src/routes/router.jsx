import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../pages/indexNews";
import DetailNews from "../pages/Artikel/detailNews";
import CreateNews from "../pages/Artikel/createNews";
import EditNews from "@/pages/Artikel/editNews";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
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
