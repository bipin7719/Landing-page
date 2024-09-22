import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import Banner from './Components/Home/banner';
import Home from './Components/Home/Home';
import Contacts from './Components/Contacts';
import About from './Components/About';



function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
