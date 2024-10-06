import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Destination" />
      <input type="date" placeholder="Check-in" />
      <input type="date" placeholder="Check-out" />
      <button>Sök</button>
    </div>
  );
}

export default SearchBar;
