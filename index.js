// src/App.js
import React from 'react';
import PriceCard from './PriceCard';

function App() {
  const cardData = {
    title: 'Basic Plan',
    price: '$29/month',
    features: [
      '10 GB Storage',
      '100 GB Bandwidth',
      'Email Support'
    ]
  };

  return (
    <div className="App">
      <h1>Our Pricing Plans</h1>
      <PriceCard 
        title={cardData.title} 
        price={cardData.price} 
        features={cardData.features} 
      />
    </div>
  );
}

export default App;
