// import PropTypes from "prop-types"
import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

function LiTodo({ list }) {
    const { arrayTodos } = useContext(TodoContext)
    return (
        <ul>
    {
        arrayTodos.map((item) => (
            <div>
        <li>{item}</li>
        </div>))
    }
      </ul>
    )
}

export default LiTodo;
