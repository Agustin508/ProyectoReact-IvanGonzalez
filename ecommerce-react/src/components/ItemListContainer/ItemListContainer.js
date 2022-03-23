import React from 'react';
import './ItemListContainer.css'

export default function ItemListContainer(props) {

  return (
    <div className='cards'>
        <h2>{props.name}</h2>
        <p>{props.img}</p>
        <p>Medida :{props.measure}</p>
    </div>
  );
}

