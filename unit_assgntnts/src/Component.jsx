import React from 'react'
import './App.css';
import { useState } from 'react';


export const Component = ({obj}) => {
   
    const [flag,setflag]=useState('none')
    const click = ()=>{
      if(flag==='flex')
      {
          setflag('none')
          console.log(flag)
      }
      else
      {
         setflag('flex')
          console.log(flag)
      }
    }
    
  return (
    <div onClick={()=>{click()}} className='comp' >
        <div>  <h5>{obj.name}</h5>
        <h5>{obj.email}</h5></div>
      
        <h4 style={{display:`${flag}`}} >{obj.phone}</h4> </div>

        
  )
}
