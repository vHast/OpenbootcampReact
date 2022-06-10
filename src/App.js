import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'; //Importacion de componente, no hace falta la extension
import GreetingF from './components/pure/greetingF'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Greeting name="Martin"></Greeting>
          <GreetingF name="Javier"></GreetingF>
        </p>
      </header>
    </div>
  ); // En Greeting se facilita un name.prop que es Martin
}

export default App;
