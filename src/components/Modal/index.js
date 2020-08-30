import React from 'react';

import humanReadableList from '../../utils/human-readable-list.js';

const Modal = ({ handleToggleModal, phonic }) => {
  const handleModal = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <div className='fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center modal' onClick={handleToggleModal}>
      <div className='shadow-lg w-11/12 md:max-w-2xl my-8 mx-auto rounded z-50 overflow-y-auto absolute inset-0 modal-container' onClick={(event) => { handleModal(event); }}>
        <div className='flex justify-end items-center modal-header'>
          <div className='p-4' onClick={handleToggleModal}>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='currentColor'><path d='M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z' /></svg>
          </div>
        </div>
        <div className='flex flex-col justify-start item-center px-6 text-center modal-content'>
          <h2 className='text-6xl leading-none mb-2'><span className='capitalize'>{phonic.text} </span>{phonic.text}</h2>
          <p>{phonic.gestureText}</p>
          <img className='w-1/3 mx-auto py-4' src={phonic.gestureImage} alt='gesture' />
          <h3 className='text-5xl'>Examples</h3>
          <p>{humanReadableList(phonic.examples)}</p>
          <audio className='w-1/2 mx-auto py-8' src={phonic.sound} controls>
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default Modal;
