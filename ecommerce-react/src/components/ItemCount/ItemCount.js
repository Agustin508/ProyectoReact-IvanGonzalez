import React, {useState, useEffect} from 'react';
import { Button } from '@mui/material';

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
    <Button onClick={removeStock}>-</Button>
    <Button onClick={aumentarStock}>+</Button>
    <p>{count}</p>
    <Button onClick={ () => onAdd(count)}>Agregar al carrito</Button>

    </>
)

}
export default ItemCount