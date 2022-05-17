import React from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }

  handleClick() {
    this.setState((prevState, _props) => ({
      numeroDeCliques: prevState.numeroDeCliques + 1 
    }))

    this.state.numeroDeCliques % 2 !== 0 ? console.log('green') : console.log('purple')
  }

  handleClick2() {
    this.setState((prevState, _props) => ({
      numeroDeCliques2: prevState.numeroDeCliques2 + 1 
    }))
    this.state.numeroDeCliques2 % 2 !== 0 ? console.log('green') : console.log('purple')
  }

  handleClick3() {
    this.setState((prevState, _props) => ({
      numeroDeCliques3: prevState.numeroDeCliques3 + 1 
    }))
    this.state.numeroDeCliques3 % 2 !== 0 ? console.log('green') : console.log('purple')
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick} >{this.state.numeroDeCliques}</button>
        <button onClick={this.handleClick2} >{this.state.numeroDeCliques2}</button>
        <button onClick={this.handleClick3} >{this.state.numeroDeCliques3}</button>
      </div>
    )

  }
}

export default App;
