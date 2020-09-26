import React, { useState } from 'react';

import Card from '../Card';

const CardContainer = ({data, isPlaying, handlePlaySound, handleModal, handleSetPhonic }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  const results = !searchTerm
    ? data
    : data.filter((phonic) => {
    return phonic.text.includes(searchTerm.toLowerCase());
  });
  const cards = results.map((phonic, index) => {
    return (
      <Card
        key={index}
        text={phonic.text}
        gestureImage={phonic.gestureImage}
        gestureText={phonic.gestureText}
        sound={phonic.sound}
        examples={phonic.examples}
        secondary={phonic.secondary}
        isPlaying={isPlaying}
        handlePlaySound={handlePlaySound}
        handleModal={handleModal}
        handleSetPhonic={handleSetPhonic}
      />
    );
  });

  return (
    <div>
      <input className='w-full my-2 mr-6 p-2 border border-black' type='search' placeholder='Search sounds' value={searchTerm} onChange={searchHandler}></input>
      <div className='container flex flex-wrap justify-between p-4 border border-black'>
        {cards}
      </div>
    </div>
  );
};

export default CardContainer;
