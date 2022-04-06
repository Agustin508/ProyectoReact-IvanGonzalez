import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import './ItemDetails.css'


const ItemDetails = ({data}) => {

    return(
        <div> 
        <div>
        <div>
            <img src={data.image} alt={data.name} />
        </div>
        <div>
            <h3>{data.name}</h3>
            <p>PRECIO:$ {data.price}</p>
            <p>MEDIDAS:{data.measure}</p>
            <p>DETALLE:{data.description}</p>
            <Button>COMPRAR</Button>
        </div>
        </div>
        </div>
    )


}

export default ItemDetails


