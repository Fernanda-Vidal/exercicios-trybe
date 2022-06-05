import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    email: '',
    saveEmail: ''
  }

  changeEmail = (value) => {
    this.setState({ email: value })
  }

  changeSaveEmail = (value) => {
    this.setState({
      email: '',
      saveEmail: value, })
  }
  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
       <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" value={ email } onChange={ (e) => this.changeEmail(e.target.value)}/>
      </label>
      <input type="button" id="btn-send" data-testid="id-send" value="Enviar" onClick={ () => this.changeSaveEmail(email) } />
      <input type="button" id="btn-back" value="Voltar" />
      <h2 data-tesid="id-email-user" >{`Valor: ${saveEmail}`}</h2>
    </div>
  );
}
}

export default App;
