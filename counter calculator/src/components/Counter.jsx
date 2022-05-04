import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {decrementCounter,incrementCounter,multiplyCounter,divideCounter} from "../store/action"
import styled from 'styled-components'


const Box = styled.div`
height:50px;
width:100px;
margin:auto;
border: 1px solid;
`



function Counter() {
    const [save,setSave] = useState(0)
    const dispatch = useDispatch()
    const count = useSelector(state=>state.count)
  
    const num =(e)=>{
        let calculate = e.target.value
        setSave(calculate)
    }

console.log("save",save)


  return (
    <div>
    
     <h1>Counter:{count}</h1>
     
    <Box onClick={()=>dispatch(incrementCounter(1))}>Increment</Box>
    <Box onClick={()=>dispatch(decrementCounter(1))}>Decrement</Box>
    
    <div>
    <Box onClick={()=>dispatch(incrementCounter(`${save}`))}>Add</Box>
    <Box onClick={()=>dispatch(decrementCounter(`${save}`))}>Substract</Box>
    <input placeholder='Calculate' onChange={num} name="calculate" />
     <Box onClick={()=>dispatch(multiplyCounter(`${save}`))}>Multiply</Box>
    <Box onClick={()=>dispatch(divideCounter(`${save}`))}>Divide</Box>

    </div>
    </div>
  )
}

export default Counter