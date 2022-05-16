import React from 'react'
import './App.css';
import { Component } from './Component';


export const Card = ({obj}) => {
let arr1 = obj.arr;

  return (
    <div className='card' >
   {arr1.map((e)=>{
   
      return <Component key={e.key} obj = {e}  />
   })}
    
    </div>
  )
}
