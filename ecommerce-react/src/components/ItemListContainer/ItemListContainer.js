import React, { useState } from 'react';
import '../ItemListContainer/ItemListContainer.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';

export default function ItemListContainer({ data }) {
    const { name , measure, image, id} = data
    const [count] = useState(1)

    

  return (
    <div className="cards">
        <ItemDetails data={data}/>

        <Button>
        <Link to={`/Detail/${id}`}>Mas Informacion</Link>
        </Button>
    </div>
  );
}

