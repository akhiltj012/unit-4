

import Form from "./components/Form"
import CreditCard from "./components/CreditCard"
import styled from "styled-components"



export const Border = styled.div`

height:600px;
width:600px;

display:flex;
`

export const Right = styled.div`

height:300px;
width:400px;


`

export const Left = styled.div`
border:solid 2px;
height:300px;
width:400px;


`




function App() {
  return (
    <Border>
 

     
 
     <Right>
      <Form/>
      </Right>
   
    </Border>
  );
}

export default App;
