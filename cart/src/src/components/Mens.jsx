import { dblClick } from '@testing-library/user-event/dist/click'
import React from 'react'
import { useNavigate,Route,Routes, Link, Outlet } from 'react-router-dom'
import data from '../db.json'

export const Mens = () => {
    
  return (
    <div>
       <div>
        <h1>Products</h1>
        <div>
            {data.map((e)=>{
                return(
                <div key={e.id}>
                
                <Link to={`/mens/${e.id}`}>{e.title}</Link>
                <img src={e.imgURL} alt="" />
                </div>
                )
            })}
        </div>
       </div>
    </div>
  )
}
