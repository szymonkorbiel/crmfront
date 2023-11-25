// components/Serwisy.js
import React, { useState } from 'react';


const Serwisy = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    phoneNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę obsługującą wysłanie formularza na backend
    // np. poprzez funkcję z api.js
    // submitServiceForm(formData);
    // Po obsłużeniu formularza możesz dodać logikę wyświetlającą informację o pomyślnym zgłoszeniu
    // np. poprzez wyświetlenie alertu
    alert('Formularz zgłoszenia serwisu został pomyślnie wysłany!');
    // Możesz także oczyścić formularz
    setFormData({
      name: '',
      description: '',
      date: '',
      phoneNumber: '',
      address: ''
    });
  };

  return (
    <div className="serwisy-container">
      <h2>Zgłoszenie Serwisu</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Imię i Nazwisko:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Opis Usterki:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Termin:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Telefon Kontaktowy:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adres:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Zgłoś Serwis</button>
      </form>
    </div>
  );
};

export default Serwisy;
