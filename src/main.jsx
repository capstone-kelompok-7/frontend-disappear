import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/indexNews";
import Index from "../src/pages/app";
import "../src/styles/index.css";
import Router from "./routes/router";
import { SidebarProvider } from "./utils/states/sidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>
);