import React from 'react';
import './Offers.css';
import offer from '../assets/offer.jpg';


const Offers = () => {
  return (
    <div className='container'>
       <h1>Exclusive offers</h1> 
       <hr/>
      <div className="offer">
      <img src={offer} alt="Women's Offer" />
      </div>
      </div>
  );
};

export default Offers;
