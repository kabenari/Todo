import React, { useContext, useEffect, useState } from 'react'
import { ContextProvider } from '../Contexts/TodoContexts';
import uuid4 from 'uuid4';

const AddTodo = () => {

    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useContext(ContextProvider);

    const AddList = (e)=>{
        e.preventDefault();

        const newTodos  = [...todos , {id:uuid4() , todo:todo,completed:false}];
        setTodos(newTodos);
    }

    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

  return (
    <div className='form-input-container'>
      <input type="text" placeholder='add todo' value={todo} onChange={e=>setTodo(e.target.value)}className='form-input' />
      <button type='button' onClick={AddList} className='form-btn'>Add</button>
    </div>
  )
}

export default AddTodo
