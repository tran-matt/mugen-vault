import React, { useState } from 'react';

const featuredItems = [
  { id: 1, name: 'Limited Edition Funko Pop', price: 15.00, image: '/Luffy.jpeg' },
  { id: 2, name: 'Signed Autograph Card', price: 1500.00, image: '/Naruto.jpeg' },
  { id: 3, name: 'Rare Trading Card Set', price: 7500.00, image: '/serialluffy.jpeg' },
];

function Featured() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };
  

  return (
    <div className="featured-container p-20">
      <h1 className="text-4xl font-bold mb-8">Featured Items</h1>
      <div className="grid grid-cols-3 gap-4">
        {featuredItems.map(item => (
          <div key={item.id} className="featured-item bg-white shadow-md p-4 rounded-lg">
            <img src={item.image} alt={item.name} className="w-full h-auto mb-4" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-lg">${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        <ul className="divide-y divide-gray-200">
          {cart.map(item => (
            <li key={item.id} className="flex items-center justify-between py-2">
              <span className="text-lg">{item.name}</span>
              <span className="text-lg">${item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Featured;
