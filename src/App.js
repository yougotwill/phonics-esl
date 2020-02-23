import React, { useState, useRef } from 'react';
import phonics from './resources/phonics.js';

import Hero from './components/Hero/Hero.js';
import CardContainer from './components/CardContainer/CardContainer.js';
import Footer from './components/Footer/Footer.js';
import Modal from './components/Modal/Modal.js';

const App = (props) => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPhonic, setCurrentPhonic] = useState();

  const onPlaySound = (sound) => {
    if (!audioElement.current.paused) {
      audioElement.current.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(sound);
      audioElement.current.src = sound;
      audioElement.current.currentTime = 0;
      audioElement.current.play();
    }
  };
  const toggleModal = (event) => {
    event.stopPropagation();
    setShowModal(!showModal);
    console.log('modal', showModal);
  };

  return (
    <div className='container max-w-screen-md mx-auto text-md lg:text-xl '>
      {/* Navbar with theme toggle */}
      <Hero />
      {/* Search bar */}
      <CardContainer
        data={phonics}
        isPlaying={isPlaying}
        handlePlaySound={onPlaySound}
        handleModal={toggleModal}
        handleSetPhonic={setCurrentPhonic}
      />
      <Footer />
      <audio ref={audioElement} onEnded={() => { setIsPlaying(false); }} />
      {showModal
        ? <Modal handleToggleModal={toggleModal} phonic={currentPhonic} />
        : null}
    </div>
  );
};

export default App;
