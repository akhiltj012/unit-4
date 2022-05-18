import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Timer = () => {
    
    const [minute,setminute]=useState(5)
    const [second,setsecond]=useState(0)
    const [flag,setflag]=useState(false)
    
   
 
    useEffect(() => {
       let int = null;
       let int1 =null;
      if(flag){
       
      int1=setInterval(() => {
         
          setsecond(second+1)
      }, 100);
     
      }
      if(second===60 )
      {
         
         
          setsecond(0)
      }
    
      
      if(minute===0 && second===0)
      {
          setflag(false)
      }
     
      return () => {
        clearInterval(int)
        clearInterval(int1)
      }
    }, [minute,flag,second])
    
    let start=()=>{
      setflag(true)
      }
    let stop=()=>{
        setflag(false)
    }
     const reset=()=>{ 
      setminute(5)
      setsecond(0)
    }

  return (
      <div className='timer' >
      <div className='h' > 
    <h1>{minute}</h1>
    <h3> min </h3>
    <h1>- {second===0?'0':60-second}</h1>
    <h3>.sec</h3>
   
       </div>
  
   <button onClick={flag?stop:start} > { flag ?'stop':'start'}</button>
   <button onClick={reset}  >Reset</button>

    </div>
  )
}
