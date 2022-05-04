import React from 'react'
import styles from "./todo.module.css"
function Todo({todo, onDelete, onEdit}){
   
        const deleteTodo = async()=>{
            await fetch(`http://localhost:3000/todos/${todo.id}`,{
             method:"DELETE",
             headers:{"content-type":"application/json"},
            })
          onDelete(todo.id)
        }


        const editTodo = async()=>{
          let response = await fetch(`http://localhost:3000/todos/${todo.id}`,{
             method:"PATCH",
             headers:{"content-type":"application/json"},
             body:JSON.stringify({
                 value:"Edited",
                 completed:true
             })
            })
            let data = await response.json();
            
          onEdit(data)
        }
    
  return (
      <>
    <div className={`${styles.flex} ${todo.completed? styles.lineThrough:""}`}>{todo.value}
    </div>
    {/* <div>{todo.value}</div> */}
    <button className={styles.flex} onClick={editTodo}>Edit</button>
    <button  className={styles.flex} onClick={deleteTodo}>Delete</button>
   
    </>
  
    )
}

export default Todo