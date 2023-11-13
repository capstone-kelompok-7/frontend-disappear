import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import App from "../pages/App";
import Dashboard from "../pages/dashboard/dashboard";
import LoginPage from "../pages/login/LoginPage";

import IndexChallenge from "@/pages/challenge/indexChallenge";
import CreateChallenge from "@/pages/challenge/createChallenge/createChallenge";
import DetailChalenge from "@/pages/challenge/detailChallenge/detailChallenge";
import ParticipantChallange from "@/pages/challenge/participantChallenge/participantChallenge";
import EditParticipantChallenge from "@/pages/challenge/editParticipantChallenge/editParticipantChallenge";

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
      path: "/buat-tantangan",
      element: <CreateChallenge />,
    },
    {
      path: "/detail-tantangan",
      element: <DetailChalenge />,
    },
    {
      path: "/peserta-tantangan",
      element: <ParticipantChallange />,
    },
    {
      path: "/edit-peserta-tantangan",
      element: <EditParticipantChallenge />,
    },
  ]);
  return <RouterProvider router={router} />;
}
