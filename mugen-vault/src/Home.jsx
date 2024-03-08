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

        </div>

  );
}

export default Home;
