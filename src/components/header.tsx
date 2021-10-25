import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
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
    font-size: 3rem;
  }
`

const CheeseMoon = styled.div`
  max-width: 30%;
  max-height: 20vh;
  img{
    height: 100%;
  }

  @media (max-width: 450px) {
    img{
      max-height: 10vh;
    }
  }
`

const HeadWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 95%;
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 10%;
  
  .nav {
    margin-left: 5%;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    color: #EDB34D;
    transition: .3s;
    :hover{
      color: black;
      font-weight: bold;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`

function Header(){
    return(
        <header>
            <CheeseMoon>
              <img src={cheeseMoon} alt="cheesy-moon" />
            </CheeseMoon>
            <Heading>
                <HeadWrap>
                    <Link className='logo' to='/'>Midnight Snax</Link>
                </HeadWrap>
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