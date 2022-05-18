import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



export const Stopwatch = () => {
let [time,settime]=useState(0)
let [flag,setflag]=useState(false)

useEffect(() => {
    let inte = null;
 if(flag)
 {
       inte =  setInterval(() => {
           settime(time+1)
         }, 1000)
    }

 return ()=>clearInterval(inte)
 
 
})

const start = ()=>{
    setflag(true)
}

const stop=()=>{
    setflag(false)
}
 
const reset = ()=>{
   setflag(false)
   settime(0)
}

  return (
    <div className='stop'>
        <div className='h' > 
    <h1>{time}</h1>
    <h1>.  Sec</h1>
   
       </div>
  
   <button onClick={flag?stop:start}>{flag?'Stop':'start'}</button>
   <button onClick={reset} >Reset</button>
    </div>
  )
}
