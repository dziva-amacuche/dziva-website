import React from "react";
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import Services from "../components/ServicesContainer.js";
import AboutUs from "../components/AboutUs.js";
import WhyUs from "../components/WhyUs.js";
import Partners from "../components/Partners.js";
import Footer from "../components/Footer.js";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <WhyUs />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home;
