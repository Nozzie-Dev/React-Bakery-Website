import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown, FaShoppingCart } from 'react-icons/fa';
import logo from '../images/logo.jpg';
import cake from '../images/pexels-cake.jpg';
import cupcake from '../images/pexels-cupcake.jpg';
import pie from '../images/pexels-pie.jpg';
import croissant from '../images/pexels-croissant.jpg';
import macaroon from '../images/pexels-macaroons.jpg';
import hotDrink from '../images/pexels-hot-drink.jpg';

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
    hotDrinkSize: '',
    hotDrinkSugar: '',
    hotDrinkMilk: '',
    hotDrinkAddon: '',
    hotDrinkQuantity: 1,
    cakeFlavor: '',
    cakeQuantity: 1
  });

  const [flippedCard, setFlippedCard] = useState(null);
  //useful for cart management in e-commerce website
  const [orderBasket, setOrderBasket] = useState([]);

  const costs = {
    cake: {
      Small: 150,
      Medium: 250,
      Large: 350
    },
    cupcake: 10,
    pie: 30,
    croissant: 25,
    macaroon: 15,
    hotDrink: {
      Short: 20,
      Tall: 30,
      Grande: 40,
      MilkAddon: 10,
      Addon: 5
    }
  };

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

  const viewOrder = (cardType) => {
    setFlippedCard(flippedCard === cardType ? null : cardType);
  };
  
  //function to calculate cost
  const addToBasket = (itemType) => {
    const { cakeSize, cupcakeQuantity, pieQuantity, croissantQuantity, macaroonQuantity, hotDrinkQuantity, cakeQuantity } = selections;
    let itemCost = 0;
      
    switch (itemType) {
      case 'cake':
        itemCost = costs.cake[cakeSize] || 0;
        setOrderBasket(prevBasket => [...prevBasket, { type: 'cake', quantity: cakeQuantity, cost: itemCost * cakeQuantity }]);
        break;
      case 'cupcake':
        itemCost = costs.cupcake;
        setOrderBasket(prevBasket => [...prevBasket, { type: 'cupcake', quantity: cupcakeQuantity, cost: itemCost * cupcakeQuantity }]);
        break;
      case 'pie':
        itemCost = costs.pie;
        setOrderBasket(prevBasket => [...prevBasket, { type: 'pie', quantity: pieQuantity, cost: itemCost * pieQuantity }]);
        break;
      case 'croissant':
        itemCost = costs.croissant;
        setOrderBasket(prevBasket => [...prevBasket, { type: 'croissant', quantity: croissantQuantity, cost: itemCost * croissantQuantity }]);
        break;
      case 'macaroon':
        itemCost = costs.macaroon;
        setOrderBasket(prevBasket => [...prevBasket, { type: 'macaroon', quantity: macaroonQuantity, cost: itemCost * macaroonQuantity }]);
        break;
      case 'hotDrink':
        itemCost = (costs.hotDrink[selections.hotDrinkSize] || 0) + 
                   (selections.hotDrinkMilk === 'Almond' || selections.hotDrinkMilk === 'Lactose Free' ? costs.hotDrink.MilkAddon : 0) +
                   (selections.hotDrinkAddon === 'Honey' || selections.hotDrinkAddon === 'Lemon' ? costs.hotDrink.Addon : 0);
        setOrderBasket(prevBasket => [...prevBasket, { type: 'hotDrink', quantity: hotDrinkQuantity, cost: itemCost * hotDrinkQuantity }]);
        break;
      default:
        break;
    }
  };

  const calculatePrice = () => {
    let price = 0;
    
    if (selections.cakeSize) price += costs.cake[selections.cakeSize] || 0;
    price += (selections.cupcakeQuantity || 0) * costs.cupcake;
    price += (selections.pieQuantity || 0) * costs.pie;
    price += (selections.croissantQuantity || 0) * costs.croissant;
    price += (selections.macaroonQuantity || 0) * costs.macaroon;

    if (selections.hotDrinkSize) price += costs.hotDrink[selections.hotDrinkSize] || 0;
    if (selections.hotDrinkMilk === 'Almond' || selections.hotDrinkMilk === 'Lactose Free') price += costs.hotDrink.MilkAddon;
    if (selections.hotDrinkAddon === 'Honey' || selections.hotDrinkAddon === 'Lemon') price += costs.hotDrink.Addon;

    return price;
  };

  const showOrderSummary = (itemType) => {
    const itemCost = calculatePrice();
    const itemDetails = {
      cake: {
        title: 'Cake',
        details: `Size: ${selections.cakeSize}, Type: ${selections.cakeType}, Decor: ${selections.cakeDecor}`,
        cost: costs.cake[selections.cakeSize] || 0,
        image: cake
      },
      cupcake: {
        title: 'Cupcake',
        details: `Quantity: ${selections.cupcakeQuantity}, Decor: ${selections.cupcakeDecor}`,
        cost: costs.cupcake * (selections.cupcakeQuantity || 0),
        image: cupcake 
      },
      pie: {
        title: 'Pie',
        details: `Flavor: ${selections.pieFlavor}, Quantity: ${selections.pieQuantity}`,
        cost: costs.pie * (selections.pieQuantity || 0),
        image: pie  
      },
      croissant: {
        title: 'Croissant',
        details: `Filling: ${selections.croissantFilling}, Quantity: ${selections.croissantQuantity}`,
        cost: costs.croissant * (selections.croissantQuantity || 0),
        image: croissant 
      },
      macaroon: {
        title: 'Macaroon',
        details: `Color: ${selections.macaroonColor}, Quantity: ${selections.macaroonQuantity}`,
        cost: costs.macaroon * (selections.macaroonQuantity || 0),
        image: macaroon 
      },
      hotDrink: {
        title: 'Hot Drink',
        details: `Size: ${selections.hotDrinkSize}, Sugar: ${selections.hotDrinkSugar}, Milk: ${selections.hotDrinkMilk}, Add-on: ${selections.hotDrinkAddon}, Quantity: ${selections.hotDrinkQuantity}`,
        cost: (costs.hotDrink[selections.hotDrinkSize] || 0) + 
              (selections.hotDrinkMilk === 'Almond' || selections.hotDrinkMilk === 'Lactose Free' ? costs.hotDrink.MilkAddon : 0) +
              (selections.hotDrinkAddon === 'Honey' || selections.hotDrinkAddon === 'Lemon' ? costs.hotDrink.Addon : 0),
        image: hotDrink 
      }
    };

    const { title, details, cost, image } = itemDetails[itemType] || {};
    
    return (
      //format for individual item bill
      <div>
        <img src={image} alt={title} className="w-full h-100% object-cover mb-2 rounded-lg" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{details}</p>
        <p className="text-xl font-bold">Total Price: R{cost.toFixed(2)}</p>
        <button onClick={() => addToBasket(itemType)} className="mt-2 px-4 py-2 bg-purple-500 text-white rounded flex items-center">
          Add to Basket <FaShoppingCart className="ml-2" />
        </button>
      </div>
    );
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Cakes */}
        <div className={`relative bg-white bg-opacity-50 shadow-md rounded-lg p-4 ${flippedCard === 'cake' ? 'flipped' : ''}`}>
          <img src={logo} alt="Cake" className="w-full opacity-10 absolute top-0 left-0 h-full object-cover rounded-lg" />
          <div className="relative">
            <h2 className="text-2xl font-bold mt-2">Cake</h2>
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
              
              <button onClick={() => viewOrder('cake')} className="mt-2 px-4 py-2 bg-pink-500 text-white rounded">
                {flippedCard === 'cake' ? 'Back' : 'View Order'}
              </button>
            </div>
          </div>
          {flippedCard === 'cake' && showOrderSummary('cake')}
        </div>

        {/* Cupcakes */}
        <div className={`relative bg-white bg-opacity-50 shadow-md rounded-lg p-4 ${flippedCard === 'cupcake' ? 'flipped' : ''}`}>
          <img src={logo} alt="Cupcake" className="w-full opacity-10 absolute top-0 left-0 h-full object-cover rounded-lg" />
          <div className="relative">
            <h2 className="text-2xl font-bold mt-2">Cupcake</h2>
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

              <button onClick={() => viewOrder('cupcake')} className="mt-2 px-4 py-2 bg-pink-500 text-white rounded">
                {flippedCard === 'cupcake' ? 'Back' : 'View Order'}
              </button>
            </div>
          </div>
          {flippedCard === 'cupcake' && showOrderSummary('cupcake')}
        </div>
        
        {/* Pies */}
        <div className={`relative bg-white bg-opacity-50 shadow-md rounded-lg p-4 ${flippedCard === 'pie' ? 'flipped' : ''}`}>
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

              <button onClick={() => viewOrder('pie')} className="mt-2 px-4 py-2 bg-pink-500 text-white rounded">
                {flippedCard === 'pie' ? 'Back' : 'View Order'}
              </button>
            </div>
          </div>
          {flippedCard === 'pie' && showOrderSummary('pie')}
        </div>
        
        {/* Croissants */}
        <div className={`relative bg-white bg-opacity-50 shadow-md rounded-lg p-4 ${flippedCard === 'croissant' ? 'flipped' : ''}`}>
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

              <button onClick={() => viewOrder('croissant')} className="mt-2 px-4 py-2 bg-pink-500 text-white rounded">
                {flippedCard === 'croissant' ? 'Back' : 'View Order'}
              </button>
            </div>
          </div>
          {flippedCard === 'croissant' && showOrderSummary('croissant')}
        </div>
        
        {/* Macaroons */}
        <div className={`relative bg-white bg-opacity-50 shadow-md rounded-lg p-4 ${flippedCard === 'macaroon' ? 'flipped' : ''}`}>
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
                <option value="Pink">Pink</option>
              </select>

              <label className="block mt-2"><strong>Quantity:</strong></label>
              <div className="flex items-center">
                <button onClick={() => handleQuantityChange('macaroonQuantity', -1)} className="p-2 border rounded-l"><FaArrowDown /></button>
                <span className="px-4 border-t border-b">{selections.macaroonQuantity}</span>
                <button onClick={() => handleQuantityChange('macaroonQuantity', 1)} className="p-2 border rounded-r"><FaArrowUp /></button>
              </div>

              <button onClick={() => viewOrder('macaroon')} className="mt-2 px-4 py-2 bg-pink-500 text-white rounded">
                {flippedCard === 'macaroon' ? 'Back' : 'View Order'}
              </button>
            </div>
          </div>
          {flippedCard === 'macaroon' && showOrderSummary('macaroon')}
        </div>
        
        {/* Hot Drinks */}
        <div className={`relative bg-white bg-opacity-50 shadow-md rounded-lg p-4 ${flippedCard === 'hotDrink' ? 'flipped' : ''}`}>
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
                <option value="No Sugar">No Sugar</option>
                <option value="White">White</option>
                <option value="Brown">Brown</option>
                <option value="Sweetner">Sweetner</option>
              </select>

              <label className="block"><strong>Milk:</strong></label>
              <select name="hotDrinkMilk" value={selections.hotDrinkMilk} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="Full-cream">Full Cream</option>
                <option value="Low-fat">Low Fat</option>
                <option value="Skim">Skim</option>
                <option value="Almond">Almond</option>
                <option value="Lactose Free">Lactose Free</option>
              </select>

              <label className="block"><strong>Add-on:</strong></label>
              <select name="hotDrinkAddon" value={selections.hotDrinkAddon} onChange={handleSelectionChange} className="w-full mt-1 mb-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="None">None</option>
                <option value="Honey">Honey</option>
                <option value="Lemon">Lemon</option>
              </select>

              <label className="block mt-2"><strong>Quantity:</strong></label>
              <div className="flex items-center">
                <button onClick={() => handleQuantityChange('hotDrinkQuantity', -1)} className="p-2 border rounded-l"><FaArrowDown /></button>
                <span className="px-4 border-t border-b">{selections.hotDrinkQuantity}</span>
                <button onClick={() => handleQuantityChange('hotDrinkQuantity', 1)} className="p-2 border rounded-r"><FaArrowUp /></button>
              </div>

              <button onClick={() => viewOrder('hotDrink')} className="mt-2 px-4 py-2 bg-pink-500 text-white rounded">
                {flippedCard === 'hotDrink' ? 'Back' : 'View Order'}
              </button>
            </div>
          </div>
          {flippedCard === 'hotDrink' && showOrderSummary('hotDrink')}
        </div>
      </div>
    </div>
  );
};

export default Menu;
