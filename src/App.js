import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/counter/Counter';
import ItemDetailsContainer from './components/detalles/ItemDetailsContainer/ItemDetailsContainer';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ContactoPage } from './components/Contacto/ContactoPage';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
          <div>
            <ItemDetailsContainer/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/contacto' element={<ContactoPage/>}/>
              <Route path='/productos/camisas' element={<ItemListContainer/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>  
  );
}

export default App;
