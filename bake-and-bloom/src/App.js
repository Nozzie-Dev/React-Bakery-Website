import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { FaShoppingBasket } from 'react-icons/fa';
import logo from '../src/images/logo.jpg';
//components
import Home from '../src/components/home.js'
import AboutUs from '../src/components/aboutUs.js'

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


//Menu
function Menu() {
  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src={logo} alt="Cake" className="w-full" />
          <h2 className="text-2xl font-bold mt-2">Birthday Cake</h2>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src={logo} alt="Cupcake" className="w-full" />
          <h2 className="text-2xl font-bold mt-2">Thank You Cupcake (12)</h2>
        </div>
        
      </div>
    </div>
  );
}

export default App;
