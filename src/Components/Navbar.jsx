// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import image2 from '/public/th_logo.png'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";


export default function Navbar() {
  return (
    <nav className="bg-[#d4be90] p-4">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <img src={image2} alt="TrendHub_logo" className="h-16 w-16 rounded-full" />
          <span className="text-black text-xl font-semibold">TrendHub</span>
        </div>
        <ul className="flex space-x-4 justify-center flex-1">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-gray-400">Products</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          </li>
        
        </ul>
        <div><MdOutlineDarkMode color='white' /></div>
      </div>
      
    </nav>
  );
}
