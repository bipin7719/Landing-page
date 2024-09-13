import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './banner';

const Home = () => <div>Home Page Content</div>;
const Services = () => <div>Services Page Content</div>;
const Contacts = () => <div>Contacts Page Content</div>;
const About = () => <div>About Page Content</div>;

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
