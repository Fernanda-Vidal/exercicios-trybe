import React, { createContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
    const [inputValue, setInputValue] = useState('');
    const [arrayTodos, setArrayTodos] = useState([]);

    const addInput = (item) => {
        setInputValue(item)
    }

    const addTodo = (newTodo) => {
        setArrayTodos(arrayTodos.concat(newTodo))
        setInputValue('')
    }
    const context = { inputValue, addInput, arrayTodos, addTodo }
    return (
        <main>
            <TodoContext.Provider value={ context }>
                { children }
            </TodoContext.Provider>
        </main>
    )
}

export { TodoContext, TodoProvider }