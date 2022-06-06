import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    joke: '',
    nome:'',
    email: '',
    newS: ''
  }

  componentDidMount() {
    const url = 'https://icanhazdadjoke.com/';
    fetch(url, { headers: { Accept: 'application/json' }})
    .then((response) => response.json())
    .then(({ joke }) => this.setState({ joke }))
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  handleEmail = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  handleClick = () => {
    const { nome, email } = this.state;
    const newState = `${nome}: ${email}`
    this.setState({ newS: newState, nome: '', email: '' })
  }

  render() {
    const { joke, nome, email, newS } = this.state;
    return (
    <div className="App">
     { joke }
     <div>
     <label>
       Nome
       <input id="nome" name="nome" type="text" value={ nome } onChange={ (e) => this.handleInput(e) } />
     </label>
     <label>
       Email
       <input type="email" id="email" name="email" value={ email } onChange={ (e) => this.handleEmail(e) } />
     </label>
     <button onClick={ () => this.handleClick() }>Enviar</button>
     </div>
     <h1 >{ newS }</h1>
    </div>
  );
}
}

export default App;
