import React from 'react';

import Card from '../Card';

const CardContainer = ({ data, isPlaying, handlePlaySound, handleModal, handleSetPhonic }) => {
  return (
    <div className='container flex flex-wrap justify-between p-4 border border-black'>
      {data.map((phonic, index) => {
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
      })}
    </div>
  );
};

export default CardContainer;
