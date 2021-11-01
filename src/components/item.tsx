import styled from 'styled-components';

const ItemDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: rgba(66, 69, 75, 0.7);
    border-radius: 5px;
    padding: 5px;
    min-height: 50vh;
    margin-top: 5vh;

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
`

function Item(props: any){
    const {item} = props
    return(
        <div className='item'>
            <ItemDiv>
                <h4>{item.title}</h4>
                <div className='item-img'>
                    <img src={item.img_url} alt={item.title} />
                </div>
                <h5>${item.price}</h5>
            </ItemDiv>
        </div>
    )
}

export default Item