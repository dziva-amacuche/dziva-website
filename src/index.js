import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Banner from "./components/Banner.js";
import Services from "./components/ServicesContainer.js";
import AboutUs from "./components/AboutUs.js";
import WhyUs from "./components/WhyUs.js";
import Partners from "./components/Partners.js";
import Footer from "./components/Footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Banner/>
    <AboutUs />
    <Services />
    <WhyUs />
    <Partners />
    <Footer/>
  </React.StrictMode>
);
