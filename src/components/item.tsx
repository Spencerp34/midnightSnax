import styled from 'styled-components';
import glutenIcon from '../assets/glutenIcon.jpg'
import milkIcon from '../assets/milkIcon.png'
import peanutIcon from '../assets/peanutIcon.png'
import { useState } from 'react'

const ItemDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: rgba(66, 69, 75, 0.7);
    border-radius: 5px;
    padding: 5px;
    min-height: 30vw;
    margin-top: 5vh;
    transition: 0.3s;

    .item-img{
        height: auto;
        width: 15vw;
        display: flex;
        justify-content: center;
        img{
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
            object-fit: contain;
        }
    }
    .allergies{
        width: 80%;
        display: flex;
        justify-content: space-evenly;
    }

    .allergy{
        height: 3vw;
    }
    h6{
        font-size: 1vw;
    }
    @media (max-width: 700px) {
        .item-img{
            width: 35vw;
        }
    }
`

function Item(props: any){
    const [showInfo, setShowInfo] = useState(false)
    const {item} = props
    const allergies = []
    if(item.dairy === true ){
        allergies.push(milkIcon)
    }
    if(item.gluten === true ){
        allergies.push(glutenIcon)
    }
    if(item.nuts === true ){
        allergies.push(peanutIcon)
    }
    const handleClick = () => {
        setShowInfo(!showInfo)
    }

    return(
        <div className='item' onClick={handleClick} >
            <ItemDiv>
                <h4>{item.title}</h4>
                { showInfo ? 
                    (
                        <h6>{item.description}</h6>
                    )
                    : (<div className='item-img'>
                        <img src={item.img_url} alt={item.title} />
                    </div>)
                }
                <h5>${item.price}</h5>
                <div className='allergies'>
                    {allergies.map( icon => (
                        <img className='allergy' src={icon} alt='allergy' />
                    ))}
                </div>
            </ItemDiv>
        </div>
    )
}

export default Item