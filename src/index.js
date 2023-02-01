import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Services from "./components/ServicesContainer.js"
import AboutUs from "./components/AboutUs.js";
import WhyUs from "./components/WhyUs.js";
import Partners from "./components/Partners.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Services/>
    <AboutUs/>
    <WhyUs/>
    <Partners/>
  </React.StrictMode>
);
