import React, { useState } from 'react';

const Card = ({ text, image, sound, examples, secondary, audioElement }) => {
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
    <div className='my-6 mx-auto md:mx-4 w-20 h-20 flex justify-center items-center text-center bg-orange-200 rounded-md border-2 border-orange-300 card tooltip' onClick={handlePlay}>
      <h3 className={secondary ? 'text-2xl font-black select-none' : 'text-2xl select-none'}>{text}</h3>
      {/* Two clicks opens a modal with more detailed information */}
      <div className='pb-40 z-20 text-center absolute tooltip-text'>
        <p className='p-2 rounded-md'>{examplesList}</p>
        <div className='mx-auto tooltip-triangle' />
      </div>
    </div>
  );
};

export default Card;
