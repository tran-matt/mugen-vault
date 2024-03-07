import React from 'react';

function Home() {
  return (
    <div className="home-container">
        
      {/* Hero Section */}
      <div className="hero-section bg-cover bg-center text-white p-20" style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}>
        <h1 className="text-5xl font-bold mb-4">Unlock the World of Collectibles!</h1>
        <p className="text-2xl mb-8">Explore our exclusive range of Funkos, Autographs, Trading Cards, and more!</p>
        <a href="/shop" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Collecting</a>
      </div>

      {/* Featured Collections Section */}
      <div className="featured-collections-section p-20">
        <h2 className="text-4xl font-bold mb-8">Featured Collections</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Add your featured collection cards here */}
          <div className="collection-card bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Latest Funkos</h3>
            {/* Add more details or images */}
          </div>
          <div className="collection-card bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Rare Autographs</h3>
            {/* Add more details or images */}
          </div>
          <div className="collection-card bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Trending Trading Cards</h3>
            {/* Add more details or images */}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="call-to-action-section bg-blue-500 text-white p-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Join the Mugen Vault Community</h2>
        <p className="text-2xl mb-8">Sign up for our newsletter to get the latest updates on new arrivals and special offers.</p>
        <a href="/signup" className="bg-white text-blue-500 font-bold py-2 px-4 rounded">Sign Up Now</a>
      </div>
    </div>
    
  );
}

export default Home;
