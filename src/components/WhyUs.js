import React from "react";
import styled from "styled-components";
import stock from "../assets/icons/stock.svg";
import time from "../assets/icons/24hour.svg";
import list from "../assets/icons/list.svg";
import delivery from "../assets/icons/delivery.svg";

function WhyUs() {
  return (
    <More>
      <h1>O nosso diferencial</h1>
      <div className="main-container">
        <div className="value-container">
          <img src={stock}></img>
          <p>
            Disponibilizamos equipamento no momento em que este se faz
            necessário, pois mantemos os nossos artigos mais solicitados em
          </p>
        </div>
        <div className="value-container">
          <img src={time}></img>
          <p>
            Fornecemos suporte pelo serviço de acompanhamento 24/7, presencial
            ou remoto para garantir a eficiência do trabalho a todo momento.
          </p>
        </div>
        <div className="value-container">
          <img src={list}></img>
          <p>
            Fazemos o levantamento preventivo dos equipamentos ou materiais a
            obter como forma de garantir a aquisição de material de qualidade e
            que seja adequado ao cliente e às suas necessidades.
          </p>
        </div>
        <div className="value-container">
          <img src={delivery}></img>
          <p>Garantimos a entrega de materiais e equipamentos à domicílio </p>
        </div>
      </div>
    </More>
  );
}

const More = styled.div`
  height: 100vh;
  overflow: auto;
  margin: 0 8rem;

  h1 {
    text-align: center;
    font-size: 32px;
    margin-top: 4rem;
  }
  .main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    margin-top:5rem;
    .value-container {
      width: 30rem;
      img {
        width: 2rem;
        display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
      }
      p{
        width: 20rem;
        text-align: justify;
        display: block;
  margin-left: auto;
  margin-right: auto;
      }
    }
  }
`;

export default WhyUs;
