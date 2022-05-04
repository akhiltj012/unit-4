import React, {useState} from 'react'
import TodoItem from './TodoItem'
import './Todo.css'
function Todo() {
    const [query,setQuery] = useState("");
    const [task, setTask] = useState([]);

   const handleChange = (e)=>{
    const{value} = e.target;
    setQuery(value)
   }

   const handleAdd = ()=>{
       const payload = {
           title:query,
           status:false
       };
   let newTask = [...task,payload]
   setTask(newTask)


   }

  return (
    <>
    <div className="screen" >
     {task.map((item)=>{
        return(
            <TodoItem  title = {item.title}/>
        )
    })}
    </div>
    <input value = {query} placeholder="Write Something" onChange = {handleChange}/>
    <button onClick = {handleAdd} >+</button>
   
    </> 
  )
}

export default Todo