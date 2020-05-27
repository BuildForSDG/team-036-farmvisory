import React from 'react';
import './App.css';
import Navbar from "./Components/navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Product from './Components/Product';
import Services from './Components/services/Services';
import Contact from './Components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
