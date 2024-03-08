import React from 'react';

function Home() {
  return (
    <div className="home-container bg-black text-white flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="hero-section bg-cover bg-center p-20" style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}>
        <h1 className="text-5xl font-bold mb-4">Unlock the World of Collectibles!</h1>
        <p className="text-2xl mb-8">Explore our exclusive range of Funkos, Autographs, Trading Cards, and more!</p>
        <a href="/shop" className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">Start Collecting</a>
      </div>

      {/* Featured Collections Section */}
      <div className="featured-collections-section py-10 px-4 md:px-20">
        <h2 className="text-4xl font-bold mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Add your featured collection cards here */}
          <div className="collection-card bg-gray-800 shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Latest Funkos</h3>
            {/* Add more details or images */}
          </div>
          <div className="collection-card bg-gray-800 shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Rare Autographs</h3>
            {/* Add more details or images */}
          </div>
          <div className="collection-card bg-gray-800 shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Trending Trading Cards</h3>
            {/* Add more details or images */}
          </div>
        </div>
      </div>

  
    </div>
  );
}

export default Home;
