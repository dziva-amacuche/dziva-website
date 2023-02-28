


import React from "react";
import styled from "styled-components";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";

function Footer() {
  return (
    <RODAPE>
      <div className="rodape-container">
          <div className="rodape endereco">
            <h3>ENDEREÇO</h3>
            <p>Av. Romão Fernandes Farinha, N° 376- Maputo= - Moçambique</p>
          </div>

          <div className="rodape contactos">
            <h3>CONTACTOS</h3>
            <p>Email: info@dziva.co.mz</p>
            <p>Telefone: +258 873080400</p>
          </div>

          <div className="rodape socials">
            <h3>SEGUE-NOS</h3>
            <img src={instagram}></img>
            <img src={facebook}></img>
            <img src={linkedin}></img>
          </div>

          <div className="newsletter-container">
            <h3>NEWSLETTER</h3>
            <form>
              <input placeholder="Endereco de email"></input>
              <input placeholder="Primeiro nome"></input>
              <input placeholder="Apelido"></input>
              <input placeholder="Numero de celular"></input>
            </form>
          </div>
        </div>
    </RODAPE>
  );
}

const RODAPE = styled.div`
background-color: grey;
height: 30vh;
overflow: hidden;
width: 100%;
.rodape-container
{  
  margin: 2rem 4rem;
  display: flex;
  width:100%;

  .rodape{
    width: 20%;
  }
  .socials {
    display: flex;
    img {
      width: 2rem;
      cursor: pointer;
    }
  }
  
  .newsletter-container{
    form{
    display: flex;
    flex-direction: column}
  }}
`;

export default Footer;
