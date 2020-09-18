import React, { useState } from 'react';

import SearchBar from '../SearchBar';
import Card from '../Card';

const CardContainer = ({theme, updateTheme, data, isPlaying, handlePlaySound, handleModal, handleSetPhonic }) => {
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
      <SearchBar theme={theme} updateTheme={updateTheme} searchTerm={searchTerm} searchHandler={searchHandler} />
      <div className='container flex flex-wrap justify-between p-4 border border-black'>
        {cards}
      </div>
    </div>
  );
};

export default CardContainer;
