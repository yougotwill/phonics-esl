import React from 'react';

import Card from '../Card/Card.js';

const CardContainer = ({ data }) => {
  console.log(data);
  return (
    <div className='card-container'>
      {/* Individual Phonics cards (click on for sound, hover draws attention */}
      <Card text={data.s.text} image={data.s.image} sound={data.s.sound} examples={data.s.examples} />
    </div>
  );
};

export default CardContainer;
