import React,{useState} from 'react'
import styled from "styled-components"

const MyColour = styled.button`

  color:${(props)=>(props.color? "green":"red")}
`; 
const MyBody = styled.div`
  height:500px;
  background:${(props)=>(props.color? "yellow":"blue")}
`; 
function Button() {
    const[color,setColor] = useState(false)

   const handleChange = ()=>{
    setColor(!color)
   }
  

  return (
      <>
      <MyColour color={color} onClick={handleChange}>
   Click
    </MyColour>
<MyBody color={color} onClick={handleChange}>
    
</MyBody>

    </>
  )
}

export default Button