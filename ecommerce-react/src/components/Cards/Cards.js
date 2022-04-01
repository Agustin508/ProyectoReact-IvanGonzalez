import React, {useState, useEffect} from "react"
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import mockProducts from "../../Utils/mockProduct";

const Cards = ({children}) => {
  

const[products, setProducts] = useState([])

const getProducts = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() =>{
      resolve(mockProducts);
    },2000);
  })
}

useEffect ( () => {
  getProducts().then ( (productos) => {
      setProducts(productos)
  })
}, [] )


  return (
    <div>
        <h2>{children}</h2>
        {products.map(( product ) => {
          const{id} = product

          return(<ItemListContainer data={product} key={id}/>)
        })}

        {console.log("products :" , products)}
    </div>
  );
}

export default Cards;
