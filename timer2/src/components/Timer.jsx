import React from 'react'
import {useState} from 'react'
import Timeshow from "./Timeshow"

function Timer() {
    const [time, setTime] = useState(0)
   
       let mytime = setInterval(()=>{
            setTime(time+1)
           
          },1000)
  
   

        if(time===11){
            clearInterval(mytime)
            setTime(0)
        }
        
  
   
 
    
  
   
  return (
    <div>
       <Timeshow time={time} end={10}  />
    </div>
  )
}

export default Timer