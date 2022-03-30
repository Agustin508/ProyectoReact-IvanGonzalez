import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemListContainer/ItemListContainer.css'

export default function ItemListContainer({ data }) {
    const { name , measure, stock, image} = data
    const [count, setCount] = useState(1)


  return (
    <div className="cards">
        <h2>{name}</h2>
        <p>Stock : {count}</p>
        <p>Medida :{measure}</p>
        <ItemCount stock={stock}/>
    </div>
  );
}

