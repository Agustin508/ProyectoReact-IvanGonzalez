import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {

    const {cantidad} = useContext(CartContext)
    
    return(
        <div>
            <img src="bx-cart.png"></img>
            <span>{cantidad()}</span>
        </div>
    )
}

export default CartWidget