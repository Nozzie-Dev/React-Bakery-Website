import React from 'react';
import cake from '../images/pexels-about.jpg';
import flowers from '../images/pexels-flowers.jpg';

const AboutUs = () => (
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        
        <div className="flex justify-center items-center ">
        <img src={cake} alt="cake and slogan image" className="w-[200px] h-[200px] shadow-lg shadow-pink-500 rounded-lg" />
        </div>

          <p className="text-lg">
             Remember banana bread quarentine?! Well our founder did not stop there.
          You can now enjoy a well crafted range of baked good. Perfect to special events
          or personal indulgance. <span>Have your cake, and eat it too!</span></p>
  
          <h2 className="text-2xl font-bold style-italic">Coming Soon...</h2>
          <div className="flex justify-center items-center ">
        <img src={flowers} alt="flower arrangements image" className="w-[300px] h-[200px] shadow-lg shadow-purple-500 rounded-lg" />
        </div>
          <p className="text-lg">
            The brain child of a true girlies girl, we will be bringing you beautifuly curated 
            and customized floral arrangements. To meet your every need, sharing love, romance,
            adoration or just random spoils. Let us deliver beautiful blooms to you and yours.
          </p>
      </div>
    );
  
export default AboutUs;