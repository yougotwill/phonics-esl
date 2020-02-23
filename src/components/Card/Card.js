import React, { useState } from 'react';

import infoPng from '../../resources/icons/info.png';

const Card = ({
  text,
  image,
  sound,
  examples,
  secondary,
  audioElement,
  handleModal
}) => {
  const [intervalId, setIntervalId] = useState();
  const examplesList = examples.map((item, index) => {
    if (index < examples.length - 1) {
      item += ', ';
    }
    return item;
  });
  const playSound = () => {
    audioElement.current.src = sound;
    audioElement.current.currentTime = 0;
    audioElement.current.play();
    console.log('playing:', sound);
  };
  const stopSound = () => {
    audioElement.current.pause();
    console.log('stopped:', sound);
    clearInterval(intervalId);
    console.log('cleared previous interval', intervalId);
  }
  const handlePlay = () => {
    playSound();
    console.log('new interval', intervalId);
    setIntervalId(setInterval(stopSound, 5000));
  }
  return (
    <div className='my-6 mx-auto md:mx-4 w-20 h-20 relative flex justify-center items-center text-center bg-orange-200 rounded-md border-2 border-orange-300 card tooltip' onClick={handlePlay}>
      <h3 className={secondary ? 'text-2xl font-black select-none' : 'text-2xl select-none'}>{text}</h3>
      <div className='absolute text-center tooltip-text' onClick={handleModal}>
        <div className='py-2 px-auto rounded-md'>
          <p>{examplesList}<img className='w-6 h-6 mb-1 ml-2 inline' src={infoPng} alt='info'/></p>
        </div>
        <p className='mx-auto tooltip-triangle' />
      </div>
    </div>
  );
};

export default Card;
