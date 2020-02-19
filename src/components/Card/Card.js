import React from 'react';

const Card = ({ text, image, sound, examples }) => {
  const examplesList = examples.map((item, index) => {
    if (index < examples.length - 1) {
      item += ', ';
    }
    return item;
  });
  return (
    <div className='my-6 mx-auto md:mx-4 w-20 h-20 flex justify-center items-center text-center bg-orange-200 rounded-md border-2 border-orange-300 card tooltip'>
      <h3 className='text-2xl select-none'>{text}</h3>
      {/* One click plays sound */}
      {/* Two clicks opens a modal with more detailed information */}
      <div className='pb-40 z-20 text-center absolute tooltip-text'>
        <p className='p-2 rounded-md'>{examplesList}</p>
        <div className='mx-auto tooltip-triangle' />
      </div>
    </div>
  );
};

export default Card;
