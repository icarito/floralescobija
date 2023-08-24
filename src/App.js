import React from 'react';
import './App.css';
import Home from './pages/home.js';
import FloreriaForm from './pages/form.js';
import FloreriaList from './pages/list.js';
import FloreriaGallery from './pages/gallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faShoppingCart, faSeedling } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faSeedling} />
              </Link>
            </li>
            <li>
              <Link to="/formulario">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </li>
            <li>
              <Link to="/lista">
                <FontAwesomeIcon icon={faListCheck} />
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<FloreriaGallery />}>
          </Route>
          <Route path="/gallery" exact element={<FloreriaGallery />}>
          </Route>
          <Route path="/formulario" element={<FloreriaForm />}>
          </Route>
          <Route path="/lista" element={<FloreriaList />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
