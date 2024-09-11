// src/PriceCard.js
import React from 'react';
import './PriceCard.css'; // Import CSS for styling

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <h2 className="price-card__title">{title}</h2>
      <p className="price-card__price">{price}</p>
      <ul className="price-card__features">
        {features.map((feature, index) => (
          <li key={index} className="price-card__feature">{feature}</li>
        ))}
      </ul>
      <button className="price-card__button">Buy Now</button>
    </div>
  );
};

export default PriceCard;
