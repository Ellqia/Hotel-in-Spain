import React from 'react';
import HotelCard from './HotelCard';

const hotels = [
  {
    name: 'Hotel One',
    location: 'Stockholm',
    rating: 4,
    price: 120,
    image: 'hotel1.jpg'
  },
  {
    name: 'Hotel Two',
    location: 'Gothenburg',
    rating: 5,
    price: 150,
    image: 'hotel2.jpg'
  }
];

function HotelList() {
  return (
    <div className="hotel-list">
      {hotels.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelList;
