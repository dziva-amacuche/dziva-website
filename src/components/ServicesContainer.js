import React from "react";
import styled from "styled-components";
import Service from "./Service";

function ServicesContainer() {
  return (
    <Container>
      <h1>Nossos Servicos</h1>
      <div className="services-container">
        <Service />
      </div>
      <button>Veja todos nossos servicos</button>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;

  h1 {
    text-align: center;
    margin-top: 5rem;
    font-size: 32px;
    letter-spacing: 0.25rem;
  }

  .services-container {
    margin: 2.5rem 5rem -2.5rem 5rem;
    height: 60vh;
    display:flex;
    justify-content: center;
  }
  button {
    border: none;
    width: 12rem;
    padding: 0.8rem;
    border-radius: 6px;
    background-color: #dc241f;
    color: white;
    cursor: pointer;
    margin: 2rem 0 0 43%;
  }
  button:hover{
    background-color:#dc241f ;
  }
`;

export default ServicesContainer;
