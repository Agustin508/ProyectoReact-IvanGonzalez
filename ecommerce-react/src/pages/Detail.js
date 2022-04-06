import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import mockProduct from "../Utils/mockProduct"
import { useParams } from "react-router-dom"
import { Button } from "@mui/material"
import '../App.css'


const DetailPage = () => {
    const { id  } = useParams ()
    const [data, setProduct] = useState({})

    useEffect ( () => {
        filterProductById(mockProduct, id)
    }, [id])

    const filterProductById = (array, id) => {
        array.map ( (data) => {
            if(data.id === id) {
                return setProduct(data)
            }
        })
    }

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