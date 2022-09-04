import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/counter/Counter';
import { useState } from 'react';
function App() {
  const [contadorPadre, setContadorPadre] = useState(0);
  const sumarPadre = () => {
    setContadorPadre(contadorPadre + 2)
  }
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer greeting="holaa"/>

        <Counter numero={contadorPadre}/>
        <button onClick={sumarPadre}>Sumar al padre</button>

      </header>
    </div>
  );
}

export default App;
