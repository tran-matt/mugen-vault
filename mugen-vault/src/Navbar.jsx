import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Featured', path: '/featured' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Mugen Vault</Link>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-gray-300">{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
