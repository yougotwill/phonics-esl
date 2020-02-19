import React from 'react';
import phonics from './resources/phonics.js';

import Hero from './components/Hero/Hero.js';
import CardContainer from './components/CardContainer/CardContainer.js';
import Footer from './components/Footer/Footer.js';

const App = (props) => {
  return (
    <div className='container max-w-screen-md mx-auto text-md lg:text-xl '>
      {/* Navbar with theme toggle */}
      <Hero />
      {/* Search bar */}
      <CardContainer data={phonics} />
      <Footer />
    </div>
  );
};

export default App;
