import {useState} from 'react';
import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetails = ({data}) => {

    const[quantity, setQuantity] = useState(false)

    const onAdd = (count) => {
        alert(`Agregaste ${data.name},cantidad: ${count}`)
        setQuantity(true);
    }

    return(
        <div> 
        <div>
        <div>
            <img src={data.image} alt={data.name} />
        </div>
        <div>
            <h3>{data.name}</h3>
            <p>PRECIO:$ {data.price}</p>
            <p>MEDIDAS:{data.measure}</p>
            <p>DETALLE:{data.description}</p>
            {quantity ? <Link to='/cart'>Cart</Link> : <ItemCount stock ={5} onAdd={onAdd}/>}
        </div>
        </div>
        </div>
    )


}

export default ItemDetails


