import React from 'react';

import infoPng from '../../resources/icons/info.png';

const Card = ({
  text,
  image,
  sound,
  examples,
  secondary,
  isPlaying,
  handlePlaySound,
  handleModal
}) => {
  const examplesList = examples.map((item, index) => {
    if (index < examples.length - 1) {
      item += ', ';
    }
    return item;
  });
  return (
    <div className='tooltip'>
      <div className='my-6 mx-auto md:mx-4 w-20 h-20 relative flex justify-center items-center text-center bg-orange-200 rounded-md border-2 border-orange-300 card' onClick={() => { handlePlaySound(sound); }}>
        <h3 className={secondary ? 'text-2xl font-bold select-none' : 'text-2xl select-none'}>{isPlaying === sound ? <span className='text-4xl'>◼</span> : text}</h3>
        <div className='absolute text-center tooltip-text' onClick={handleModal}>
          <div className='py-2 px-auto rounded-md'>
            <p>{examplesList}<img className='w-6 h-6 mb-1 ml-2 inline' src={infoPng} alt='info' /></p>
          </div>
          <p className='mx-auto tooltip-triangle' />
        </div>
      </div>
    </div>
  );
};

export default Card;
