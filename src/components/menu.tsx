import axios from 'axios';
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import Item from './item'

const MenuDiv = styled.div`
    width: 100%;
    h1{
        text-decoration: underline;
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
                <div className='categories'>
                    <h2 onClick={turnMeal} >Meals</h2>
                    <h2 onClick={turnAppetizer} >Appetizers</h2>
                    <h2 onClick={turnDesserts} >Desserts</h2>
                </div>
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