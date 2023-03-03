import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "../App.css";

function Web() {
  return (
    <WEBDEV>
      <Navbar />
      <div className="background-image web"></div>
      <div className="coming-soon">
        <h1>DISPONIVEL BREVEMENTE</h1>
      </div>
      <div className="banner-info">
        <h1>Web</h1>
        <ul>
          <li>
            <a>Domínios </a>
          </li>
          <li>
            <a>Hospedagem </a>
          </li>
          <li>
            <a>Design de Websites e Aplicações</a>
          </li>
        </ul>
      </div>

      <Footer />
    </WEBDEV>
  );
}

const WEBDEV = styled.div``;

export default Web;
