import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import HotelList from './components/HotelList';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <HotelList />
    </div>
  );
}

export default App;
