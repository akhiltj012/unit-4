import React,{useState} from 'react'

import CreditCard from "./CreditCard"
import styled from "styled-components"

export const Wrapper = styled.div`

height:300px;
width:1000px;

display:flex;
margin-top:100px;
justify-content:space-evenly;

`

export const Border = styled.div`

height:200px;
width:300px;

display:flex;
border-radius:10px
`
function Form() {
    const[data, setData] = useState()






    const handleChange = (e)=>{
      const field = e.target;
      setData({...data,
        [field.name]:field.value,
    })

      

    }

    const onSubmit = (e)=>{
        e.preventDefault()
      }
    




  return (
    <Wrapper>

<Border>
<CreditCard {...data}/>
</Border>



    <div>

        <form onClick={onSubmit} >
            <div>
               <label>Name</label>
               <input type="text" className="name" name="name" onChange={handleChange} />
            </div>
            <div>
               <label>Credit Card</label>
               <input type="number" name="creditCard" onChange={handleChange} />
            </div>
            <div>
               <label>Date</label>
               <input type="date" name="date" onChange={handleChange} />
            </div>
            <div>
               <label>Cvv</label>
               <input type="number" name="cvv" onChange={handleChange} />
            </div>
            <input type="submit"/>
        </form>
   
    
    </div>
     

</Wrapper>

  )
}

export default Form