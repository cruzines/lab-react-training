import React from 'react'
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <img className="creditCard" src={img} alt="" /> {/* have to style later */}
      <div>
        <h2 className="font-bold">{name}</h2>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
