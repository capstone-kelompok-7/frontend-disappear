import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import Dashboard from "../pages/dashboard/dashboard";
import LoginPage from "../pages/login/LoginPage";

import App from "@/pages/indexChallenge";
import CreateChallenge from "@/pages/createChallenge/createChallenge";
import DetailChalenge from "@/pages/detailChallenge/detailChallenge";
import ParticipantChallange from "@/pages/participantChallenge";
import EditParticipantChallenge from "@/pages/editParticipantChallenge/editParticipantChallenge";

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
      path: "/create-challenge",
      element: <CreateChallenge />,
    },
    {
      path: "/detail-challenge",
      element: <DetailChalenge />,
    },
    {
      path: "/participant-challenge",
      element: <ParticipantChallange />,
    },
    {
      path: "/edit-participant-challenge",
      element: <EditParticipantChallenge />,
    },
  ]);
  return <RouterProvider router={router} />;
}
