import {Link} from "react-router-dom";
import styled from 'styled-components';
import cheeseMoon from '../assets/cheeseMoon.PNG';


const Heading = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin-bottom: 5%;
  width: 80%;

  .logo{
    text-decoration: none;
    color: #EDB34D;
  }
`

const CheeseMoon = styled.div`
  max-width: 30%;
  max-height: 20vh;
  display: flex;
  justify-content: left;
  img{
    height: 100%;
  }

  @media (max-width: 450px) {
    img{
      max-height: 10vh;
    }
  }
`

const LogoWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  width: 95%;
  font-size: 8.5vw;
  text-shadow: -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000;
  @media (max-width: 450px) {
    justify-content: center;
    .logo{
      font-size: 2%.5rem;
    }
  }
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 10%;
  
  .nav {
    margin-left: 5%;
    text-decoration: none;
    font-size: 4.5vw;
    font-weight: bold;
    color: #EDB34D;
    transition: .3s;
    :hover{
      color: black;
      font-weight: bold;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    .nav{
      font-size: 1.5rem;
    }
  }
`

function Header(){
    return(
        <header>
            <CheeseMoon>
              <img src={cheeseMoon} alt="cheesy-moon" />
            </CheeseMoon>
            <Heading>
                <LogoWrap>
                    <Link className='logo' to='/'>Midnight Snax</Link>
                </LogoWrap>
                <NavBar>
                    <Link className="nav" to='/'>Home</Link>
                    <Link className="nav" to='/Menu'>Menu</Link>
                    <Link className="nav" to='/Contact'>Contact</Link>
                </NavBar>
            </Heading>
        </header>
        
    )
}

export default Header