import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import ModalCustom from '../components/Modal/Modal'
import db from '../firebase'
import {addDoc, collection} from 'firebase/firestore'
import './CartWidgetPage.css'


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
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        setSuccessOrder(orderDoc.id)
    }

    

    return(
        <div>
            {cartArray.length === 0 &&
               <div className="noProducts">
                   <p>No hay productos en el carrito</p>
                   <span>
                    <Link to={'/Products'}>Regresar a la tienda</Link>
                    </span>
               </div> 
            }

             {(cartArray.length > 0) && cartArray.map((cartArrays)=> {
                const {price, measure, name, cantidad, id} = cartArrays
                return(
            <div>

                <div className="detailCart" key={id}>
                    <p >Nombre: {name}</p>
                    <p>Price:{price}</p>
                    <p>Cantidad:{cantidad}</p>

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

            <div className="completarCompra">
                
                <h5>El total es : ${totalProductos()}</h5>
                <Button onClick={() => setOpenModal(true)}><p>Completar Compra</p></Button>
            </div>
          
            }
             
             
             <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                

                <h2>Form Usuario</h2>
                {successOrder ? (
                    <div>
                        <h3>Orden generada correctamente</h3>
                        <p>su numero de order es : {successOrder}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} >
                    <input required type="text" name= 'name' placeholder='Nombre' onChange={handleChange} value={formData.name}/>
                    <input required type="number" name='phone' placeholder='Phone' onChange={handleChange}value={formData.phone}/>
                    <input required type="mail" name='email' placeholder='mail' onChange={handleChange}value={formData.email}/>

                    <Button type="submit" >Enviar</Button>
                    </form>
                    )}
                
                </ModalCustom>

                {successOrder && <p className="messageCorrect"><Link to={'/Products'}>SU COMPRA SE ENVIO CORRECTAMENTE REGRESAR A LA TIENDA</Link></p>}
        </div>
       
    )
}

export default CartWidgetPage