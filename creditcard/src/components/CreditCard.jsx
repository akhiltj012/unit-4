import React from 'react'
import styled from "styled-components"

export const Image = styled.img`
position: relative;

height:200px;
width:300px;

display:flex;
border-radius:10px

`
export const Main = styled.div`

border:solid 1px;
height:200px;
width:300px;

display:flex;
border-radius:10px;

h4{
  position: absolute;
  line-height:10px;
  top:40%;
  left: 166px;
}
h3{
  position: absolute;
  line-height:10px;
  bottom:45%;
  left: 346px;
}
h6{
  position: absolute;
  line-height:10px;
  bottom:190px;
  left: 176px;
}
h5{
  position: absolute;
  line-height:10px;
  margin-left:10px;
}
`

function CreditCard(props) {
return(
    <Main>
   <Image src="https://assets.unionbank.com/assets/styles/medium/public/creditcard/personal/credit-cards/union-bank-signature-visa-bank-freely-rewards-card-drk.png?itok=HVYGdmlo">
  
   </Image>
   <h4>{props.name}</h4>
      <h3>{props.creditCard}</h3>
      <h5>{props.date}</h5>
      <h6>{props.cvv}</h6>
    </Main>
   
)
}

export default CreditCard