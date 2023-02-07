import React from "react";
import styled from "styled-components";
import HappyClients from "../assets/images/happy-clients.jpg";

function AboutUs() {
  return (
    <About>
      <main>
        <h1>Sobre Nós</h1>
        <div className="about-container">
          <div className="text-container">
            <div className="about-text">
              <p>
                DZIVA é uma empresa que opera na área de Tecnologias de
                Informação e comunicação (TICs), com objectivo de contribuir
                para a eficiência na gestão de empresas.
                <br /> Nosso trabalho consiste em oferecer soluções completas em
                TICs, que permitam eliminar custos e automatizar tarefas do
                dia-a-dia contribuindo, assim, para um aumento real da
                produtividade dos nossos clientes
              </p>

              <div className="more-container">
                <div className="mission">
                  <h2>Nossa Missão</h2>
                  <p>
                    Oferecer soluções completas de tecnologia de informação que
                    permitam automatizar tarefas do dia-a-dia das empresas,
                    garantindo assim um aumento real da produtividade dos nossos
                    clientes
                  </p>
                </div>
                <div className="mission">
                  <h2>Nossa Visão</h2>
                  <p>
                    Tornarmo-nos uma referência na Província de Maputo e em
                    Moçambique através na prestação de serviços na área de
                    Informática e Tecnologias de informação de comunicação.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src={HappyClients}></img>
          </div>
        </div>
      </main>
    </About>
  );
}

const About = styled.section`
  height: 100vh;
  background-color: #f8f8f8;
  overflow: auto;
  width: 100%;
  main {
    margin: 4rem;
    text-align: justify;
    h1 {
      text-align: center;
    }

    .about-container {
      display: flex;
      width: 100%;
      .text-container {
        display: block;
        width: 50%;
        margin: 4rem;

        .more-container {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 4rem;

          .mission {
            width: 45%;
          }
        }
      }
      .image-container {
        width: 50%;
        text-align: center;
        img {
          width: 90%;
          display: block;
          margin: 4rem auto;
        }
      }
    }
  }
`;

export default AboutUs;
