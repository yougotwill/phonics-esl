import React from 'react';

const Footer = () => {
  return (
    <footer className='container mx-auto pt-8'>
      <div className='flex flex-col justify-center items-center text-center'>
      <p className='text-2xl pb-2'> Inspired by <a className='text-green-600' href='http://jollyreading.com/introduction-to-jolly-phonics/' target='_blank' rel='noopener noreferrer'>Jolly Phonics</a></p>
      <p className='my-2 text-base'>All sounds, gesture images and example sentences come from the <a className='text-green-600' href='https://www.jollylearning.co.uk/resource-bank' target='_blank' rel="noopener noreferrer">Jolly Phonics Resource Bank</a> which is Copyright © 2018 Jolly Learning Ltd. All Rights Reserved.</p>
      <p className='my-2 text-base'>This website is built with <a className='text-green-600' href='https://reactjs.org/' target='_blank' rel="noopener noreferrer">React</a> and <a className='text-green-600' href='https://tailwindcss.com/' target='_blank' rel="noopener noreferrer">TailwindCSS</a> and is open-source.<br/>See the source code <a className='text-green-600' href='https://github.com/yougotwill/phonics-esl' target='_blank' rel="noopener noreferrer">here</a>.</p>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center mt-8'>
        <span className='mb-5'>Built with <span role='img' aria-label='coffee'>☕️</span> and <span role='img' aria-label='heart'>❤️ by <a className='hover:underline' href='https://yougotwill.github.io/' target='_blank' rel='noopener noreferrer'>William Grant</a></span></span>
        <a className='mb-8 hover:underline' href='https://github.com/yougotwill/phonics-esl/issues/new?labels=bug&template=bug_report.md' target='_blank' rel='noopener noreferrer'>Found a bug?</a>
      </div>
    </footer>
  );
};

export default Footer;
