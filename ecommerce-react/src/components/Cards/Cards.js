import React, {useState, useEffect} from "react"
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import mockProducts from "../../Utils/mockProduct";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import { collection, getDocs} from "firebase/firestore";

const Cards = ({children}) => {
const { category } = useParams ()
const[products, setProducts] = useState([])

const getProducts = async () => {
  const itemsCollection = collection(db, 'productos')
  const productSnapshot = await getDocs(itemsCollection)
  console.log('productSnapshot', productSnapshot)
  const productList = productSnapshot.docs.map((doc) => {
    let product = doc.data()
    product.id = doc.id
    console.log("product", product)
    return product
    }
  )
    return productList

  // return new Promise((resolve,reject) => {
  //   return setTimeout(() =>{
  //   resolve(mockProducts);
  // }, 2000 )
  // })
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
