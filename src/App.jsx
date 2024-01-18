import React, { useState } from 'react'
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import { ContextProvider, TodoContexts } from './Contexts/TodoContexts';
import "./App.css"

const App = () => {

  const [todo,setTodo] = useState("");

  return (
    <TodoContexts>
                <div className="container">
      <h1 className='app-title'>TODO</h1>
      <AddTodo/>
      <TodoList/>
    </div>
    </TodoContexts>
  )
}

export default App
