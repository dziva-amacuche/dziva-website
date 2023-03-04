import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/images/Dziva-logo.png";
import styled from "styled-components";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  //PHC

  const [phcSubDropDownVisible, setPHCSubDropdownVisible] = useState(false);

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
            <div className="dropdown-menu">
              <ul>
                <h3>Consultoria de TI</h3>
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
              <ul>
                <h3>Rede</h3>
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
              <ul>
                <h3>WEB</h3>
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
              <ul>
                <h3>CCTV</h3>
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
            </div>
          )}
        </li>

        <li
          className="services phc"
          onMouseEnter={() => setPHCSubDropdownVisible(true)}
          onMouseLeave={() => setPHCSubDropdownVisible(false)}
        >
          <a>Soluções PHC</a>
          {phcSubDropDownVisible && <div></div>}
        </li>

        <li>
          <a src="#">Sobre nos</a>
        </li>
        <li>
          <a src="#">Contacto</a>
        </li>
      </ul>
    </NAV>
  );
}

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
      position: relative;
      display: inline;
      .dropdown-menu {
        position: absolute;
        top: 2.25rem;
        left: -19rem;
        width: 70rem;
        height: 40rem;
        padding: 1rem;
        list-style: none;
        display: flex;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 1;
        background-color: grey;

          ul{
            display: flex;
            flex-direction: column;
          }
        

        li {
          margin: 0;
          font-size: 16px;

          a {
            color: white;
            display: block;
            padding: 0.5rem 1r
            :hover {
              color: #dc241f;
            }em;
            transition: color 0.25s ease-in-out;

          }
        }
      }
    }
    .phc {
      .dropdown-menu {
        left: -6rem;
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

export default Navbar;
