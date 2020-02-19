import React from 'react';

import Card from '../Card/Card.js';

const CardContainer = ({ data }) => {
  return (
    <div className='container flex flex-wrap justify-between p-4 border border-black'>
      {data.map((phonic, index) => {
        return <Card key={index} text={phonic.text} image={phonic.image} sound={phonic.sound} examples={phonic.examples} />;
      })}
    </div>
  );
};

export default CardContainer;
