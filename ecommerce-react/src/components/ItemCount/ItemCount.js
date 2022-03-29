import React, {useState} from 'react';
import { Button } from '@mui/material';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)
    
    const removeStock = () => {
        if(count > 0) {
        setCount(count - 1)
        }
      }

    const onAdd = () => {
        if(count < stock) {
            setCount(count + 1)
    }
    
}
return(
    <>
    <Button onClick={removeStock}>-</Button>
    <Button onClick={onAdd}>+</Button>
    <p>{count}</p>
    <Button>Agregar al carrito</Button>

    </>
)

}
export default ItemCount