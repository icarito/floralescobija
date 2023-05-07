import React from 'react';
import './App.css';
import Home from './pages/home.js';
import FloreriaForm from './pages/form.js';
import FloreriaList from './pages/list.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/formulario">Pedido</Link>
            </li>
            <li>
              <Link to="/lista">Lista</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home/>}>
          </Route>
          <Route path="/formulario" element={<FloreriaForm/>}>
          </Route>
          <Route path="/lista" element={<FloreriaList/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
