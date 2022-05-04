
import React, {useEffect, useState} from 'react'
import {AddTodo} from "./AddTodo";
import Todo from "./Todo"





const Todos =() => {
    const [todos, setTodos] = useState([]);
    const [pageNumber,setPageNumber] = useState(1)
    const onAdd = (newTodo)=>{
        setTodos([...todos,newTodo])
          
    }

 
    const onDelete = (id) => {
        const newTodos = todos.filter(todo=>todo.id!==id);
        setTodos(newTodos)
    }    

    const onEdit = (updatedTodo) => {
        const newTodos = todos.map((todo)=>{
            if(todo.id===updatedTodo.id) return updatedTodo;
            else return todo;
        });
        setTodos(newTodos)
    }



     useEffect(()=>{
        const getTodos = async()=>{
            try{
                let responce = await fetch(`http://localhost:3000/todos?_page=${pageNumber}`);
                let data = await responce.json()
                setTodos(data)
                console.log(data)
               }
               catch(error){
                console.log(error)
                }
            }
         getTodos()
     },[pageNumber])


  return (
    <div>
        <AddTodo onAdd={onAdd}/>
        {todos.map((todo)=>(
            <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
        ))}
       <div>
           <button onClick={()=>{
               if(pageNumber>1){
               setPageNumber(pageNumber-1)
            }
           }}>Previous</button>
            <button onClick={()=>{
              setPageNumber(pageNumber-1)
           }}>Next</button>
       </div>
    </div>
  )
}

export default Todos