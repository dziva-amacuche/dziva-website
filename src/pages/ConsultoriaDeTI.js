import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import "../App.css";

function ConsultoriaDeTI() {
  return (
    <CONSULTING>
      <Navbar />
      <div className="background-image consultoria"></div>
      <div className="banner-info">
        <h1>Consultoria de TI</h1>
        <ul>
          <li>Outsourcing de TI</li>
          <li>Suporte de TI</li>
          <li>Segurança da informação </li>
        </ul>
        <p>
          Use a TI para planejamento, desenvolvimento e continuidade da produção
          administrativa empreserial.
        </p>
        <div className="buttons">
          <button className="more-info">Saber mais</button>
        </div>
      </div>
    </CONSULTING>
  );
}

const CONSULTING = styled.div``;
export default ConsultoriaDeTI;
