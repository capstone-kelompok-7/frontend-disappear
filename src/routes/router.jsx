/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import App from "../pages/App";
import Dashboard from "../pages/dashboard/dashboard";
import LoginPage from "../pages/login/LoginPage";


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
  ]);
  return <RouterProvider router={router} />;
}
