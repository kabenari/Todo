import React, { useContext } from 'react'
import Todo from './Todo'
import { ContextProvider } from '../Contexts/TodoContexts'

const TodoList = () => {

    const [todos,setTodos] = useContext(ContextProvider)

  return (
      1 <= todos.length ? todos.map((items)=>{
        return(
            <Todo key={items.id} id={items.id} todo={items.todo} completed={items.completed}/>
        );
      }) : (<h4>No Todos</h4>)
  )
}

export default TodoList
