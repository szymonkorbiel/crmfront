import React from 'react';
import '../styles/Offer.css';

const Offer = () => {
    const basicOffers = [
        {
          name: 'Szybki Internet 100',
          price: '50 zł/miesiąc',
          speed: '100/20 Mbps',
        },
        {
          name: 'Internet Ultra 300',
          price: '80 zł/miesiąc',
          speed: '300/60 Mbps',
        },
        {
          name: 'Super Internet 500',
          price: '100 zł/miesiąc',
          speed: '500/100 Mbps',
        },
        {
          name: 'Internet 100 + Telewizja 60 kanałów',
          price: '70 zł/miesiąc',
          features: '100 Mbps + 60 kanałów TV',
        },
        {
          name: 'Internet 300 + Telefon Stacjonarny',
          price: '90 zł/miesiąc',
          features: '300 Mbps + Telefon stacjonarny',
        },
        {
          name: 'Internet 500 + Telewizja + Telefon',
          price: '120 zł/miesiąc',
          features: '500 Mbps + Telewizja + Telefon',
        },
      ];
    
      const additionalOffers = [
        {
          name: 'Kanały tematyczne',
          price: '30 zł/miesiąc',
          features: 'Pakiet kanałów tematycznych',
        },
        {
          name: 'Szybki Upload',
          price: '10 zł/miesiąc',
          features: '10% zwiększony upload',
        },
        {
          name: 'Szybszy Upload',
          price: '50 zł/miesiąc',
          features: '50% więcej uploadu',
        },
      ];
    
      return (
        <div className="offers-container">
          <div className="basic-offers">
            <h1>Oferty Podstawowe</h1>
            {basicOffers.map((offer, index) => (
              <div key={index} className="offer">
                <h2>{offer.name}</h2>
                <p>{offer.price}</p>
                <p>{offer.features || `Prędkość: ${offer.speed}`}</p>
                <button></button>
              </div>
            ))}
          </div>
          <div className="additional-offers">
            <h1>Oferty Dodatkowe</h1>
            {additionalOffers.map((offer, index) => (
              <div key={index} className="offer">
                <h2>{offer.name}</h2>
                <p>{offer.price}</p>
                <p>{offer.features}</p>
                <button></button>
              </div>
            ))}
          </div>
        </div>
        
      );
    };

export default Offer;
