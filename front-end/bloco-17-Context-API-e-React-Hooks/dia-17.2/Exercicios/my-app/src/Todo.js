import React, { useState } from 'react';
import LiTodo from './LiTodo';

function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [arrayTodos, setArrayTodos] = useState([]);

    const handleChange = ({target: { value, name }}) => {
        setInputValue(value)
      }

    const handleClick = () => {
        setArrayTodos((old) => [...old, inputValue])
        setInputValue('')
    }

      return (
        <div className="Todo">
        <h1>To Do List</h1>
        <input type="text" value={ inputValue } name="inputValue" onChange={ handleChange } />
        <button type="button" onClick={ handleClick }>+</button>
          <LiTodo list={ arrayTodos } />
      </div>
    );
}

export default Todo;
