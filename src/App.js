import React from 'react';
import './styles/App.scss';
import phonics from './resources/phonics.js';

import Hero from './components/Hero/Hero.js';
import CardContainer from './components/CardContainer/CardContainer.js';
import Footer from './components/Footer/Footer.js';

/**
 *  Notes
 *  - Using Tailwind as an npm packagr from practice
 *  - Long term a user should be able to type in a word and it would be broken down into it's phonetic sounds
 */

const App = (props) => {
  return (
    <div className='App'>
      {/* LONG TERM: Header with light / dark theme toggle */}
      <Hero />
      {/* Search bar */}
      {/* Container for Phonics cards (should read in data from a JSON file) */}
      <CardContainer data={phonics} />
      {/* Footer (open source love and source code link */}
      <Footer />
    </div>
  );
};

export default App;
