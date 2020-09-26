import React from 'react';

import humanReadableList from '../../utils/human-readable-list.js';

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
      <div className='my-2 mx-2 w-20 h-20 relative flex justify-center items-center text-center bg-orange-200 rounded-full border-2 border-orange-300 card' onClick={() => { handlePlaySound(sound); }}>
        <h3 className={secondary ? 'text-2xl font-bold select-none' : 'text-2xl select-none'}>{isPlaying === sound ? <span className='text-4xl'>◼</span> : text}</h3>
        <div className='absolute text-center tooltip-text' onClick={(event) => { onCardClick(event); }}>
          <div className='py-2 px-auto rounded-full'>
            <p>
              {humanReadableList(examples)}
              <svg className='mb-1 ml-4 inline' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z' /></svg>
            </p>
          </div>
          <p className='mx-auto tooltip-triangle' />
        </div>
      </div>
    </div>
  );
};

export default Card;
