import React, {useState, useEffect} from "react"
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Cards = ({children}) => {
  const mockProducts = [{
  
      id: 1,
      name : 'Fate eximia',
      measure : '195/55/15',
      image : 'Pinninfarina_NUEVA.png',
      stock : '5'
  },
  {
      id:2,
      name : 'Fate AR-620',
      measure : '195/55/15',
      image : 'Eximia_AR-620_NUEVA.png',
      stock : '5'
  
}]

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
