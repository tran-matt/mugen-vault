import React from 'react';

function About() {
  return (
    <div className="about-container p-20">
      <h1 className="text-4xl font-bold mb-8">About Mugen Vault</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6"> {/* Card styling */}
        <p className="text-lg mb-4">
          Welcome to Mugen Vault, your premier destination for all things collectible! We are passionate about helping collectors find the treasures they seek, whether it's the latest Funko Pop, a rare autographed item, or a sought-after trading card.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6"> {/* Card styling */}
        <p className="text-lg mb-4">
          Founded in 2024 by a group of avid collectors, Mugen Vault has grown from a small hobbyist venture into a thriving community of enthusiasts. Our mission is to provide a wide selection of high-quality collectibles, exceptional customer service, and a seamless shopping experience.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6"> {/* Card styling */}
        <p className="text-lg">
          Whether you're a seasoned collector or just starting out, Mugen Vault is here to help you explore your passion and expand your collection. Join us on this exciting journey and discover the endless possibilities of collecting!
        </p>
      </div>
    </div>
  );
}

export default About;
