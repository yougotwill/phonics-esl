import React from 'react';

const Hero = ({ theme, updateTheme, }) => {
  return (
    <div>
      <button className='text-2xl absolute top-0 right-0 pt-2 pr-3' onClick={() => updateTheme(theme ? '' : 'dark')}>{theme ? '☀️' : '😎'}</button>
      <div className='py-6 text-center'>
        <h1 className='text-4xl'>Phonics ESL</h1>
        <p className='py-2'>A small tool to practice and review the phonics of English!</p>
        <p>Inspired by <a className='text-green-600' href='http://jollyreading.com/introduction-to-jolly-phonics/' target='_blank' rel='noopener noreferrer'>Jolly Phonics</a></p>
      </div>
    </div>
  );
};

export default Hero;
