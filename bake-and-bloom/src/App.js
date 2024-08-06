import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { FaShoppingBasket } from 'react-icons/fa';

//components
import Home from '../src/components/home.js'
import AboutUs from '../src/components/aboutUs.js'
import Menu from '../src/components/menu.js'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Nav */}
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex justify-around">
          <Link to="/" className="text-white text-xl">Bake Lab & Blossoms</Link>
            <Link to="/" className="text-white text-xl">Home</Link>
            <Link to="/about" className="text-white text-xl">About Us</Link>
            <Link to="/menu" className="text-white text-xl">Menu</Link>
            <Link to="/" className="text-white text-xl flex items-center">
            <FaShoppingBasket className="h-6 w-6 mr-1" />
          </Link>
          </div>
        </nav>

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