import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import ModalCustom from '../components/Modal/Modal'
import db from '../firebase'
import {addDoc, collection} from 'firebase/firestore'

const CartWidgetPage = () => {
    
    const {cartArray, deleteItem, totalProductos} = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const[formData, setFormData] = useState({
        name: '',
        phone: '',
        email:''
    })
    const [order, setOrder] = useState(
        {
            buyer : formData,
            items: cartArray.map((cartArrays) => {
                return{
                id:cartArrays.id,
                name: cartArrays.name,
                price: cartArrays.price
                }
            }),
            total : totalProductos()
        }
    )

  
    const handleChange= (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const[successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) =>{
        let prevOrder= {...order,
        buyer: formData
        }
        e.preventDefault()
        setOrder({...order,
            buyer:formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, order)
        console.log("orden generada" , orderDoc.id)
        setSuccessOrder(orderDoc.id)
    }

    return(
        <div>
            {cartArray.length === 0 &&
               <div>
                   <p>No hay productos en el carrito</p>
                   <li>
                    <Link to={'/Products'}>Regresar a la tienda</Link>
                    </li>
               </div> 
            }

             {(cartArray.length > 0) && cartArray.map((cartArrays)=> {
                const {price, measure, name, cantidad, id} = cartArrays
                return(
            <div>

                <div key={id}>
                    <p>Nombre: {name}</p>
                    <p>Price:{price}</p>
                    <p>cantidad:{cantidad}</p>

                    <p>Measure:{measure}</p>
                    {<Button onClick={() => deleteItem(cartArrays)}>
                    <DeleteIcon />
                    </Button>}
                </div>
            
            </div>
            )
            })}
            {
            (cartArray.length >=1)

            &&

            <div>
                
                <h5>El total es : {totalProductos()}</h5>
                <Button onClick={() => setOpenModal(true)}>Completar Compra</Button>
            </div>
          
            }
             <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                {console.log("formdata", formData)}
                {console.log("order", order)}

                <h2>Form Usuario</h2>
                {successOrder ? (
                    <div>
                        <h3>Orden generada correctamente</h3>
                        <p>su numero de order es : {successOrder}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                    <input type="text" name= 'name' placeholder='Nombre' onChange={handleChange} value={formData.name}/>
                    <input type="number" name='phone' placeholder='Phone' onChange={handleChange}value={formData.phone}/>
                    <input type="mail" name='email' placeholder='mail' onChange={handleChange}value={formData.email}/>

                    <Button type="submit">Enviar</Button>
                    </form>
                    )}
                
                </ModalCustom>
        </div>
       
    )
}

export default CartWidgetPage