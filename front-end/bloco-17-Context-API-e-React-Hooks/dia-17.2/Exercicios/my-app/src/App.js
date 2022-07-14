import './App.css';
import React from 'react';
import Todo from './Todo';
import { TodoProvider } from './TodoContext';

function App() {
    return (
      <div>
        <TodoProvider>
           <Todo />
        </TodoProvider>
    </div>
  );
}

export default App;
