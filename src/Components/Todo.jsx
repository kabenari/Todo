import React, { useContext } from 'react'
import { ContextProvider } from '../Contexts/TodoContexts'

const Todo = (props) => {

    const [todos,setTodos] = useContext(ContextProvider)

    const completed = (e) =>{
        const filterTodos = todos.map((item)=>{
            if(item.id === e.target.value){
                item.completed = false;
                if(e.target.checked){
                    item.completed = true;
                }
            }
            return item;
        })

        setTodos(filterTodos);
    }

    const DeleteTodo = (e)=>{
        const filter = todos.filter((item)=>{
            return item.id !== e.target.id;
        })

        setTodos(filter);
    }

  return (
    <div>
      <p className='todo-item'>   
        <input type="checkbox" value={props.id} id={props.id} onChange={e => completed(e)}/>
        <label htmlFor={props.id}>{props.todo}</label>
        <button type='button' className="btn-delete" id={props.id} onClick={e => DeleteTodo(e)}>Delete</button>
      </p>
    </div>
  )
}

export default Todo
