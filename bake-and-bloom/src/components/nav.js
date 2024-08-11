import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaShoppingBasket } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-300 p-4">
      <div className="container mx-auto flex justify-around">
        <Link to="/" className="text-white text-xl">Bake Lab & Blossoms</Link>
        <Link to="/" className="text-white text-xl">Home</Link>
        <Link to="/about" className="text-white text-xl">About Us</Link>
        <Link to="/menu" className="text-white text-xl">Menu</Link>
        <Link to="/basket" className="text-white text-xl flex items-center">
          <FaShoppingBasket className="h-6 w-6 mr-1" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
