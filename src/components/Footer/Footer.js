import React from 'react';

const Footer = () => {
  return (
    <footer className='container flex flex-col md:flex-row justify-between items-center mx-auto pt-8'>
      <span className='mb-5'>Built with <span role='img' aria-label='coffee'>☕️</span> and <span role='img' aria-label='heart'>❤️ by <a className='hover:underline' href='https://yougotwill.github.io/' target='_blank' rel='noopener noreferrer'>William Grant</a></span></span>
      <a className='mb-8' href='mailto:yougotwill94@gmail.com' target='_blank' rel='noopener noreferrer'>Found a bug?</a>
    </footer>
  );
};

export default Footer;
