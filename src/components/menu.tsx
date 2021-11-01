import axios from 'axios';
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import Item from './item'
import glutenIcon from '../assets/glutenIcon.jpg'
import milkIcon from '../assets/milkIcon.png'
import peanutIcon from '../assets/peanutIcon.png'

const MenuDiv = styled.div`
    width: 100%;
    h1{
        text-decoration: underline;
    }
    h2{
        font-size: 5vw;
    }
    .categories{
        display: flex;
        width: 90%;
        justify-content: space-evenly;
    }
    .selection{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        .item{
            width: 30%;
        }
    }

    .Allergy-warnings{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img{
            height: 50px;
        }
        .allergy{
            display: flex;
            flex-direction: row;
        }
    }

    @media (max-width: 1200px) {
        .selection .item{
            width: 40%;
        }
    }
    @media (max-width: 700px) {
        .selection .item{
            width: 80%;
        }
    }
    @media (max-width: 500px) {
        .Allergy-warnings{
            flex-direction: column;
        }
    }
`

function Menu(){
    const [appetizers, setAppetizers] = useState([])
    const [meals, setMeals] = useState([])
    const [desserts, setDesserts] = useState([])
    const [selected, setSelected] = useState(meals)

    const turnMeal = () => {
        setSelected(meals)
    }
    const turnAppetizer = () => {
        setSelected(appetizers)
    }
    const turnDesserts = () => {
        setSelected(desserts)
    }
    
    useEffect(() => {
        axios.get('https://midnight-snax.herokuapp.com/dishes/category/1')
            .then( res => {
                setAppetizers(res.data)
        })
        axios.get('https://midnight-snax.herokuapp.com/dishes/category/2')
            .then( res => {
                setMeals(res.data)
                setSelected(res.data)
        })
        axios.get('https://midnight-snax.herokuapp.com/dishes/category/3')
            .then( res => {
                setDesserts(res.data)
        })
        
    }, [])

    return(
        <div className='menu'>
            <MenuDiv>
                <h1>Menu</h1>
                <div className='Allergy-warnings'>
                    <div className='dairy allergy'>
                        <img src={milkIcon} alt='contains-dairy' />
                        <h5>= Contains Dairy</h5>
                    </div>
                    <div className='gluten allergy'>
                        <img src={glutenIcon} alt='contains-gluten' />
                        <h5>= Contains Gluten</h5>
                    </div>
                    <div className='nuts allergy'>
                        <img src={peanutIcon} alt='contains-nuts' />
                        <h5>= Contains Nuts</h5>
                    </div>
                </div>
                <div className='categories'>
                    <h2 onClick={turnMeal} >Meals</h2>
                    <h2 onClick={turnAppetizer} >Appetizers</h2>
                    <h2 onClick={turnDesserts} >Desserts</h2>
                </div>
                <h4>Click on any menu item to see details</h4>
                <div className='selection'>
                    {selected.map( item => (
                        <Item  item={item} key={Math.random()} />
                    ))}
                </div>
            </MenuDiv>
        </div>
    )
}

export default Menu