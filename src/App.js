import React, { useEffect, useState } from 'react';
import './App.css';
// import Home from './pages/home.js';
import { auth } from './lib/firebase'
import NavBar from './components/nav.js'
import FloreriaForm from './pages/form.js';
import FloreriaList from './pages/list.js';
import FloreriaGallery from './pages/gallery';
import PrivateRoute from './components/privateRoute';
import LoginForm from './pages/login';
import { useLocalStorage } from './hooks/useLocalStorage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useNotification } from './hooks/useNotification.js';
import Order from './pages/order.js';
import MyOrders from './pages/myorders.js';

function App() {

  const [user, setUser] = useLocalStorage("user", null);
  const [localOrders, setLocalOrders] = useLocalStorage("orders", []);
  const [cart, setCart] = useState([]);
  // useNotification();
  
  function addToCart(product) {
    setCart(cart=>[...cart, product])
  }
  
  function addLocalOrder(order) {
    console.log("addLocalOrder", order)
    setLocalOrders([...localOrders, order])
  }

  useEffect(() => {
    // Verifica si el usuario está autenticado
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
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
        <NavBar cart={cart}></NavBar>
        <Routes>
          <Route path="/" exact element={<FloreriaGallery addToCart={addToCart} />}>
          </Route>
          <Route path="/gallery" exact element={<FloreriaGallery addToCart={addToCart} />}>
          </Route>
          <Route path="/formulario" element={<FloreriaForm cart={cart} addLocalOrder={addLocalOrder} />}>
          </Route>
          <Route path="/orden/:id" element={<Order cart={cart} />}>
          </Route>
          <Route path="/localOrders" element={<MyOrders localOrders={localOrders}/>}>
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
