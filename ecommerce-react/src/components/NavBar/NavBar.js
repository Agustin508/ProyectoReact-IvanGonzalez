import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import SeccionCategory from '../SeccionCategory/SeccionCategory';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


function NavBar() {

  const {cantidad, cartArray} = useContext(CartContext)

  console.log ("es la cantidad:" , cantidad())

  return (
    <header>
    <div>
        <p className='tittle'>NEUMATICOS FACUNDO</p>
    </div>
    
    <ul>
      
      <li><Button >
        <Link to={'/'} className='ButtonNavBar'>Home</Link>
        </Button></li>
      <li className='ButtonHover'><Button>
        <Link to={'/Products'} className='ButtonNavBar'>Products</Link>
        </Button>
      <li>
        <SeccionCategory/>
      </li>
      </li>
        
      <li><Button>
        <Link to={'/'} className='ButtonNavBar'>Bussines</Link>
         </Button></li>
      <li><Button>
         <Link to={'/Contacto'} className='ButtonNavBar'>Contact</Link>
         </Button>
      </li>
    </ul>
      <Link to={'/cart'}  className='ButtonNavBar'><CartWidget/></Link>    
        
        
      
    
    </header>
    
  )
}

export default NavBar;