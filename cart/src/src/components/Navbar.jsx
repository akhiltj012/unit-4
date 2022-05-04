import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbardiv } from './Navbar.styled';
import Button from '@mui/material/Button';


export const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Navbardiv>
        <img href=""/>
        <div>
         <Button variant="outlined" onClick={()=>navigate("/home")}>Home</Button> 
        </div>
        <div>
         <Button variant="outlined" onClick={()=>navigate("/cloths")}>Cloths</Button>
        </div>
        <div>
        <Button variant="outlined" onClick={()=>navigate("/paintings")}>Paitings</Button>
        </div>
        <div>
        <Button variant="outlined" onClick={()=>navigate("/electronics")}>Electronics</Button>
        </div>
         
          
          
          </Navbardiv>
    </div>
  )
}
