import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Home/banner';
import Home from './Components/Home/Home';
import About from './Components/About';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import ProductPage from './Components/Products/ProductPage';



function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductPage />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
