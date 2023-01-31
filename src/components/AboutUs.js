import React from "react";
import styled from "styled-components";
import HappyClients from "../assets/images/happy-clients.jpg";

function AboutUs() {
  return (
    <About>
      <h1>Sobre Nós</h1>
      <main>
        <div className="text-container">
          <div className="about-text">
            <p>
              DZIVA é uma empresa que opera na área de Tecnologias de Informação
              e comunicação (TICs), com objectivo de contribuir para a
              eficiência na gestão de empresas.
              <br /> Nosso trabalho consiste em oferecer soluções completas em
              TICs, que permitam eliminar custos e automatizar tarefas do
              dia-a-dia contribuindo, assim, para um aumento real da
              produtividade dos nossos clientes
            </p>

            <div className="more-container">
              <div className="mission">
                <h1>Nossa Missão</h1>
                <p>
                  Oferecer soluções completas de tecnologia de informação que
                  permitam automatizar tarefas do dia-a-dia das empresas,
                  garantindo assim um aumento real da produtividade dos nossos
                  clientes
                </p>
              </div>
              <div className="mission">
                <h1>Nossa Visão</h1>
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
      </main>
    </About>
  );
}

const About = styled.section`
  height: 100vh;
  background-color: hsla(2, 75%, 49%, 0.47);
  h1 {
    text-align: center;
    font-size: 32px;
    margin-top: 4rem;
  }
  main {
    overflow: auto;
    position: relative;
    margin: 0 7rem;
    display: flex;

    .text-container {
      width: 50%;

      .about-text {
        margin-top: 4rem;
        p {
          text-align: justify;
          margin: 1rem 0 0 0;
        }

        .more-container {
          display: flex;
          margin-top: 4rem;
          justify-content: space-between;
          .mission {
            h1 {
              font-size: 18px;
              margin: 0;
              text-align: left;
            }
            p {
              width: 90%;
              font-size: 16px;
            }
          }
        }
      }
    }

    .image-container {
      img{
        width: 30rem;
      }
    }
  }
`;

export default AboutUs;
