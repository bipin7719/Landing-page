// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import image2 from '/public/TrendHub_logo.jpg'


export default function Navbar() {
  return (
    <nav className="bg-[#f5e4e4] p-4">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <img src={image2} alt="TrendHub_logo" className="h-16 w-16 rounded-full" />
          <span className="text-black text-xl font-semibold">TrendHub</span>
        </div>
        <ul className="flex space-x-4 justify-center flex-1">
          <li>
            <Link to="/" className="text-black hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-black hover:text-gray-400">Services</Link>
          </li>
          <li>
            <Link to="/contacts" className="text-black hover:text-gray-400">Contacts</Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:text-gray-400">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
