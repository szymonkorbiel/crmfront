// Importy
import React, { useState, useEffect } from 'react';

// Komponent Offers
const Offers = () => {
  // Stan dla listy ofert
  const [offersList, setOffersList] = useState([]);
  // Stan dla szczegółów wybranej oferty
  const [selectedOffer, setSelectedOffer] = useState(null);

  // Funkcja pobierająca listę ofert
  const fetchOffersList = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/public/offer/list');
      const data = await response.json();
      setOffersList(data);
    } catch (error) {
      console.error('Error fetching offers list:', error);
    }
  };

  // Funkcja pobierająca szczegóły oferty
  const fetchOfferDetails = async (offerId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/public/offer/${offerId}/detail`);
      const data = await response.json();
      setSelectedOffer(data);
    } catch (error) {
      console.error('Error fetching offer details:', error);
    }
  };

  // Efekt pobierający listę ofert po zamontowaniu komponentu
  useEffect(() => {
    fetchOffersList();
  }, []);

  // Renderowanie komponentu
  return (
    <div>
      {/* Wyświetlenie listy ofert */}
      <h2>Offers List</h2>
      <ul>
        {offersList.map((offer) => (
          <li key={offer.id}>
            {offer.name} - <button onClick={() => fetchOfferDetails(offer.id)}>Details</button>
          </li>
        ))}
      </ul>

      {/* Wyświetlenie szczegółów wybranej oferty */}
      {selectedOffer && (
        <div>
          <h2>Offer Details</h2>
          <p>ID: {selectedOffer.id}</p>
          {/* Dodaj pozostałe informacje zgodnie z odpowiedzią z API */}
        </div>
      )}
    </div>
  );
};

export default Offers;
