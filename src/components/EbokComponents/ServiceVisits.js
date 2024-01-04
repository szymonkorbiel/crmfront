// Importy
import React, { useState, useEffect } from 'react';

// Komponent ServiceVisits
const ServiceVisits = () => {
  // Stan dla listy wizyt serwisowych
  const [serviceVisitsList, setServiceVisitsList] = useState([]);
  // Stan dla szczegółów wybranej wizyty serwisowej
  const [selectedServiceVisit, setSelectedServiceVisit] = useState(null);

  // Funkcja pobierająca listę wizyt serwisowych
  const fetchServiceVisitsList = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/public/service/visit/list');
      const data = await response.json();
      setServiceVisitsList(data);
    } catch (error) {
      console.error('Error fetching service visits list:', error);
    }
  };

  // Funkcja pobierająca szczegóły wizyty serwisowej
  const fetchServiceVisitDetails = async (visitId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/public/service/visit/${visitId}/detail`);
      const data = await response.json();
      setSelectedServiceVisit(data);
    } catch (error) {
      console.error('Error fetching service visit details:', error);
    }
  };

  // Funkcja do anulowania wizyty serwisowej
  const cancelServiceVisit = async (visitId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/public/service/visit/${visitId}/cancel`, {
        method: 'DELETE',
      });

      // Sprawdź, czy anulowanie wizyty zakończyło się sukcesem
      if (response.ok) {
        console.log('Service visit canceled successfully!');
        // Opcjonalnie: Zaktualizuj listę wizyt po udanym anulowaniu
        fetchServiceVisitsList();
      } else {
        console.error('Error canceling service visit');
      }
    } catch (error) {
      console.error('Error canceling service visit:', error);
    }
  };

  // Efekt pobierający listę wizyt serwisowych po zamontowaniu komponentu
  useEffect(() => {
    fetchServiceVisitsList();
  }, []);

  // Renderowanie komponentu
  return (
    <div>
{/* Wyświetlenie listy wizyt serwisowych */}
<h2>Service Visits List</h2>
<ul>
  {Array.isArray(serviceVisitsList) && serviceVisitsList.length > 0 ? (
    serviceVisitsList.map((visit) => (
      <li key={visit.id}>
        {visit.date} - {visit.description} -{' '}
        <button onClick={() => fetchServiceVisitDetails(visit.id)}>Details</button>
        <button onClick={() => cancelServiceVisit(visit.id)}>Cancel</button>
      </li>
    ))
  ) : (
    <p>No service visits available.</p>
  )}
</ul>


      {/* Wyświetlenie szczegółów wybranej wizyty serwisowej */}
      {selectedServiceVisit && (
        <div>
          <h2>Service Visit Details</h2>
          <p>ID: {selectedServiceVisit.id}</p>
          {/* Dodaj pozostałe informacje zgodnie z odpowiedzią z API */}
        </div>
      )}
    </div>
  );
};

export default ServiceVisits;
