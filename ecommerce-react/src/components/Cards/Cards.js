import React, {useState, useEffect} from "react"
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import mockProducts from "../../Utils/mockProduct";
import { useParams } from "react-router-dom";

const Cards = ({children}) => {
const { category } = useParams ()
const[products, setProducts] = useState([])

const getProducts = () => {
  return new Promise((resolve,reject) => {
      resolve(mockProducts);
  })
}

useEffect ( () => {
  setProducts([])
  getProducts().then ( (productos) => {
    category ? filterProductByCategory(productos, category) : setProducts(productos)
  })
}, [category] )

const filterProductByCategory = (array, category) => {
  array.map ( (product) => {
      if(product.category === category) {
        return setProducts(products => [...products, product]);
      }
  })
}

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
