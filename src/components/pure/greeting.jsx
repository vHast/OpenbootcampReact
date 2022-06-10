// rcc (React Class Component)

/* Import React no es necesario pero indica que estas importando contenido React */
import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; // PropTypes nos facilita el tipo de dato que estamos pasandole

//Un componente es un elemente reutilizable, los componentes son reactivos, es decir que sean dinamicos

//Los componentes son autocontenidos aunque pueden tener relaciones con otros componentes

class Greeting extends Component {
  

  constructor(props) {
    super(props);
    this.state = { // El state es privado y inmutable (componentes tipo clase)
      age: 29
    }
  }
  render() { // Render SIEMPRE tiene que devolver un return con contenido HTML entre parentesis, en JSX no podemos renderizar mas de un elemento
    return ( 
      <div>
        <h1>
          Hola { this.props.name } ;
        </h1>
        <h2>
          Tu edad es de: { this.state.age}
        </h2>
        <div>
          <button onClick={this.birthday}>
            Cumplir años
          </button>
        </div>
      </div>
    );
  }

  birthday = () => { // Es importante que sea de tipo flecha
    this.setState((prevState) => ( // Podremos hacer uso de .this ya que es funcion flecha
      {
        age: prevState.age + 1,
      }
    ))
  }
}
    


Greeting.propTypes = { // propTypes es el contenido que yo le puedo pasar a un componente desde un componente superior
  name: PropTypes.string, //Mencionamos el tipo de dato de name
};
// Las clases van con mayuscula

export default Greeting;