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
      <input className='w-full my-2 mx-auto py-2 px-4 border border-black' type='search' placeholder='Search sounds' value={searchTerm} onChange={searchHandler}></input>
      <div className={'container flex flex-wrap py-4 px-auto border border-black ' + (cards.length < 41 ? 'justify-start' : 'justify-between')} tabindex="0">
        {cards.length > 0 ? cards : <p className='m-auto' tabindex="0">No results</p>}
      </div>
    </div>
  );
};

export default CardContainer;
