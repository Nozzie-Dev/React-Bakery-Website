import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import logo from '../images/logo.jpg';

const Menu = () => {
  const [selections, setSelections] = useState({
    cakeSize: '',
    cakeType: '',
    cakeDecor: '',
    cupcakeQuantity: '',
    cupcakeDecor: '',
    pieFlavor: '',
    pieQuantity: 1,
    croissantFilling: '',
    croissantQuantity: 1,
    macaroonColor: '',
    macaroonQuantity: 1,
    hotDrink: '',
    hotDrinkSize: '',
    hotDrinkSugar: '',
    hotDrinkMilk: '',
    hotDrinkAddon: ''
  });

  const [isOrderView, setIsOrderView] = useState(false);

  const handleSelectionChange = (e) => {
    const { name, value } = e.target;
    setSelections(prevSelections => ({
      ...prevSelections,
      [name]: value
    }));
  };

  const handleQuantityChange = (name, increment) => {
    setSelections(prevSelections => ({
      ...prevSelections,
      [name]: Math.max(1, prevSelections[name] + increment)
    }));
  };

  const calculatePrice = () => {
    let price = 0;

    // Cost details declaration
    if (selections.cakeSize === 'Small') price += 150;
    if (selections.cakeSize === 'Medium') price += 250;
    if (selections.cakeSize === 'Large') price += 350;

    
    price += selections.cupcakeQuantity * 10;

    
    price += selections.pieQuantity * 30;

    
    price += selections.croissantQuantity * 25;

    
    price += selections.macaroonQuantity * 15;

    
    if (selections.hotDrinkSize === 'Short') price += 20;
    if (selections.hotDrinkSize === 'Tall') price += 30;
    if (selections.hotDrinkSize === 'Grande') price += 40;

    
    if (selections.hotDrinkMilk === 'Almond' || selections.hotDrinkMilk === 'Lactose Free') price += 10;
    if (selections.hotDrinkAddon === 'Honey' || selections.hotDrinkAddon === 'Lemon') price += 5;

    return price;
  };

  const toggleOrderView = () => {
    setIsOrderView(!isOrderView);
  };

  const renderOrderSummary = () => (
    <div className="text-left">
      <h2 className="text-2xl font-bold mb-2">Order Summary</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Cake</h3>
        <p>Size: {selections.cakeSize}</p>
        <p>Type: {selections.cakeType}</p>
        <p>Decor: {selections.cakeDecor}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Cupcakes</h3>
        <p>Quantity: {selections.cupcakeQuantity}</p>
        <p>Decor: {selections.cupcakeDecor}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Pie</h3>
        <p>Flavour: {selections.pieFlavor}</p>
        <p>Quantity: {selections.pieQuantity}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Croissant</h3>
        <p>Filling: {selections.croissantFilling}</p>
        <p>Quantity: {selections.croissantQuantity}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Macaroon</h3>
        <p>Color: {selections.macaroonColor}</p>
        <p>Quantity: {selections.macaroonQuantity}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Hot Drink</h3>
        <p>Size: {selections.hotDrinkSize}</p>
        <p>Sugar: {selections.hotDrinkSugar}</p>
        <p>Milk: {selections.hotDrinkMilk}</p>
        <p>Add-on: {selections.hotDrinkAddon}</p>
      </div>
      <p className="text-xl font-bold">Total Price: R{calculatePrice()}</p>
    </div>
  );

  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
      <button onClick={toggleOrderView} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        {isOrderView ? 'Back to Menu' : 'View Order'}
      </button>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${isOrderView ? 'hidden' : ''}`}>
        {/* Cakes */}
        <div className="relative bg-white bg-opacity-50 shadow-md rounded-lg p-4">
          <img src={logo} alt="Cake" className="w-full opacity-10 absolute top-0 left-0 h-full object-cover rounded-lg" />
          <div className="relative">
            <h2 className="text-2xl font-bold mt-2">Birthday Cake</h2>
            <div className="mt-2 text-left">
              <label className="block"><strong>Size:</strong></label>
              <select name="cakeSize" value={selections.cakeSize} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>

              <label className="block"><strong>Type:</strong></label>
              <select name="cakeType" value={selections.cakeType} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Single Tier">Single Tier</option>
                <option value="Double Tier">Double Tier</option>
                <option value="Triple Tier">Triple Tier</option>
              </select>

              <label className="block"><strong>Decor:</strong></label>
              <select name="cakeDecor" value={selections.cakeDecor} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Fondant">Fondant</option>
                <option value="Fresh Cream">Fresh Cream</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Cupcakes */}
        <div className="relative bg-white bg-opacity-50 shadow-md rounded-lg p-4">
          <img src={logo} alt="Cupcake" className="w-full opacity-10 absolute top-0 left-0 h-full object-cover rounded-lg" />
          <div className="relative">
            <h2 className="text-2xl font-bold mt-2">Thank You Cupcake</h2>
            <div className="mt-2 text-left">
              <label className="block"><strong>Quantity:</strong></label>
              <select name="cupcakeQuantity" value={selections.cupcakeQuantity} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
              </select>

              <label className="block"><strong>Decor:</strong></label>
              <select name="cupcakeDecor" value={selections.cupcakeDecor} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Printed Edible Paper">Printed Edible Paper</option>
                <option value="Fondant">Fondant</option>
                <option value="Icing">Icing</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Pies */}
        <div className="relative bg-white bg-opacity-50 shadow-md rounded-lg p-4">
          <img src={logo} alt="Pie" className="w-full opacity-10 absolute top-0 left-0 h-full object-cover rounded-lg" />
          <div className="relative">
            <h2 className="text-2xl font-bold mt-2">Pie</h2>
            <div className="mt-2 text-left">
              <label className="block"><strong>Flavor:</strong></label>
              <select name="pieFlavor" value={selections.pieFlavor} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Apple">Apple</option>
                <option value="Cherry">Cherry</option>
                <option value="Pumpkin">Pumpkin</option>
                <option value="Mutton Curry">Mutton Curry</option>
                <option value="Pepper Steak">Pepper Steak</option>
                <option value="Tikka Chicken">Tikka Chicken</option>
                <option value="Chicken & Mushroom">Chicken & Mushroom</option>
              </select>

              <label className="block mt-2"><strong>Quantity:</strong></label>
              <div className="flex items-center">
                <button onClick={() => handleQuantityChange('pieQuantity', -1)} className="p-2 border rounded-l"><FaArrowDown /></button>
                <span className="px-4 border-t border-b">{selections.pieQuantity}</span>
                <button onClick={() => handleQuantityChange('pieQuantity', 1)} className="p-2 border rounded-r"><FaArrowUp /></button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Croissants */}
        <div className="relative bg-white bg-opacity-50 shadow-md rounded-lg p-4">
          <img src={logo} alt="Croissant" className="w-full opacity-10 absolute top-0 left-0 h-full object-cover rounded-lg" />
          <div className="relative">
            <h2 className="text-2xl font-bold mt-2">Croissant</h2>
            <div className="mt-2 text-left">
              <label className="block"><strong>Filling:</strong></label>
              <select name="croissantFilling" value={selections.croissantFilling} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Almond">Almond</option>
                <option value="Cream">Cream</option>
              </select>

              <label className="block mt-2"><strong>Quantity:</strong></label>
              <div className="flex items-center">
                <button onClick={() => handleQuantityChange('croissantQuantity', -1)} className="p-2 border rounded-l"><FaArrowDown /></button>
                <span className="px-4 border-t border-b">{selections.croissantQuantity}</span>
                <button onClick={() => handleQuantityChange('croissantQuantity', 1)} className="p-2 border rounded-r"><FaArrowUp /></button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Macaroons */}
        <div className="relative bg-white bg-opacity-50 shadow-md rounded-lg p-4">
          <img src={logo} alt="Macaroon" className="w-full opacity-10 absolute top-0 left-0 h-full object-cover rounded-lg" />
          <div className="relative">
            <h2 className="text-2xl font-bold mt-2">Macaroon</h2>
            <div className="mt-2 text-left">
              <label className="block"><strong>Color:</strong></label>
              <select name="macaroonColor" value={selections.macaroonColor} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
              </select>

              <label className="block mt-2"><strong>Quantity:</strong></label>
              <div className="flex items-center">
                <button onClick={() => handleQuantityChange('macaroonQuantity', -1)} className="p-2 border rounded-l"><FaArrowDown /></button>
                <span className="px-4 border-t border-b">{selections.macaroonQuantity}</span>
                <button onClick={() => handleQuantityChange('macaroonQuantity', 1)} className="p-2 border rounded-r"><FaArrowUp /></button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hot Drinks */}
        <div className="relative bg-white bg-opacity-50 shadow-md rounded-lg p-4">
          <img src={logo} alt="Hot Drink" className="w-full opacity-10 absolute top-0 left-0 h-full object-cover rounded-lg" />
          <div className="relative">
            <h2 className="text-2xl font-bold mt-2">Hot Drink</h2>
            <div className="mt-2 text-left">
              <label className="block"><strong>Size:</strong></label>
              <select name="hotDrinkSize" value={selections.hotDrinkSize} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Short">Short</option>
                <option value="Tall">Tall</option>
                <option value="Grande">Grande</option>
              </select>

              <label className="block"><strong>Sugar:</strong></label>
              <select name="hotDrinkSugar" value={selections.hotDrinkSugar} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Brown">Brown</option>
                <option value="White">White</option>
                <option value="Sweetener">Sweetener</option>
              </select>

              <label className="block"><strong>Milk:</strong></label>
              <select name="hotDrinkMilk" value={selections.hotDrinkMilk} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Almond">Almond (+R10)</option>
                <option value="Lactose Free">Lactose Free (+R10)</option>
                <option value="Full Cream">Full Cream</option>
                <option value="Low Fat">Low Fat</option>
              </select>

              <label className="block"><strong>Add-on:</strong></label>
              <select name="hotDrinkAddon" value={selections.hotDrinkAddon} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Honey">Honey (+R5)</option>
                <option value="Lemon">Lemon (+R5)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {isOrderView && (
        <div className="text-left mt-4">
          <h2 className="text-2xl font-bold mb-2">Order Summary</h2>
          {renderOrderSummary()}
        </div>
      )}
    </div>
  );
};

export default Menu;
