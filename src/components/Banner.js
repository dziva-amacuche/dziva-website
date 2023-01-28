import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <Details>
      <h1>Soluções informáticas para a sua empresa</h1>
      <p>
        Mantenha seu negócio funcionando perfeitamente e deixe os especialistas
        em tecnologia da Dziva ajudá-lo, fornecendo as melhores soluções
        informáticas para o seu negócio
      </p>
      <div className="buttons">
        <button className="more-info">Saber mais</button>
        <button className="contact-button">Entre em contacto</button>
      </div>
    </Details>
  );
}

const Details = styled.div`
  top: 12rem;
  position: absolute;
  width: 30%;
  left: 10rem;

  h1 {
    color: #dc241f;
    width: 85%;
  }

  p {
    margin-top: 2rem;
    color: hsla(0, 0%, 0%, 1);
    font-size: 16px;
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    width: 70%;
    button {
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      border-radius: 3px;
      font-size: 15px;
    }

    .more-info{
      background-color: #636363;
      width: 6rem;
      color: white;
  
    }

    .contact-button{
      width: 11rem;
      background: none;
      border: 1px solid #dc241f;
      color: #dc241f;
    }
  }
`;

export default Banner;
