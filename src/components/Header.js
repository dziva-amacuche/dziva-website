import logo from '../assets/images/Dziva-logo.png';
import styled from 'styled-components';
import '../App.css';

const Header = () =>{
    return (
        <NAV>
            <img src={logo}></img>
            <ul>
                <li><a src="#">Home</a></li>
                <li><a src="#">Nossos servicos</a></li>
                <li><a src="#">Sobre nos</a></li>
                <li><a src="#">Contacto</a></li>
            </ul>
        </NAV>
    )
}

const NAV = styled.nav`
display: flex;
justify-content: space-between;
margin: 1rem 1.5rem;
align-items: center;
padding: 0 2rem;
img{
    width: 5rem;
}

ul{
    display: flex;
}
ul li{
    margin: 0 1rem;
    font-size: 16px;
}
`

export default Header