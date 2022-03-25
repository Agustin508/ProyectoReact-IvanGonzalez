import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Cards = ({children}) => {

    let dataProduct = {
        name : 'Fate eximia',
        measure : '195/55/15',
        stock : '5'
    }

  return (
    <div>
        <h2>{children}</h2>
      <ItemListContainer data={dataProduct}  />
    </div>
  );
}

export default Cards;
