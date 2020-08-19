import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BoxChildren extends Component {
  render() {
    return (
      <div style={{border: '1px solid #000', margin: 10, padding: 10}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  render() {
    const {title, author, publicationDate, children } = this.props
    return (
      <section>
        <h3>{title}</h3>
        {author && <p><em>Escrito por {author}</em></p>}
        <BoxChildren>{publicationDate}</BoxChildren>
        <article>{children}</article>
      </section>
    );
  }
}

class App extends Component {

  render () {
    return (
      /* Al cambiar author='Aylen Hoz' por:
      - author={true} dara error por consola por el tipo de dato
      - Nada (borrado) dara error por required*/
      <div className="App">
        <h2>Children</h2>
        <BoxChildren>
          Soy children!
        </BoxChildren>
        <BoxChildren>
          Hola, soy el otro Children
        </BoxChildren>
        <h2>Vamos a hacer un articulo con children Layout:</h2>
        <Article
          author='Aylen Hoz'
          title='Titulo articulo'
          publicationDate={new Date().toLocaleDateString()}
        >
          <p>Este es el contenido del articulo</p>
          <strong>Y esta su conclusión</strong>
        </Article>
      </div>
    );
  }
}

export default App;
