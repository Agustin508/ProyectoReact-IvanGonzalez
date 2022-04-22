import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [cartArray, setCartArray] = useState([])
    
    const addProviderToCart = (product) => {
        let exist = cartArray.find(cartArrays => cartArrays.id === product.id)
        const { cantidad } = data;
        data.cantidad = product.cantidad + cantidad;
        const newCart = [...cartArray];
        setCartArray(newCart)

        !exist && setCartArray(cartArray => [...cartArray, product])
   
    }   
    
    const deleteItem = (product) =>{
        setCartArray(cartArray.filter((cartArrays) => {
            return cartArrays.id !== product.id
        }))
    }


    const totalProductos = () => {
        const total = cartArray.reduce((acum , product) => acum = acum + (product.price * product.cantidad), 0 )
        return(
            total
        )
    }
    

    const cantidad = () =>{
        cartArray.reduce((acum , product) => acum += product.cantidad , 0)
    }

    const data = {
        cartArray,
        addProviderToCart,
        deleteItem,
        totalProductos,
        cantidad
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;