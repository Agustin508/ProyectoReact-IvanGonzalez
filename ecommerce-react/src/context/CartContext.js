import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [cartArray, setCartArray] = useState([])
    
    const addProviderToCart = (product, count) => {
        console.log(`Agregaste ${product.name},cantidad: ${count}`)
        const newPro = {
            item: product,
            count
        }
        setCartArray([...cartArray, newPro])
    }   
    
    const deleteItem = (product) =>{
        setCartArray(cartArray.filter( cartArray => cartArray.id !== product.id))
    }

    const clearCart = () => {
        setCartArray([])
    }

    const isInCart = (id) =>{
        return cartArray.some(element => element.id === id)
    }

    const value = {
        cartArray,
        addProviderToCart,
        isInCart,
        clearCart,
        deleteItem,
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;