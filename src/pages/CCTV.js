import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "../App.css";

function CCTV() {
  return (
    <VIGILANCE>
      <Navbar />
      <div className="background-image cctv"></div>
      <div className="coming-soon">
        <h1>DISPONIVEL BREVEMENTE</h1>
      </div>
      <div className="banner-info">
        <h1>CCTV</h1>
        <ul>
          <li>
            <a>Projeto </a>
          </li>
          <li>
            <a>Instalação  </a>
          </li>
          <li>
            <a>Manutenção</a>
          </li>
        </ul>
      </div>

      <Footer />
    </VIGILANCE>
  )
}

const VIGILANCE = styled.div`

`

export default CCTV