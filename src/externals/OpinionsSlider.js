import React, { useState, useEffect } from 'react';
import './../styles/OpinionsSlider.css';
const OpinionsSlider = () => {
    const opinionsData = [
      { name: 'Jan', opinion: 'Świetny dostawca! Szybki internet i doskonała obsługa klienta.' },
      { name: 'Asia', opinion: 'Bardzo stabilne połączenie. Polecam!' },
      { name: 'Tomek', opinion: 'Szybko i bezproblemowo. Jesteśmy zadowoleni.' },
      { name: 'Kinga', opinion: 'Dostawca z najlepszymi usługami. Nie zawiedli.' },
      { name: 'Maks', opinion: 'Świetna prędkość i zero problemów z połączeniem.' },
      { name: 'Wojtek', opinion: 'Obsługa klienta na najwyższym poziomie.' },
      { name: 'Agnieszka', opinion: 'Bardzo elastyczna oferta, idealnie dostosowana do moich potrzeb.' },
      { name: 'Piotrek', opinion: 'Doświadczony dostawca, korzystam od lat bez problemów.' },
      { name: 'Anna', opinion: 'Pewny dostawca, świetne doświadczenia.' },
      { name: 'Aneta', opinion: 'Nielimitowany internet - naprawdę bezkonkurencyjny.' },
    ];

    const [currentOpinionIndex, setCurrentOpinionIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentOpinionIndex((prevIndex) => (prevIndex + 1) % opinionsData.length);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, [opinionsData.length]);
  
    const handleButtonClick = (index) => {
      setCurrentOpinionIndex(index);
    };
  
    return (
      <div className="opinions-slider">
        <h1 className="optitle">Opinie naszych klientów:</h1>
        {opinionsData.map((opinion, index) => (
          <div key={index} className={`opinion ${index === currentOpinionIndex ? 'active' : ''}`}>
            <p className="opinion-name">{opinion.name}</p>
            <p className="opinion-text">&quot;{opinion.opinion}&quot;</p>
          </div>
        ))}
        <div className="navigation-buttons">
          {opinionsData.map((opinion, index) => (
            <div
              key={index}
              className={`opinion-button ${index === currentOpinionIndex ? 'active' : ''}`}
              onClick={() => handleButtonClick(index)}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OpinionsSlider;