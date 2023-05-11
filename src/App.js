import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import RecipeCarousel from './Components/RecipeCarousel';
import Articles from './Components/Articles';
import Footer from './Components/Footer';

function App() {


  return (
    <div>
      <Home />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
