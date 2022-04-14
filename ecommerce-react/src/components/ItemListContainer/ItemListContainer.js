import React, { useState , useContext } from 'react';
import '../ItemListContainer/ItemListContainer.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';
import { CartContext } from '../../context/CartContext';

export default function ItemListContainer({ data }) {

  const { cartArray } = useContext (CartContext)

  const { name , measure, image, id} = data
  const [count] = useState(1)

    

  return (
    <div className="cards">
        <ItemDetails data={data} cartArray={cartArray}/>
        
        <Button>
        <Link to={`/Detail/${id}`}>Mas Informacion</Link>
        </Button>
    </div>
  );
}

