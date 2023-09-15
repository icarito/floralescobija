import React, { useEffect } from 'react';
import './App.css';
// import Home from './pages/home.js';
import { auth } from './lib/firebase'
import FloreriaForm from './pages/form.js';
import FloreriaList from './pages/list.js';
import FloreriaGallery from './pages/gallery';
import PrivateRoute from './components/privateRoute';
import LoginForm from './pages/login';
import { useLocalStorage } from './hooks/useLocalStorage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faShoppingCart, faSeedling } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [user, setUser] = useLocalStorage("user", null);
  
  useEffect(() => {
    // Verifica si el usuario está autenticado
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser)
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(false);
      }
    });

    return () => {
      // Limpia el observador cuando el componente se desmonta
      unsubscribe();
    };
  }, []);

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
          <Route path="/lista" element={
            <PrivateRoute><FloreriaList /></PrivateRoute>
          }>
          </Route>
          <Route path="/login" element={<LoginForm />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
