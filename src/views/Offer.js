// Importy
import React, { useState, useEffect } from 'react';
import instance from '../externals/instance';
import Modal from '../externals/Modal';
import { GiRobber, FaChild, GiFirewall, FaBan, FaFilter, BsLightningChargeFill, BsCashCoin, FaFileContract } from "../assets/graphics/icons/iconImports";
import '../styles/Offer.css';

// Komponent Offers
const Offers = () => {
  const [offersList, setOffersList] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

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
    console.log('Fetching details for offerId:', offerId);
    try {
      const response = await instance.get(`/offer/${offerId}/detail`);
      setSelectedOffer(response.data.offer);
      openOverlay();
    } catch (error) {
      console.error('Error fetching offer details:', error);
      setSelectedOffer(null);
    }
  };

  const openOverlay = () => {
    console.log('Selected Offer:', selectedOffer);
    setOverlayVisible(true);
  };

  // Funkcja zamykająca overlay
  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  // Efekt pobierający listę ofert po zamontowaniu komponentu
  useEffect(() => {
    fetchOffersList();
  }, []);

  // Sortowanie ofert od najwyższej do najniższej ceny
  const sortedOffers = [...offersList].sort((a, b) => b.price - a.price);

  // Renderowanie komponentu
  return (
    <div className="offers-container">
      {/* Wyświetlenie listy ofert */}
      <div className="basic-offers">
        <h1>Oferty Podstawowe</h1>
        {Array.isArray(sortedOffers) && sortedOffers.length > 0 ? (
          sortedOffers.map((offer) => (
            <div key={offer.id} className="offer">
              <h2>{offer.title}</h2>
              <div className='speed'>
                <span className='download'><BsLightningChargeFill />{offer.downloadSpeed}</span>
                <span style={{ color: 'grey', fontWeight: 'bold' }}> / {offer.uploadSpeed} Mb/s</span>
              </div>
              <p className='price'><BsCashCoin />{offer.price} zł</p>
              <p className='contract'><FaFileContract />Umowa na 12 lub 24 miesiące </p>
              <p style={{ color: 'grey', fontWeight: 'bold' }}><span style={{ color: '#f43a09', fontWeight: 'bold' }}>W pakiecie:</span> Firewall, Ochrona przed atakami DDoS i inne...</p>
              <button className="address-form" onClick={() => fetchOfferDetails(offer.id)}>
                Szczegóły
              </button>
            </div>
          ))
        ) : (
          <p>No offers available.</p>
        )}
      </div>
      <div className="basic-offers">
        <h1>Oferty Internet + TV</h1>
        {Array.isArray(sortedOffers) && sortedOffers.length > 0 ? (
          sortedOffers.map((offer) => (
            <div key={offer.id} className="offer">
              <h2>{offer.title}</h2>
              <div className='speed'>
                <span className='download'><BsLightningChargeFill />{offer.downloadSpeed}</span>
                <span style={{ color: 'grey', fontWeight: 'bold' }}> / {offer.uploadSpeed} Mb/s</span>
              </div>
              <p className='price'><BsCashCoin />{offer.price} zł</p>
              <p className='contract'><FaFileContract />Umowa na 12 lub 24 miesiące </p>
              <p style={{ color: 'grey', fontWeight: 'bold' }}><span style={{ color: '#f43a09', fontWeight: 'bold' }}>W pakiecie:</span> Firewall, Ochrona przed atakami DDoS i inne...</p>
              <button className="address-form" onClick={() => fetchOfferDetails(offer.id)}>
                Szczegóły
              </button>
            </div>
          ))
        ) : (
          <p>No offers available.</p>
        )}
      </div>
      <div className="basic-offers">

        <h1>Oferty Dodatkowe</h1>
        {Array.isArray(sortedOffers) && sortedOffers.length > 0 ? (
          sortedOffers.map((offer) => (
            <div key={offer.id} className="offer">
              <h2>{offer.title}</h2>
              <div className='speed'>
                <span className='download'><BsLightningChargeFill />{offer.downloadSpeed}</span>
                <span style={{ color: 'grey', fontWeight: 'bold' }}> / {offer.uploadSpeed} Mb/s</span>
              </div>
              <p className='price'><BsCashCoin />{offer.price} zł</p>
              <p className='contract'><FaFileContract />Umowa na 12 lub 24 miesiące </p>
              <p style={{ color: 'grey', fontWeight: 'bold' }}><span style={{ color: '#f43a09', fontWeight: 'bold' }}>W pakiecie:</span> Firewall, Ochrona przed atakami DDoS i inne...</p>
              <button className="address-form" onClick={() => fetchOfferDetails(offer.id)}>
                Szczegóły
              </button>
            </div>
          ))
        ) : (
          <p>No offers available.</p>
        )}
      </div>

      {/* Wyświetlenie szczegółów wybranej oferty */}
      {isOverlayVisible && (
        <Modal onClose={closeOverlay}>
          {selectedOffer && (
            <div key={selectedOffer.id} className="offerM">
              <h2 style={{textAlign: "center"}}>{selectedOffer.title}</h2>
              <table>
              <tr>
              <td>
              <p style={{ fontWeight: 'bold' }}>Prędkość pobierania: <span className='download'>{selectedOffer.downloadSpeed}</span> Mb/s</p>
              </td>  
              <td>
              <p style={{ color: 'grey', fontWeight: 'bold' }}>Prędkość wysyłania: <span className='download'>{selectedOffer.uploadSpeed}</span> Mb/s</p>
              </td>  
              <td>
              <p style={{ fontWeight: 'bold' }}>Cena: <span className='download'>{selectedOffer.price}</span> zł</p>
              </td>  
              </tr>
              </table>
              <p className='desc'>{selectedOffer.description}</p>
              <p className='desc2'><span style={{ color: '#f43a09', fontWeight: 'bold' }}>W pakiecie:</span>
              <br></br>
              <div className='center'>
              <GiFirewall /> Firewall,<br></br> 
              <FaBan /> Ochrona przed atakami DDoS, <br></br>
              <FaFilter /> Filtrowanie zawartości, <br></br>
              <FaChild /> Zabezpieczenia dla dzieci, <br></br>
              <GiRobber /> Zabezpieczenia przed phishingiem
              </div>
              </p>

            </div>
          )}
          {!selectedOffer && <p>No selected offer data.</p>}
        </Modal>
      )}
    </div>
  );
};

export default Offers;
