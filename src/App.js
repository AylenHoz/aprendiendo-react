import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Componente como funcion
/* function Title(props) {
  return <p>{props.title}</p>
}*/

// Componente como arrow function
// const Title = (props) => <p>{props.title}</p>

// Componente como class
class Title extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render () {
    const {
      arrayNumbers,
      arrayObjects,
      boolean,
      multiply,
      noth,
      numero,
      text,
      title
    } = this.props
    const boolValue = boolean ? 'Cierto': 'Falso'
    const arrayNumbersDoble = arrayNumbers.map(multiply)
    return (
      <div>
        {title}
        <p>{text}</p>
        <p>Este es el nro.: {numero}</p>
        <p>Este es el bool: {boolValue}</p>
        <p>Estos son los valores del array: {arrayNumbers.join(', ')}</p>
        <p>Estos son los valores del array x2: {arrayNumbersDoble.join(', ')}</p>
        <p>Estos son los pokemon del array de objetos: {arrayObjects.nombre}</p>
        <p>Este es el valor por defecto de la variable noth de props: {noth}</p>
      </div>
    )
  }
}

Text.defaultProps = {
  noth: 'Valor defecto'
}

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {contador: this.props.contadorInicial};
    // Ojo que el metodo setState es asincrono: Actualiza cuando puede el state
    setInterval(() => {
      this.setState({contador: this.state.contador + 1})
    }, 1000);
  }

  render() {
    return <ContadorHijo numero={this.state.contador} />
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorHijo extends Component {
  render () {
    return <h1>El valor del contador (con su hijo) es: {this.props.numero}</h1>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title='Este es el titulo' />
      </header>
      <Text
        arrayNumbers={[1,4,5,67]}
        arrayObjects={
          [
            {nombre: 'Pikachu', tipo: 'Electrico'},
            {nombre: 'Bulbasaur', tipo: 'Planta'},
            {nombre: 'Charmander', tipo: 'Fuego'},
            {nombre: 'Squirtle', tipo: 'Agua'}
          ]
        }
        boolean
        multiply={(number) => number * 2}
        numero={2}
        text='Este es el texto'
        title={<h1>Aca comienza el contenido de text</h1>}
      />
      <Contador contadorInicial={100} />
    </div>
  );
}

export default App;
