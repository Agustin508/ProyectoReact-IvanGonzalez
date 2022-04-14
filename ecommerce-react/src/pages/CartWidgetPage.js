import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const CartWidgetPage = () => {

    const {cartArray, deleteItem, totalProductos} = useContext(CartContext)

    console.log ("cartArray" , cartArray)

    return(
        <div>
            {cartArray.length === 0 &&
               <div>
                   <p>No hay productos en el carrito</p>
                   <li>
                    <Link to={'/Products'}>Regresar a la tienda</Link>
                    </li>
               </div> 
            }

             {(cartArray.length > 0) && cartArray.map((cartArrays)=> {
                const {price, measure, name, cantidad, id} = cartArrays
                return(
            <div>

                <div key={id}>
                    <p>Nombre: {name}</p>
                    <p>Price:{price}</p>
                    <p>cantidad:{cantidad}</p>

                    <p>Measure:{measure}</p>
                    {<Button onClick={() => deleteItem(cartArrays)}>
                    <DeleteIcon />
                    </Button>}
                </div>
            
            </div>
            )
            })}
            {
            (cartArray.length >=1)

            &&

            <div>
                
                <h5>El total es : {totalProductos()}</h5>
            </div>
            }
        </div>
    )
}

export default CartWidgetPage