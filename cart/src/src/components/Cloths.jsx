import React from 'react'
import { useNavigate,Route,Routes } from 'react-router-dom'
import { Kids } from './Kids';
import { Mens } from './Mens';
import { Women } from './Women';
import Button from '@mui/material/Button';

export const Cloths = () => {
    const navigate=useNavigate();
  return (
    <div>
    <div>
        <div>
        <Button variant="contained" onClick={()=>navigate("mens")}>Mens</Button>
        </div>
        <div>
        <Button variant="contained" onClick={()=>navigate("women")}>Women</Button>  
        </div>
        <div>
        <Button variant="contained" onClick={()=>navigate("kids")}>Kids</Button>
        </div>

    </div>
    <div>
    <Routes>
        <Route path="mens" element={<Mens/>} ></Route>
        <Route path="women" element={<Women/>} ></Route>
        <Route path="kids" element={<Kids/>} ></Route>
    </Routes>
    </div>
    </div>
  )
}
