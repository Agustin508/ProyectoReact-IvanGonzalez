import React from 'react';
import { Button } from '@mui/material';
import './NavBar.css'

function NavBar() {
  return (
    <header>
    <div>
        <p className='tittle'>NEUMATICOS FACUNDO</p>
    </div>
    <ul>
       <li><Button>Home</Button></li>
       <li><Button>Products</Button></li>
       <li><Button>Business</Button></li>
       <li><Button>Contact</Button></li>
    </ul>
    </header>
    
  );
}

export default NavBar;