// Importy
import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import '../../styles/EbokStyles/Addresses.css';
// Komponent Offers
const Offers = () => {
  // Stan dla listy ofert
  const [offersList, setOffersList] = useState([]);
  // Stan dla szczegółów wybranej oferty
  const [selectedOffer, setSelectedOffer] = useState(null);

  // Funkcja pobierająca listę ofert
  const fetchOffersList = async () => {
    try {
      const response = await instance.get('/offer/list');
      setOffersList(response.data.results.offers);
    } catch (error) {
      console.error('Error fetching offers list:', error);
    }
  };

  // Funkcja pobierająca szczegóły oferty
  const fetchOfferDetails = async (offerId) => {
    try {
      const response = await instance.get(`/offer/${offerId}/detail`);
      setSelectedOffer(response.data.offer);
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
  {Array.isArray(offersList) && offersList.length > 0 ? (
    offersList.map((offer) => (
      <li key={offer.id}>
        {offer.title} - <button class="address-form" onClick={() => fetchOfferDetails(offer.id)}>Details</button>
      </li>
    ))
  ) : (
    <p>No offers available.</p>
  )}
</ul>


      {/* Wyświetlenie szczegółów wybranej oferty */}
      {selectedOffer && (
        <div>
          <h2>Offer Details</h2>
          <p>Description: {selectedOffer.description}</p>
          <p>Download Speed: {selectedOffer.downloadSpeed} Mbps</p>
          <p>Upload Speed: {selectedOffer.uploadSpeed} Mbps</p>
          <p>Price: {selectedOffer.price} PLN</p>
        </div>
      )}
    </div>
  );
};

export default Offers;
