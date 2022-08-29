import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './components/MiPrimerComponente';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer>
          <div>Hola a Todos</div>
        </ItemListContainer>
      </header>
    </div>
  );
}

export default App;
