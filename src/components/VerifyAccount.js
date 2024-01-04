// VerifyAccount.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { verifyEmail } from '../externals/api'; // Importuj odpowiednią funkcję


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
        alert('Brak fragmentu zapytania lub adresu e-mail.');
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
    <div>
      <h1>Weryfikacja konta</h1>
      <p>Twój fragment zapytania: {query} oraz podany {email}</p>
      <input
        type="email"
        placeholder="Adres e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleVerification}>Potwierdź weryfikację</button>
    </div>
  );
}

export default VerifyAccount;
