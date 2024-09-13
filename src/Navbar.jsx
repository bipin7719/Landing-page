// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navbar() {
  return (
    <nav className="bg-yellow-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="TrendHub_logo.JPG" alt="TrendHub_logo" className="h-16 w-16" />
          <span className="text-white text-xl font-semibold">Name</span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-400">Services</Link>
          </li>
          <li>
            <Link to="/contacts" className="text-white hover:text-gray-400">Contacts</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
