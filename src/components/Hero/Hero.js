import React from 'react';

const Hero = (props) => {
  return (
    <div className='py-10 text-center'>
      <h1 className='text-4xl lg:text-4xl'>Phonics ESL</h1>
      <p className='py-2'>A small tool to practice and review the phonics of English!</p>
      <p>Inspired by <a className='text-green-600' href='http://jollyreading.com/introduction-to-jolly-phonics/' target='_blank' rel='noopener noreferrer'>Jolly Phonics</a></p>
    </div>
  );
};

export default Hero;
