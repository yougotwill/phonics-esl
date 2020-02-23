import React from 'react';

const Modal = () => {
  return (
    <div className='fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center modal'>
      <div className='shadow-lg w-11/12 md:max-w-lg mx-auto rounded z-50 overflow-y-auto modal-container'>
        <div className='py-4 px-6 modal-content'>
          test
        </div>
      </div>
    </div>
  );
}

export default Modal;
