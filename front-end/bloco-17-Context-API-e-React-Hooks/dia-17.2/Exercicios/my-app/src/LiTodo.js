// import PropTypes from "prop-types"
import React from 'react';

function LiTodo({ list }) {
    return (
        <div className="LiTodo">
        <ul>
    {
      list.map((item) => (
      <div>
        <li>{item}</li>
        </div>))
    }
      </ul>
      </div>
    )
}

export default LiTodo;
