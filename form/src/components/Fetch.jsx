
import React from 'react'
import style from "./Form.module.css"
import {useEffect,useState} from "react"



function Fetch() {
    const[task,setTask] = useState([])
   console.log("task---",task)
    useEffect(() =>{
        const getDetails = async()=>{
          try{
            let response = await fetch("http://localhost:3000/details")
            let data = await response.json();
            setTask(data)
          }catch(error){
           console.log(error)
          }
        }
        getDetails()
       },[])



  return (
    <div>
        <table className={style.table}>
<tr>
  <th>Name</th>
  <th>Address</th>
  <th>Age</th>
  <th>Salary</th>
  <th>Marital Status</th>
</tr>
     {task.map((item)=>{
         return(
            <tr>
            <td key={item.id}>{item.username}</td>
            <td key={item.id}>{item.address}</td>
            <td key={item.id}>{item.age}</td>
            <td key={item.id}>{item.salary}</td>
            <td key={item.id}>{item.MaritalStatus}</td>
            </tr>
        )
     })} 
     </table>
    </div>
  )
}

export default Fetch


// MaritalStatus: "S"
// address: "123456"
// age: "12345"
// id: 1
// salary: "2345"
// username: "aa"








// <table>
// <tr>
//   <th>Name</th>
//   <th>Address</th>
//   <th>Age</th>
//   <th>Salary</th>
//   <th>Marital Status</th>
// </tr>
// <tr>
//   <td key={item.id}>{item.username}</td>
//   <td key={item.id}>{item.address}</td>
//   <td key={item.id}>{item.age}</td>
//   <td key={item.id}>{item.salary}</td>
//   <td key={item.id}>{item.MaritalStatus}</td>
// </tr>
// </table>

