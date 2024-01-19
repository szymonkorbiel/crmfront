// VerifyAccount.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { verifyEmail } from '../externals/api'; // Importuj odpowiednią funkcję
import '../styles/LoginForm.css';

function VerifyAccount() {
  const location = useLocation();
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Odczytaj fragment zapytania (query) z linku
    const searchParams = new URLSearchParams(location.search);
    const queryFragment = '?' + searchParams.toString();

    // Ustaw fragment zapytania w stanie komponentu
    setQuery(queryFragment);
  }, [location.search]);

  const [email, setEmail] = useState(''); // Przenieś useState poza useEffect

  const handleVerification = async () => {
    try {
      // Tutaj możesz dodać dodatkową walidację adresu e-mail przed weryfikacją
      if (!query || !email) {
        alert('Błędny adres e-mail.');
        return;
      }
  
      // Utwórz pełny URL z zmienną query
      const confirmLink = `http://localhost:8000/api/register/confirm${query}`;
  
      // Wywołaj funkcję weryfikującą konto z odczytanymi parametrami
      const response = await verifyEmail({
        email: email, // Przekazujemy email użytkownika\
        query: query
      });
  
      // Tutaj możesz obsłużyć sukces weryfikacji, np. przeniesienie użytkownika na inną stronę
      console.log('Sukces weryfikacji:', response);
    } catch (error) {
      // Tutaj możesz obsłużyć błąd weryfikacji, np. wyświetlenie komunikatu użytkownikowi
      console.error('Błąd weryfikacji:', error);
    }
  };

  return (
    <div className='login-form' style={{margin:"0 auto", minHeight:"450px", textAlign:"center", paddingTop:"25vh"}}>
      <h1 style={{color:"#ffb766"}}>Weryfikacja konta</h1>
      <p style={{fontWeight:"bold"}}>Wprowadź swój email oraz zatwierdź</p>
      <input
        type="email"
        placeholder="Adres e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button style={{}} onClick={handleVerification}>Potwierdź weryfikację</button>
    </div>
  );
}

export default VerifyAccount;
