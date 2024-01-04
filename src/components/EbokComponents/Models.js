// Importy
import React, { useState, useEffect } from 'react';

// Komponent Models
const Models = () => {
  // Stan dla listy modeli
  const [modelsList, setModelsList] = useState([]);
  // Stan dla szczegółów wybranego modelu
  const [selectedModel, setSelectedModel] = useState(null);

  // Funkcja pobierająca listę modeli
  const fetchModelsList = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/public/models/list');
      const data = await response.json();
      setModelsList(data);
    } catch (error) {
      console.error('Error fetching models list:', error);
    }
  };

  // Funkcja pobierająca szczegóły modelu
  const fetchModelDetails = async (modelId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/public/models/${modelId}/detail`);
      const data = await response.json();
      setSelectedModel(data);
    } catch (error) {
      console.error('Error fetching model details:', error);
    }
  };

  // Efekt pobierający listę modeli po zamontowaniu komponentu
  useEffect(() => {
    fetchModelsList();
  }, []);

  // Renderowanie komponentu
  return (
    <div>
      {/* Wyświetlenie listy modeli */}
      <h2>Models List</h2>
      <ul>
        {modelsList.map((model) => (
          <li key={model.id}>
            {model.name} - <button onClick={() => fetchModelDetails(model.id)}>Details</button>
          </li>
        ))}
      </ul>

      {/* Wyświetlenie szczegółów wybranego modelu */}
      {selectedModel && (
        <div>
          <h2>Model Details</h2>
          <p>ID: {selectedModel.id}</p>
          {/* Dodaj pozostałe informacje zgodnie z odpowiedzią z API */}
        </div>
      )}
    </div>
  );
};

export default Models;
