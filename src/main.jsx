import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import Router from "./routes/router";
import { SidebarProvider } from "./utils/states/sidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
