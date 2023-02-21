import React, { useState, useEffect } from "react";
import logo from "../assets/images/Dziva-logo.png";
import styled from "styled-components";
import "../App.css";
import Banner from "./Banner";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

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
            <a href="#">Nossos servicos</a>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li
                  onMouseEnter={() => setDropdownVisible(false)}
                  onMouseLeave={() => setDropdownVisible(false)}
                >
                  <a href="#">Consultoria de TI</a>
                  {dropdownVisible && (
                    <ul  className="dropdown-menu">
                    <li><a>Consultoria de TI</a></li>
                    <li><a>Outsourcing de TI</a></li>
                    <li><a>Suporte de TI</a></li>
                    <li><a>Seguranca da informacao</a></li>
                    </ul>

                  )}
                </li>
                <li>
                  <a href="#">Rede</a>
                </li>
                <li>
                  <a href="#">Web</a>
                </li>
                <li>
                  <a href="#">CCTV</a>
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
        top: 1rem;
        left: 15rem;
        width: 20%;
        padding: 1rem;
        list-style: none;
        display: inline;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 1;

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
