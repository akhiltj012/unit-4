import { Button } from "@mui/material/";
import React from "react";
import {useNavigate} from 'react-router-dom'



export const Navbar = () => {

  const navigate=useNavigate();



  return (
    <div style={{ backgroundColor: "#8000ff", padding: 20 ,display:"flex"}}>
      <div>
      <Button variant="contained" onClick={()=>navigate("/home")}>Home</Button>
      </div>
      <div>
      <Button variant="contained" onClick={()=>navigate("/about")}>About</Button>
      </div>
      <div>
      <Button variant="contained" onClick={()=>navigate("/products")}>Products</Button>
      </div>
      <div>
      <Button variant="contained" onClick={()=>navigate("/products/men")}>Men</Button>
      </div>
      <div>
      <Button variant="contained" onClick={()=>navigate("/products/women")}>Women</Button>
      </div>
      <div>
      <Button variant="contained" onClick={()=>navigate("/products/kid")}>Kids</Button>
      </div>
    </div>
  );
};
