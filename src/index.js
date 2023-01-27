import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Services from "./components/ServicesContainer.js"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Services/>
  </React.StrictMode>
);
