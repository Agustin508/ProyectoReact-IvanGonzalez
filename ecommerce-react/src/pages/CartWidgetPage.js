import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const CartWidgetPage = () => {

    const {cartArray, deleteItem} = useContext(CartContext)

    return(
        <div>
            {cartArray.map(prod =>

            <div>
                <p>Nombre: {prod.item.name}</p>
                Price:{prod.item.price}
                {<Button className='btn-delete' onClick={deleteItem}>
                <DeleteIcon />
                </Button>}
            </div>
                 
            )}
        </div>
    )
}

export default CartWidgetPage