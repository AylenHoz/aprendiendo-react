import React, { Component } from 'react'
import ConditionalSection from './sections/conditional'
import pokemons from './data/pokemons.json'

class PokemonItem extends Component {
  render() {
    const {pokemon} = this.props;
    return (
      <li>
        <p><strong>Nombre: </strong>{pokemon.nombre}</p>
        <p><strong>Tipo: </strong>{pokemon.tipo}</p>
      </li>
    );
  };
}

class App extends Component {
  render () {
    const arr = [1, 1, 3, 4];
    return (
      <div className="App">
        <ConditionalSection />
        <h1>Trabajando con listas:</h1>
        {arr.map((numero, index) => {
            return <p key={index}>Soy el numero {numero}</p>
          })
        }
        <h1>Trabajando con lista a partir de JSON:</h1>
        <ul>
          {pokemons.map(pokemon => {
            return <PokemonItem key={pokemon.id} pokemon={pokemon} />
          })}
        </ul>
      </div>
    );
  }
}

export default App;
