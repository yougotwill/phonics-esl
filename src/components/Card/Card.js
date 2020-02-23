import React from 'react';

import infoPng from '../../resources/icons/info.png';

const Card = ({
  text,
  gestureImage,
  gestureText,
  sound,
  examples,
  secondary,
  isPlaying,
  handlePlaySound,
  handleModal,
  handleSetPhonic
}) => {
  const examplesList = examples.map((item, index) => {
    if (index < examples.length - 1) {
      item += ', ';
    }
    return item;
  });
  const onCardClick = (event) => {
    handleSetPhonic({
      text,
      gestureImage,
      gestureText,
      sound,
      examples
    });
    handleModal(event);
  };
  return (
    <div className='tooltip'>
      <div className='my-6 mx-auto md:mx-4 w-20 h-20 relative flex justify-center items-center text-center bg-orange-200 rounded-full border-2 border-orange-300 card' onClick={() => { handlePlaySound(sound); }}>
        <h3 className={secondary ? 'text-2xl font-bold select-none' : 'text-2xl select-none'}>{isPlaying === sound ? <span className='text-4xl'>◼</span> : text}</h3>
        <div className='absolute text-center tooltip-text' onClick={(event) => { onCardClick(event); }}>
          <div className='py-2 px-auto rounded-full'>
            <p>{examplesList}<img className='w-6 h-6 mb-1 ml-2 inline' src={infoPng} alt='info' /></p>
          </div>
          <p className='mx-auto tooltip-triangle' />
        </div>
      </div>
    </div>
  );
};

export default Card;
