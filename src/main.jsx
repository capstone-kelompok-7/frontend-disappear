import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import Router from "./routes/router";
import { SidebarProvider } from "./utils/states/sidebarContext";
import { TokenProvider } from "@/utils/context/TokenContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <SidebarProvider>
        <Router />
      </SidebarProvider>
    </TokenProvider>
  </React.StrictMode>
);
