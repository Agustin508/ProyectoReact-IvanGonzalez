import {useContext, useState} from 'react';
import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetails = ({data, cartArray}) => {

    const[quantity, setQuantity] = useState(false)

    const {addProviderToCart} = useContext(CartContext)

    const onAdd = (count) => {
        addProviderToCart({...data, cantidad: count})
        setQuantity(true);
    }

    return(
        <div> 
        <div>
        <div>
            <img src={data.image} alt={data.name} />
        </div>
        <div className='cart'>
            <h3>{data.name}</h3>
            <p>PRECIO:$ {data.price}</p>
            <p>MEDIDAS:{data.measure}</p>
            {quantity ? <Link to='/cart'>Cart</Link> : <ItemCount stock ={5} onAdd={onAdd}/>}
        </div>
        </div>
        </div>
    )


}

export default ItemDetails


