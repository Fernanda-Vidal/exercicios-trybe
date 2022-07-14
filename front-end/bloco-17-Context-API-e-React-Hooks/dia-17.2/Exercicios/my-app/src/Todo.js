import React, { useContext } from 'react';
import LiTodo from './LiTodo';
import { TodoContext } from './TodoContext';

function Todo() {
    const { inputValue, addInput, arrayTodos, addTodo } = useContext(TodoContext)

      return (
        <div className="Todo">
        <h1>To Do List</h1>
        <input type="text" value={ inputValue } onChange={ (ev) => addInput(ev.target.value)} />
        <button type="button" onClick={ () => addTodo(inputValue) }>+</button>
          <LiTodo list={ arrayTodos } />
      </div>
    );
}

export default Todo;
