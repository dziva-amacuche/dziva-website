import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "../App.css";
import Partners from "../components/Partners.js";
import Outsourcing from "../components/Outsourcing.js";
import SuporteDeTI from "../components/SuporteDeTI.js";

function ConsultoriaDeTI() {
  return (
    <CONSULTING>
      <Navbar />
      <div className="background-image consultoria"></div>
      <div className="banner-info">
        <h1>Consultoria de TI</h1>
        <ul>
          <li>
            <a>Outsourcing de TI</a>
          </li>
          <li>
            <a>Suporte de TI</a>
          </li>
          <li>
            <a>Segurança da informação </a>
          </li>
        </ul>
        <p>
          Use a TI para planejamento, desenvolvimento e continuidade da produção
          administrativa empreserial.
        </p>
        <div className="buttons">
          <button className="more-info">Saber mais</button>
        </div>
      </div>
      {/* <Outsourcing/> */}
      <SuporteDeTI/>
      <Partners/>
      <Footer />
    </CONSULTING>
  );
}

const CONSULTING = styled.div``;
export default ConsultoriaDeTI;
