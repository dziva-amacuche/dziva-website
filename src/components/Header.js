import React, { useState, useEffect } from "react";
import logo from "../assets/images/Dziva-logo.png";
import styled from "styled-components";
import "../App.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [tiSubdropDownVisible, setTISubDropdownVisible] = useState(false);
  const [redeSubdropDownVisible, setRedeSubDropdownVisible] = useState(false);
  const [webSubDropdownVisible, setWebSubDropdownVisible] = useState(false);
  const [cctvSubDropdownVisible, setCCTVSubDropdownVisible] = useState(false);

  //PHC

  const [phcSubDropDownVisible, setPHCSubDropdownVisible] = useState(false);
  const [phcSTSubdropDownVisible, setPHCSTSubDropdownVisible] = useState(false);
  const [phcSSSubdropDownVisible, setPHCSSSubDropdownVisible] = useState(false);

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
            <a>Serviços</a>

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
                        <a>Segurança da informacao</a>
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

          <li
            className="services phc"
            onMouseEnter={() => setPHCSubDropdownVisible(true)}
            onMouseLeave={() => setPHCSubDropdownVisible(false)}
          >
            <a>Soluções PHC</a>
            {phcSubDropDownVisible && (
              <ul className="dropdown-menu">
                <li
                  onMouseEnter={() => setPHCSTSubDropdownVisible(true)}
                  onMouseLeave={() => setPHCSTSubDropdownVisible(false)}
                >
                  <a>Soluções Transversais</a>
                  {phcSTSubdropDownVisible && (
                    <ul className="dropdown-menu sub">
                      <li>
                        <a>Gestão e ERP</a>
                      </li>
                      <li>
                        <a>Financeira</a>
                      </li>
                      <li>
                        <a>CRM</a>
                      </li>
                      <li>
                        <a>Vencimentos e Segurança no Trabalho </a>
                      </li>
                      <li>
                        <a>Gestão de Capital Humano </a>
                      </li>

                      <li>
                        <a>Equipas e Projetos </a>
                      </li>
                      <li>
                        <a>Frota </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  onMouseEnter={() => setPHCSSSubDropdownVisible(true)}
                  onMouseLeave={() => setPHCSSSubDropdownVisible(false)}
                >
                  <a>Soluções Setoriais</a>
                  {phcSSSubdropDownVisible && (
                    <ul className="dropdown-menu sub">
                      <li>
                        <a>Indústria e Produção </a>
                      </li>
                      <li>
                        <a>Logística e Distribuição </a>
                      </li>
                      <li>
                        <a>Restauração </a>
                      </li>
                      <li>
                        <a>Retalho </a>
                      </li>
                      <li>
                        <a>Clínicas </a>
                      </li>

                      <li>
                        <a>Construção Civil </a>
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
  transition: background-color 0.45s ease-in-out;

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
        top: 2.1rem;
        left: 17.8rem;
        width: 15%;
        padding: 1rem;
        list-style: none;
        display: inline;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 1;
        background-color: grey;
        .sub {
          left: 7rem;
          top: 0rem;
          width: 80%;
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
    .phc {
              .dropdown-menu {
              left: 30rem;}
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
