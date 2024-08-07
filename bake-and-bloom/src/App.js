import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { FaShoppingBasket } from 'react-icons/fa';

//components
import Home from '../src/components/home.js'
import AboutUs from '../src/components/aboutUs.js'
import Menu from '../src/components/menu.js'
import Nav from '../src/components/nav.js'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Nav */}
        <Nav />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;