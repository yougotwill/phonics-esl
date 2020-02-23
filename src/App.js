import React, { useState, useRef } from 'react';
import phonics from './resources/phonics.js';

import Hero from './components/Hero/Hero.js';
import CardContainer from './components/CardContainer/CardContainer.js';
import Footer from './components/Footer/Footer.js';
import Modal from './components/Modal/Modal.js';

const App = (props) => {
  const audioElement = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (event) => {
    event.stopPropagation();
    setShowModal(!showModal);
    console.log('opened modal');
  };

  return (
    <div className='container max-w-screen-md mx-auto text-md lg:text-xl '>
      {/* Navbar with theme toggle */}
      <Hero />
      {/* Search bar */}
      <CardContainer
        data={phonics}
        audioElement={audioElement}
        handleModal={toggleModal} />
      <Footer />
      <audio ref={audioElement} />
      { showModal
        ? <Modal handleContents={(e) => { toggleModal(); }} onMouseLeave={(e) => { toggleModal(); }} />
        : null
      }
    </div>
  );
};

export default App;
