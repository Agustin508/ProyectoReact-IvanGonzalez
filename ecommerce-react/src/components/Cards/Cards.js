import React, {useState, useEffect} from "react"
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { useParams } from "react-router-dom";
import db from "../../firebase";
import { collection, getDocs} from "firebase/firestore";

const Cards = ({children}) => {
const { category } = useParams ()
const[products, setProducts] = useState([])

const getProducts = async () => {
  const itemsCollection = collection(db, 'productos')
  const productSnapshot = await getDocs(itemsCollection)
  const productList = productSnapshot.docs.map((doc) => {
    let product = doc.data()
    product.id = doc.id
    return product
    }
  )
    return productList

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
        
    </div>
  );
}

export default Cards;
