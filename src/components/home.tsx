import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeDiv = styled.div`
    h2{
        font-size: 5.5vw;
    }

    h3{
        font-size: 4.5vw;
    }

    .pizza{
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 70%;
        max-height: 40vh;
        object-fit: cover;
        object-position: 80% 100%;
        position: relative;
        border-radius: 10px;
    }
    #pizzaText{
        color: #2D5578;
        background-color: black;
        width: 50%;
        text-align: center;
        border-radius: 5px;
        font-size: 2.5vw;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        position: absolute;
    }

    .button{
        text-decoration: none;
        color: #2D5578;
        background-color: #EDB34D;
        font-weight: bold;
        padding: 5px;
        border-radius: 7px;
        transition: 0.3s;
        font-size: 5vw;
        :hover{
            background-color: #2D5578;
            color: #EDB34D;
            border: 2px solid #EDB34D;
        }
    }

    #hours{
        font-size: 3.5vw;
    }

    .schedule{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .centered{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        background-color: 	rgba(211,211,211,0.3);
        border-radius: 15px;
    }
    .day{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h4{
            display: flex;
            width: 45%;
            justify-content: left;
            font-size: 2.5vw;
        }
        span{
            font-size: 2.5vw;
        }
        h5{
            width: 45%;
            display: flex;
            justify-content: right;
            font-size: 2vw;
        }
    }
    @media (max-width: 350px) {
        .centered{
            width: 90%;
        }
        .day{
            h4{
                font-size: 3.5vw;
            }
            h5{
                font-size: 3vw;
            }  
        }
        
    }
`

function Home(){
    return(
        <div className='home'>
            <HomeDiv>
                <h2>Craving something you can't get at 3:00 A.M.?</h2>
                <div className='pizza'>
                    <img src="https://i2.wp.com/thecheesewanker.com/wp-content/uploads/2021/08/Stretchy-Mozzarella-e1628569483342.jpg?fit=750%2C600&ssl=1" alt='cheese'/>
                    <h3 id='pizzaText'>Come by anytime when most places are closed!</h3>
                </div>
                <h3>Our workers are college students who get to study during their shifts. Support them by coming in for a midnight snack of the best variety!</h3>
                <Link className='button' to="/Menu">Discover your Craving</Link>
                <h3 id='hours'>Hours: </h3>
                <div className='schedule'>
                    <div className='centered'>
                        <div className='day'>
                            <h4>Monday</h4>
                            <span>|</span>
                            <h5>8:00 P.M. - 8:00 A.M.</h5>
                        </div>
                        <div className='day'>
                            <h4>Tuesday</h4>
                            <span>|</span>
                            <h5>8:00 P.M. - 8:00 A.M.</h5>
                        </div>
                        <div className='day'>
                            <h4>Wednesday</h4>
                            <span>|</span>
                            <h5>8:00 P.M. - 8:00 A.M.</h5>
                        </div>
                        <div className='day'>
                            <h4>Thursday</h4>
                            <span>|</span>
                            <h5>8:00 P.M. - 8:00 A.M.</h5>
                        </div>
                        <div className='day'>
                            <h4>Friday</h4>
                            <span>|</span>
                            <h5>8:00 P.M. - 8:00 A.M.</h5>
                        </div>
                        <div className='day'>
                            <h4>Saturday</h4>
                            <span>|</span>
                            <h5>8:00 P.M. - 8:00 A.M.</h5>
                        </div>
                        <div className='day'>
                            <h4>Sunday</h4>
                            <span>|</span>
                            <h5>8:00 P.M. - 8:00 A.M.</h5>
                        </div>
                    </div>
                   
                </div>

            </HomeDiv>
        </div>
    )
}

export default Home