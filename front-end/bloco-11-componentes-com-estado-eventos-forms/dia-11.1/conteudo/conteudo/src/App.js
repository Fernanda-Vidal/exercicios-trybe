import './App.css';
import React from 'react';

class App extends React.Component {
 state = {
   conta:0,
   regressa:0,
   multiplica:1,
   color: 'green',
   numeroInput: 0,
 }
  
  handleClick = () => {
    const { conta } = this.state;
    const novo = conta + 1
    this.setState({ conta: novo })

    if (conta % 2 !== 0) {
      this.setState({ color: 'green'})
      console.log("verde")
    } else {
      this.setState({ color: 'red'})
      console.log("vermelho")
    }
  }

  handleClick2 = () => {
    this.setState((prevState) => ({
      regressa: prevState.regressa - 1
    }))
  }

  
  handleChange = ({ target: { value } }) => {
    this.setState({ numeroInput: value })
  }

  handleClick3 = (numero) => {
    const { multiplica } = this.state;
    const novo = multiplica * numero
    this.setState({ multiplica: novo })
    console.log(this.state.numeroInput)
  }
  render() {
    const { conta, regressa, color, multiplica, numeroInput } = this.state
    const num = -10;
    return (
    <div className="App">
      <button className={ color } onClick={ this.handleClick }>{ `SOMA  ${conta}` }</button>
      <button onClick={ this.handleClick2 }>{ `SUBTRAI  ${regressa}` }</button>
      { ( regressa < num) && <alert>Atenção!</alert> }
      <input type="text" placeholder="digite um número" onChange={ this.handleChange }></input>
      <button onClick={ () => this.handleClick3(numeroInput) }>{ `MULTIPLICA POR  ${numeroInput}` }</button>
      { (multiplica > 1) && <h1> { multiplica } </h1> }
    </div>
  );
 }
}

export default App;
