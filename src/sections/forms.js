import React, {Component} from 'react'

export default class Forms extends Component {

  constructor() {
    super();
    this.state = {inputNombre: '',
      inputEmail: 'example@mail.com.ar',
      inputTerminos: true}
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }

  handleChange = (e) => {
    console.log('El valor del checkbox es: ' + e.target.checked);
    this.setState({inputTerminos: e.target.checked});
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <label htmlFor='nombre'>Nombre</label>
          <input
            id='nombre'
            name='nombre'
            placeholder='Nombre'
            onChange={(e) => this.setState({inputNombre: e.target.value})}
            ref={inputElement => this.inputNombre = inputElement}
            value={this.state.inputNombre}
          />
        </p>

        <p>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            placeholder='Correo electrónico'
            onChange={(e) => this.setState({inputEmail: e.target.value})}
            ref={inputElement => this.inputEmail = inputElement}
            value={this.state.inputEmail}
          />
        </p>

        <p>
          <label>
            <input onChange={this.handleChange} type='checkbox'
            checked={this.state.inputTerminos}>
            </input>
            Acepto los términos y condiciones
          </label>
        </p>

        <button>Guardar</button>

      </form>
      </div>
    )
  }
}
