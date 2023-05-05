import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <AppRoutes />
  </Router>
);
