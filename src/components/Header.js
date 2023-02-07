import logo from "../assets/images/Dziva-logo.png";
import styled from "styled-components";
import "../App.css";
import Banner from "./Banner";

const Header = () => {
  return (
    <>
      <div className="background-image"></div>
      <NAV>
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
      <Banner />
    </>
  );
};

const NAV = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 3.8rem;
  background-color: hsla(0, 0%, 0%, 0.77);
  width: 95.25%;
  position: absolute;
  top: 0rem;
  bottom: 0;
  z-index: 2;
  align-items: center;
  padding: 0 2rem;
  border-bottom: none;
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
      :hover{
      color: white;
    }
    }
  }

`;

export default Header;
