
import { useState } from "react"
import Form from "./Form"
import TodoList from "./TodoList"
import Footer from "./Footer"

export default function Todo(){
 const [todos, setTodos]= useState([])
  let completedTodos= todos.filter ((todo)=>todo.done).length
  let totalTodos = todos.length
    return (
      <div >
        <Form todos={todos} setTodos= {setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/> 
        <Footer completedTodosCount={completedTodos}  totalTodos= {totalTodos}/>
      </div>
     
    )
}