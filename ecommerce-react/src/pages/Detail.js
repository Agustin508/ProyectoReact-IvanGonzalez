import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../App.css'
import {doc, getDoc} from "firebase/firestore"
import db from '../firebase'

const DetailPage = () => {
    const { id  } = useParams ()
    const [data, setProduct] = useState({})

    const getProduct = async () => {
        const docRef = doc (db, "productos" , id)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct( product)
          } else {
            console.log("No such document!");
          }
    }

    useEffect ( () => {
        getProduct()
    }, [id])

  
    return(
        <Container>
        <div className="CardDetail"> 
        <div>
        <div>
            <img src={`../${data.image}`} alt={data.name} />
        </div>
        <div>

            <h3>{data.name}</h3>
            <p>PRECIO: $ {data.price}</p>
            <p>MEDIDAS: {data.measure}</p>
            <p>DETALLE: {data.description}</p>
        </div>
        </div>
        </div>
        </Container>

    )

}

export default DetailPage