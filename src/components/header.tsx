import {Link} from "react-router-dom";
import styled from 'styled-components';
import cheeseMoon from '../assets/cheeseMoon.PNG';


const Heading = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin-bottom: 5%;
  width: 85%;

  .logo{
    text-decoration: none;
    color: #EDB34D;
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

  .logoWrap{
    display: flex;
    justify-content: space-evenly;
  }
  `

const CheeseMoon = styled.div`
  width: 20%;
  max-height: 20vh;
  display: flex;
  justify-content: left;
  #cheesy-moon{
    height: 20vw;
    object-fit: cover;
    margin-right: 5vw;
  }

  @media (max-width: 450px) {
    
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
            
            <Heading>
                <LogoWrap>
                    <div className='logoWrap'>
                      <CheeseMoon>
                        <img src={cheeseMoon} id='cheesy-moon' alt="cheesy-moon" />
                      </CheeseMoon>
                      <Link className='logo' to='/'>Midnight Snax</Link>
                    </div>
                    
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