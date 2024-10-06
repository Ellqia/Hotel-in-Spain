import React from 'react';

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />
      <h2>{hotel.name}</h2>
      <p>{hotel.location}</p>
      <p>{'⭐'.repeat(hotel.rating)}</p>
      <p>{hotel.price} SEK/night</p>
      <button>View Details</button>
      <button>Book</button>
    </div>
  );
}

export default HotelCard;
