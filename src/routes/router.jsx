import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../pages/indexNews";
import DetailNews from "../pages/detailNews/detailNews";
import CreateNews from "../pages/createNews/createNews";

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
      element: <CreateNews/>,
    },
  ]);
  return <RouterProvider router={router} />;
}
