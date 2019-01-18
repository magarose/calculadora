import React, { Component } from 'react';
import './App.css';
import Resultado from './Resultado.js'

class App extends Component {
  constructor(props) { //funcion que se ejecuta siempre en una clase (js)
    super(props);
    this.state = { //this hace referencia al componente
      first: '',
      second: '',
      cuenta: ''
    }
    this.handleInputOnChange = this.handleInputOnChange.bind(this)
    this.handleInputSecondOnChange = this.handleInputSecondOnChange.bind(this)
    this.handleSelectOnChange = this.handleSelectOnChange.bind(this)
    this.resultado = this.resultado.bind(this)

  }
  ////FIJATE EL EVAL

  handleInputOnChange(e) {
    this.setState({
      first: e.target.value.length === 0 ? '' : Number(e.target.value)
    });

  }

  handleInputSecondOnChange(e) {
    this.setState({
      second: e.target.value.length === 0 ? '' : Number (e.target.value)
    });

  }
  handleSelectOnChange (e){
    this.setState({
      cuenta: e.target.value
    })
  }

  resultado (){
    let total = ''

    if (this.state.cuenta === '+') total = this.state.first + this.state.second
    else if (this.state.cuenta === '-') total = this.state.first - this.state.second
    else if (this.state.cuenta=== '/') total = this.state.first / this.state.second
    else if (this.state.cuenta === '*') total= this.state.first * this.state.second

    this.setState({
      result: total
    })
    
  }

  render() {
    return (
      <div className="App">
          <h1>
          CALCULADORA
          </h1>
            <br/>
            <br/>
          <div class= 'form'>
            <input type='number' value={this.state.first} onChange={this.handleInputOnChange} />
            <select onChange = {this.handleSelectOnChange}> 
              <option value = '+'>+</option>
              <option value = "-">-</option>
              <option value = "/">/</option>
              <option value = "*">x</option>
            </select>
            <input type='number' value={this.state.second} onChange={this.handleInputSecondOnChange} />
            <button onClick={this.resultado}> = </button>
            <input type='number' value={this.state.result}  class = 'rest'/>
          </div>
          <Resultado> 

          </Resultado>

      </div>
    );
  }
}

export default App;
