import React from 'react';
import logoImage from '../images/logo.jpg';

const Home = () => (
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Bakery!</h1>
        <img src={logoImage} alt="Logo Image" className="mx-auto" />
      </div>
    );
  

export default Home;
