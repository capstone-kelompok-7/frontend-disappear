import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import App from "../pages/App";
import Dashboard from "../pages/dashboard/dashboard";
import LoginPage from "../pages/login/LoginPage";

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
      element: <CreateNews/>,
    },
  ]);
  return <RouterProvider router={router} />;
}
