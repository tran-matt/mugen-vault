import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import Featured from './Featured';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/featured" element={<Featured />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
