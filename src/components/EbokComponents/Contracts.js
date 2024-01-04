// Importy
import React, { useState, useEffect } from 'react';

// Komponent Contracts
const Contracts = () => {
  // Stan dla listy kontraktów
  const [contractsList, setContractsList] = useState([]);
  // Stan dla szczegółów konkretnego kontraktu
  const [selectedContract, setSelectedContract] = useState(null);

  // Funkcja pobierająca listę kontraktów
  const fetchContractsList = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/public/contracts/list');
      const data = await response.json();
      setContractsList(data);
    } catch (error) {
      console.error('Error fetching contracts list:', error);
    }
  };

  // Funkcja pobierająca szczegóły konkretnego kontraktu
  const fetchContractDetails = async (contractId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/public/contracts/${contractId}/details`);
      const data = await response.json();
      setSelectedContract(data);
    } catch (error) {
      console.error('Error fetching contract details:', error);
    }
  };

  // Efekt pobierający listę kontraktów po zamontowaniu komponentu
  useEffect(() => {
    fetchContractsList();
  }, []);

  // Renderowanie komponentu
  return (
    <div>
      {/* Wyświetlenie listy kontraktów */}
<h2>Contracts List</h2>
<ul>
  {Array.isArray(contractsList) && contractsList.length > 0 ? (
    contractsList.map((contract) => (
      <li key={contract.id}>
        {contract.name} - <button onClick={() => fetchContractDetails(contract.id)}>Details</button>
      </li>
    ))
  ) : (
    <p>No contracts available.</p>
  )}
</ul>


      {/* Wyświetlenie szczegółów wybranego kontraktu */}
      {selectedContract && (
        <div>
          <h2>Contract Details</h2>
          <p>ID: {selectedContract.id}</p>
          <p>Name: {selectedContract.name}</p>
          {/* Dodaj pozostałe informacje zgodnie z odpowiedzią z API */}
        </div>
      )}
    </div>
  );
};

export default Contracts;
