import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import LoginPage from "../pages/login/LoginPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
