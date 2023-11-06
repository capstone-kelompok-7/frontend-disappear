import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/pages/app";
import "../src/styles/index.css";
import Router from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
