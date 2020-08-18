import React, { Component } from 'react'
import ConditionalSection from './sections/conditional'
import Forms from './sections/forms'
import pokemons from './data/pokemons.json'


class App extends Component {
  constructor() {
    super();
    this.state = {mouseX: 0, mouseY: 0};
  }

  handleMouseMove = (e) => {
    const {clientX, clientY} = e;
    this.setState({mouseX: clientX, mouseY: clientY});
  }

  render () {
    return (
      <div className="App">
        <button onClick={() => alert('Hola')}>Di 'hola'</button>
        <h2>Posicion de mouse</h2>
        <div onMouseMove={this.handleMouseMove}
        style={{ border: '1px solid #000', marginTop: 10, padding: 10}}>
          <h3>{this.state.mouseX}, {this.state.mouseY}</h3>
        </div>
        <h1>Formulario</h1>
        <Forms />
      </div>
    );
  }
}

export default App;
