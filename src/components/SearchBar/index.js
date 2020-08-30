import React from 'react';

const SearchBar = ({theme, updateTheme }) => {
  return (
    <div className="container flex justify-end align-center">
      {/* Searchbox */}
      <button>Search</button>
      <button onClick={() => updateTheme(theme ? '' : 'dark')}>{theme ? '☀️' : '😎'}</button>
    </div>
  );
};

export default SearchBar;
