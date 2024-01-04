// Importy
import React, { useState, useEffect } from 'react';

// Komponent ServiceRequests
const ServiceRequests = () => {
  // Stan dla listy żądań serwisowych
  const [serviceRequestsList, setServiceRequestsList] = useState([]);
  // Stan dla szczegółów wybranego żądania serwisowego
  const [selectedServiceRequest, setSelectedServiceRequest] = useState(null);
  // Stan dla nowego żądania serwisowego
  const [newServiceRequest, setNewServiceRequest] = useState('');

  // Funkcja pobierająca listę żądań serwisowych
  const fetchServiceRequestsList = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/public/service-requests/list');
      const data = await response.json();
      setServiceRequestsList(data);
    } catch (error) {
      console.error('Error fetching service requests list:', error);
    }
  };

  // Funkcja pobierająca szczegóły żądania serwisowego
  const fetchServiceRequestDetails = async (requestId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/public/service-requests/${requestId}/detail`);
      const data = await response.json();
      setSelectedServiceRequest(data);
    } catch (error) {
      console.error('Error fetching service request details:', error);
    }
  };

  // Funkcja do anulowania żądania serwisowego
  const cancelServiceRequest = async (requestId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/public/service-requests/${requestId}/cancel`, {
        method: 'DELETE',
      });

      // Sprawdź, czy anulowanie żądania zakończyło się sukcesem
      if (response.ok) {
        console.log('Service request canceled successfully!');
        // Opcjonalnie: Zaktualizuj listę żądań po udanym anulowaniu
        fetchServiceRequestsList();
      } else {
        console.error('Error canceling service request');
      }
    } catch (error) {
      console.error('Error canceling service request:', error);
    }
  };

  // Funkcja do tworzenia nowego żądania serwisowego
  const createServiceRequest = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/public/service-requests/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: newServiceRequest }),
      });

      // Sprawdź, czy utworzenie żądania zakończyło się sukcesem
      if (response.ok) {
        console.log('Service request created successfully!');
        // Opcjonalnie: Zaktualizuj listę żądań po udanym utworzeniu
        fetchServiceRequestsList();
        // Opcjonalnie: Zresetuj stan nowego żądania po udanym utworzeniu
        setNewServiceRequest('');
      } else {
        console.error('Error creating service request');
      }
    } catch (error) {
      console.error('Error creating service request:', error);
    }
  };

  // Efekt pobierający listę żądań serwisowych po zamontowaniu komponentu
  useEffect(() => {
    fetchServiceRequestsList();
  }, []);

  // Renderowanie komponentu
  return (
    <div>
      {/* Wyświetlenie listy żądań serwisowych */}
      <h2>Service Requests List</h2>
      <ul>
        {serviceRequestsList.map((request) => (
          <li key={request.id}>
            {request.date} - {request.description} -{' '}
            <button onClick={() => fetchServiceRequestDetails(request.id)}>Details</button>
            <button onClick={() => cancelServiceRequest(request.id)}>Cancel</button>
          </li>
        ))}
      </ul>

      {/* Wyświetlenie szczegółów wybranego żądania serwisowego */}
      {selectedServiceRequest && (
        <div>
          <h2>Service Request Details</h2>
          <p>ID: {selectedServiceRequest.id}</p>
          {/* Dodaj pozostałe informacje zgodnie z odpowiedzią z API */}
        </div>
      )}

      {/* Formularz do tworzenia nowego żądania serwisowego */}
      <div>
        <h2>Create Service Request</h2>
        <input
          type="text"
          placeholder="New Service Request"
          value={newServiceRequest}
          onChange={(e) => setNewServiceRequest(e.target.value)}
        />
        <button onClick={createServiceRequest}>Create Service Request</button>
      </div>
    </div>
  );
};

export default ServiceRequests;
