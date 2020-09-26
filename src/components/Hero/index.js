import React from 'react';

const Hero = ({ theme, updateTheme, }) => {
  return (
    <div>
      <div className='pt-3 text-center'>
        <h1 className='text-4xl inline -mr-16'>Phonics ESL</h1>
        <button className='text-4xl px-3 float-right clearfix' onClick={() => updateTheme(theme ? '' : 'dark')}>{theme ? '☀️' : '😎'}</button>
      </div>
    </div>
  );
};

export default Hero;
