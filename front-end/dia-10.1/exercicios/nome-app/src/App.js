import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
    );
  }
  
  const taskList = ['estudar', 'preparar almoço', 'fazer exercícios', 'participar da aula', 'lição de casa com as crianças', 'preparar janta']
class App extends React.Component {
  render () {
    return (
      <ol>{ taskList.map((tarefas) => Task(tarefas)) }</ol>
      );
    }
  }

export default App;
