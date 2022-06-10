import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Componente funcional, los componentes funcionales pueden devolver elementos HTML de manera reactiva y es mas util que la OOP

const GreetingF = (props) => { // Props hace referencia a las propiedades que se le van a pasar

  // Breve introduccion al state en componentes funcionales 
  // const {variable, metodo para actualizarlo} = useState(valor)

  const [age, setage] = useState(29); // hookn ecesario para componentes tipo funcion

  const birthday = () => {
    setage(age + 1);
  }
  return (
    <div>
        <h1>
          Hola { props.name } desde componente funcional ;
        </h1>
        <h2>
          Tu edad es de: {age}
        </h2>
        <div>
          <button onClick={birthday}>
            Cumplir años
          </button>
        </div>

      </div>
  );
};


GreetingF.propTypes = {
  name: PropTypes.string
};


export default GreetingF;
