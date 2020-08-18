import React, {Component} from 'react'

class LoginComponent extends Component {
  render() {
    return (
      <div>
        <p>Por favor, inicie sesión.</p>
        <button>Iniciar sesión</button>
      </div>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <div>
        <p>¡Bienvenido!</p>
        <button>Cerrar sesión</button>
      </div>
    );
  }
}

/*function useConditionalRendering(isUserLogged) {
  if(isUserLogged) {
    return <LogoutComponent />;
  }
  return <LoginComponent />
}*/

export default class ConditionalSection extends Component {
  constructor() {
    super();
    this.state = {isUserLogged: true};
  }
  render () {
    // Condicional con funcion
    // const conditionalComponent = useConditionalRendering(this.state.isUserLogged);

    // Condicional con ternaria
    /* const conditionalComponent = this.state.isUserLogged ?
    <LogoutComponent /> : <LoginComponent />;*/
    return (
    <div>
    <h1>Condicional renderizado</h1>
    {this.state.isUserLogged ?
    <LogoutComponent /> : <LoginComponent />}
    </div>
  )
}
}
