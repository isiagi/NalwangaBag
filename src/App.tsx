import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Context } from './components/context/Context';
import Detail from './components/ui/detail/Detail';
import Cart from './components/ui/cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Context>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Context>
      </Router>
    </div>
  );
}

export default App;
