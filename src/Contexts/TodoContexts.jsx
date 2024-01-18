import { createContext, useState } from 'react'

export const ContextProvider = createContext();

export const TodoContexts = (props) => {

    const getTodos = JSON.parse(localStorage.getItem('todos'));

    const [ todos, setTodos] = useState(getTodos ? getTodos : []);

    return(
        <ContextProvider.Provider value={[todos,setTodos]}>
            {props.children}
        </ContextProvider.Provider>
    )
}
