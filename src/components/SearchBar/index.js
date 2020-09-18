import React from 'react';

const SearchBar = ({ theme, updateTheme, searchTerm, searchHandler }) => {
  return (
    <div className="searchbar container flex justify-end align-center my-2 border border-black">
      <input className='w-full my-2 mr-6 p-2' type='text' placeholder='Search sounds' value={searchTerm} onChange={searchHandler}></input>
      <button className='pr-4' onClick={() => updateTheme(theme ? '' : 'dark')}>{theme ? '☀️' : '😎'}</button>
    </div>
  );
};

export default SearchBar;
