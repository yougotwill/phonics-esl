import { useState, useEffect, useRef } from 'react';
import phonics from './resources/phonics.js';

import Hero from './components/Hero';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App = () => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPhonic, setCurrentPhonic] = useState();
  const [theme, setTheme] = useState('');

  const onPlaySound = (sound) => {
    if (!audioElement.current.paused) {
      audioElement.current.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(sound);
      audioElement.current.src = sound;
      audioElement.current.currentTime = 0;
      const audioPromise = audioElement.current.play();
      if (audioPromise !== undefined) {;
        audioPromise
        .then((result) => console.log('audio success: ', result))
        .catch(err => {
          console.log('audio error: ', err);
          audioElement.current.pause();
          setIsPlaying(false);
        });
      }
    }
  };
  const toggleModal = (event) => {
    event.stopPropagation();
    setShowModal(!showModal);
    console.log('modal', showModal);
  };

  const updateTheme = (value) => {
    localStorage.setItem('theme', value);
    setTheme(value);
    document.querySelector('body').className = value;
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const storedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : '';
    updateTheme(storedTheme);
  }, []);

  return (
    <div className='container text-center my-0 mx-auto px-2 lg:px-0 text-md lg:text-xl md:max-w-screen-md'>
      <Hero theme={theme} updateTheme={updateTheme} />
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
