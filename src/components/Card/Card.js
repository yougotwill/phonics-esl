import React from 'react';

const Card = ({ text, image, sound, examples }) => {
  return (
    <div className='card'>
      {/* Phonic Text */}
      <h3>{text}</h3>
      {/* On click plays sound - probably use sound tag? */}
      {/* On hover show examples and picture in a tooltip of some sort */}
    </div>
  );
};

export default Card;
