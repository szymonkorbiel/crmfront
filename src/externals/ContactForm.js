import React, { useState } from 'react';
import './../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    website: '',
    question: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Tutaj możesz dodać logikę obsługi wysłania formularza, np. wyświetlenie alertu
    alert('Formularz został pomyślnie wysłany!');
  
    // Zresetuj stan, aby wyczyścić formularz
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      website: '',
      question: '',
    });
  };

  return (
    <div className="contact-form">
      <div className="container">
        <form id="contact" onSubmit={handleSubmit}>
          <h3>Masz pytania?</h3>
          <h4>Skontaktuj się, a odpowiedź otrzymasz w ciągu 24 godzin!</h4>
          <fieldset>
            <input
              type="text"
              placeholder="Imię"
              id="name"
              tabIndex="1"
              autoFocus
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <input
              type="email"
              placeholder="Email"
              id="email"
              tabIndex="2"
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <input
              type="tel"
              placeholder="Numer telefonu"
              id="phoneNumber"
              tabIndex="3"
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Wpisz swoją wiadomość...."
              id="question"
              tabIndex="5"
              onChange={handleChange}
            ></textarea>
          </fieldset>
          <fieldset>
            <button type="submit" name="submit" id="contact-submit" data-submit="...Wysyłanie">
              Wyślij
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
