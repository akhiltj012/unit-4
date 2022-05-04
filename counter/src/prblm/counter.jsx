import { useState } from "react"

const Counter = () =>{
  const [c,setcount] = useState(0)
  const [color,setcolor] = useState('red')
    const count=()=>{
     setcount( c+1)
    setcolour(c)
    }
const setcolour = (c) =>{
    if(c%2!=0)
    {
       setcolor('green')
       console.log("odd")
    }
    else{
      setcolor('red')
      console.log("even")
    }
}
    const double=()=>{
        setcount(c*2)
       setcolour(c)
       }



    return <> 
    <h1 style={{color:'${color}'}} >{c}</h1>
    <button onClick={()=>count()} >Increment</button>
    <button onClick={()=>double()} >Double</button>
     </>

}


export default Counter