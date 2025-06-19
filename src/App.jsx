import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import HomePage from './View/Pages/HomePage.jsx';

function App() {
  return (
    <ParallaxProvider>
      <HomePage />
    </ParallaxProvider>
  );
}

export default App;
