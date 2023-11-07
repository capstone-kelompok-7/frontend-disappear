import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../pages/App";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);
  return <RouterProvider router={router} />;
}
