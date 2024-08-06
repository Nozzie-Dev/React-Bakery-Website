import React from 'react';
import logo from '../images/logo.jpg';

const  Menu = () => (
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
  
  export default Menu;
  