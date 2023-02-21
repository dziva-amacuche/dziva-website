import React, { useState, useEffect } from "react";
import logo from "../assets/images/Dziva-logo.png";
import styled from "styled-components";
import "../App.css";
import Banner from "./Banner";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [tiSubdropDownVisible, setTISubDropdownVisible] = useState(false);
  const [redeSubdropDownVisible, setRedeSubDropdownVisible] = useState(false);
  const [webSubDropdownVisible, setWebSubDropdownVisible] = useState(false);
  const [cctvSubDropdownVisible, setCCTVSubDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NAV className={isActive ? "active" : ""}>
        <a src="#">
          <img src={logo}></img>
        </a>
        <ul>
          <li>
            <a src="#">Home</a>
          </li>

          <li
            className="services"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <a>Nossos servicos</a>

            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li
                  onMouseEnter={() => setTISubDropdownVisible(true)}
                  onMouseLeave={() => setTISubDropdownVisible(false)}
                >
                  <a>Consultoria de TI</a>
                  {tiSubdropDownVisible && (
                    <ul className="dropdown-menu sub">
                      <li>
                        <a>Consultoria de TI</a>
                      </li>
                      <li>
                        <a>Outsourcing de TI</a>
                      </li>
                      <li>
                        <a>Suporte de TI</a>
                      </li>
                      <li>
                        <a>Seguranca da informacao</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  onMouseEnter={() => setRedeSubDropdownVisible(true)}
                  onMouseLeave={() => setRedeSubDropdownVisible(false)}
                >
                  <a href="#">Rede</a>
                  {redeSubdropDownVisible && (
                    <ul className="dropdown-menu sub">
                      <li>
                        <a>Cabeamento Estruturado</a>
                      </li>
                      <li>
                        <a>Projetos de Redes</a>
                      </li>
                      <li>
                        <a>Instalação Wi-fi</a>
                      </li>
                      <li>
                        <a>Cabeamento de Rede</a>
                      </li>
                      <li>
                        <a>Certificação de rede</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  onMouseEnter={() => setWebSubDropdownVisible(true)}
                  onMouseLeave={() => setWebSubDropdownVisible(false)}
                >
                  <a href="#">Web</a>
                  {webSubDropdownVisible && (
                    <ul className="dropdown-menu sub">
                      <li>
                        <a>Domínios </a>
                      </li>
                      <li>
                        <a>Hospedagem</a>
                      </li>
                      <li>
                        <a>Design de Websites e Aplicações</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  onMouseEnter={() => setCCTVSubDropdownVisible(true)}
                  onMouseLeave={() => setCCTVSubDropdownVisible(false)}
                >
                  <a href="#">CCTV</a>
                  {cctvSubDropdownVisible && (
                    <ul className="dropdown-menu sub">
                      <li>
                        <a>Projeto</a>
                      </li>
                      <li>
                        <a>Instalação</a>
                      </li>
                      <li>
                        <a>Manutenção</a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li>
            <a src="#">Sobre nos</a>
          </li>
          <li>
            <a src="#">Contacto</a>
          </li>
        </ul>
      </NAV>
      <div className="background-image"></div>
      <Banner />
    </>
  );
};

const NAV = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 3.8rem;
  background-color: none;
  width: 95.25%;
  position: sticky;
  top: 0rem;
  margin-bottom: -3.8rem;
  z-index: 2;
  align-items: center;
  padding: 0 2rem;
  border-bottom: none;
  transition: background-color 0.4s ease-in-out;

  &.active {
    background-color: grey;
  }
  img {
    width: 5rem;
    filter: contrast(180%);
    margin-left: 4rem;
  }

  ul {
    display: flex;
    flex-grow: 1;
    margin-left: 5rem;
    margin-top: 0.5rem;
    letter-spacing: 1.4px;

    .services {
      .dropdown-menu {
        position: absolute;
        top: 1.8rem;
        left: 15rem;
        width: 60%;
        padding: 1rem;
        list-style: none;
        display: inline;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 1;
        .sub {
          left: 7rem;
          top: 0rem;
        }

        li {
          margin: 0;
          font-size: 16px;

          a {
            color: white;
            display: block;
            padding: 0.5rem 1rem;
            transition: color 0.25s ease-in-out;

            :hover {
              color: #dc241f;
            }
          }
        }
      }
    }
  }
  ul li {
    margin: 0 2rem;
    font-size: 16px;
    cursor: pointer;

    a {
      color: white;
      transition: color 0.25s ease-in-out, font-weight 0.25s ease-in-out;

      :hover {
        color: #dc241f;
        font-weight: bolder;
      }
    }
  }
`;

export default Header;
