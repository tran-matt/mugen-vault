import React from 'react';

const featuredItems = [
  { id: 1, name: 'Limited Edition Funko Pop', price: '$25.00', image: '/path-to-image-1.jpg' },
  { id: 2, name: 'Signed Autograph Card', price: '$150.00', image: '/path-to-image-2.jpg' },
  { id: 3, name: 'Rare Trading Card Set', price: '$75.00', image: '/path-to-image-3.jpg' },
];

function Featured() {
  return (
    <div className="featured-container p-20">
      <h1 className="text-4xl font-bold mb-8">Featured Items</h1>
      <div className="grid grid-cols-3 gap-4">
        {featuredItems.map(item => (
          <div key={item.id} className="featured-item bg-white shadow-md p-4 rounded-lg">
            <img src={item.image} alt={item.name} className="w-full h-auto mb-4" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-lg">{item.price}</p>
            {/* Add more details or a "Add to Cart" button here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
