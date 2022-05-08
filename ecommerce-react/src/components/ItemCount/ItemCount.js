import React, {useState} from 'react';
import { Button } from '@mui/material';
import './ItemCount.css'


const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
    
    const removeStock = () => {
        if(count > 0) {
        setCount(count - 1)
        }
      }

    const aumentarStock = () => {
        if(count < stock) {
            setCount(count + 1)
    }  
}


return(
    <>
    <Button onClick={removeStock}><p>-</p></Button>
    <Button onClick={aumentarStock}><p>+</p></Button>
    <p>{count}</p>
    <Button onClick={ () => onAdd(count)}><p className='addCart' >Agregar al carrito</p></Button>

    </>
)

}
export default ItemCount