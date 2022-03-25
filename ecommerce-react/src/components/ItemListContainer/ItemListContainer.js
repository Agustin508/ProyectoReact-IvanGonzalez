import { Button } from '@mui/material';
import React, { useState } from 'react';
import '../ItemListContainer/ItemListContainer.css'

export default function ItemListContainer({ data }) {
    const { name , measure, stock} = data
    const [count, setCount] = useState(1)

    console.log("estado Contador : " , count)

    const addStock = () => {
      if(count < stock){
      setCount(count + 1)
    }
    }
    
    const removeStock = () => {
      setCount(count - 1)
    }

  return (
    <div className="cards">
        <h2>{name}</h2>
        <p>Stock : {count}</p>
        <p>Medida :{measure}</p>
        <Button onClick={addStock}>Agregar Stock</Button>
        <Button onClick={removeStock}>Eliminar Stock</Button>
    </div>
  );
}

