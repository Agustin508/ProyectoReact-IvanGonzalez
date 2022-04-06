import React, { useState } from 'react';
import '../ItemListContainer/ItemListContainer.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ItemListContainer({ data }) {
    const { name , measure, image, id} = data
    const [count] = useState(1)

    

  return (
    <div className="cards">
        <h2>{name}</h2>
        <img src={`./${image}`} alt={image}></img>
        <p>Stock : {count}</p>
        <p>Medida :{measure}</p>
        <Button>
        <Link to={`/Detail/${id}`}>Mas Informacion</Link>
        </Button>
    </div>
  );
}

