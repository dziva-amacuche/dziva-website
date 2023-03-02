import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "../App.css";
import Outsourcing from "../assets/images/outsourcing-ds.png";

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
      <div className="option">
        <div className="option-header">
          <div className="content-container">
            <div className="option-text">
              <h2>Outsourcing de TI</h2>
              <p>
                A vantagem do suporte realizado com o outsourcing de TI vem da
                praticidade e facilidade da gestão do ambiente de TI estar
                totalmente centralizado em uma única empresa, nós somos
                especialistas em tecnologia da informação para negócios e iremos
                manter sua empresa operacional full time. Veja mais algumas
                vantagens técnicas e gerenciais ao contratar uma empresa de
                tecnologia da informação para cuidar da sua TI.
              </p>
            </div>
            <img src={Outsourcing}></img>
          </div>
        </div>
        <div className="rename">
          <h4>
            Com a terceirização de TI, sua empresa conta com profissionais
            sempre, atualizados, prontos para agir em sua empresa.
          </h4>
          <div className="rename-box">
            <img src={Outsourcing}></img>
            <ul>
              <li>
                Profissionais qualificados para cada tecnologia da sua empresa
              </li>
              <li>
                Treinamento constantemente aplicado para novas tecnologias
              </li>
              <li>
                Cursos e certificações aplicadas para verificação de aptidão
                técnica
              </li>
              <li>Investimento em conhecimento e estudos</li>
              <li>Investimento em novas tecnologias para treinamento</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </CONSULTING>
  );
}

const CONSULTING = styled.div``;
export default ConsultoriaDeTI;
