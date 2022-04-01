import {useState, useEffect} from "react";
import ItemDetails from "../ItemDetails/ItemDetails";
import mockProduct from "../../Utils/mockDetail";

const ItemDetailContainer = () => {

    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {
        return new Promise ((resolve,reject) =>{
            setTimeout(() =>{
                resolve(mockProduct);
            },2000);
        })
    }

    useEffect ( () =>{
        getProduct().then( (product) => {
            setDataProduct(product) 
        })
    },[])

    return(
        <ItemDetails data={dataProduct}/>
    )

}

export default ItemDetailContainer