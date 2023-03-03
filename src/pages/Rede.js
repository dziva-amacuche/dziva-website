import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

import "../App.css";

function Rede() {
  return (
    <NETWORK>
      <Navbar />
      <div className="background-image rede"></div>
      <div className="banner-info">
        <h1>Rede</h1>
        <ul>
          <li>
            <a>Cabeamento Estruturado </a>
          </li>
          <li>
            <a>Projetos de Redes </a>
          </li>
          <li>
            <a>Instalação Wi-fi </a>
          </li>
          <li>
            <a>Cabeamento de Rede </a>
          </li>
          <li>
            <a>Certificação de rede </a>
          </li>
        </ul>
      </div>
      <div className="option"></div>
      <Footer />
    </NETWORK>
  );
}

const NETWORK = styled.div``;

export default Rede;
