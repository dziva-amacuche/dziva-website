import React, { useState, useEffect } from "react";
import logo from "../assets/images/Dziva-logo.png";
import styled from "styled-components";
import "../App.css";
import Banner from "./Banner";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
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
          <li>
            <a src="#services">Nossos servicos</a>
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
  background-color: hsla(0, 0%, 0%, 0.2);
  width: 95.25%;
  position: sticky;
  top: 0rem;
  margin-bottom: -3.8rem;
  z-index: 2;
  align-items: center;
  padding: 0 2rem;
  border-bottom: none;

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
  }
  ul li {
    margin: 0 2rem;
    font-size: 16px;
    cursor: pointer;

    a {
      color: #dc241f;
      :hover {
        color: white;
      }
    }
  }
`;

export default Header;
