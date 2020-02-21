import React, { useRef } from 'react';
import phonics from './resources/phonics.js';

import Hero from './components/Hero/Hero.js';
import CardContainer from './components/CardContainer/CardContainer.js';
import Footer from './components/Footer/Footer.js';

const App = (props) => {
  const audioElement = useRef(null);
  return (
    <div className='container max-w-screen-md mx-auto text-md lg:text-xl '>
      {/* Navbar with theme toggle */}
      <Hero />
      {/* Search bar */}
      <CardContainer data={phonics} audioElement={audioElement} />
      <Footer />
      <audio ref={audioElement} />
    </div>
  );
};

export default App;
