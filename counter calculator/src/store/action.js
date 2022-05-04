import {INCREMENT,DECREMENT,MULTIPLY,DIVIDE} from "./actionType"


export const incrementCounter =(payload)=>({
type:INCREMENT,
payload,
})




export const decrementCounter =(payload)=>({
type:DECREMENT,
payload
})

//multiplyCounter,divideCounter,substractCounter,addCounter

export const multiplyCounter =(payload)=>({
    type:MULTIPLY,
    payload
    })
    export const divideCounter =(payload)=>({
        type:DIVIDE,
        payload
        
        })
     
