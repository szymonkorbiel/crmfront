import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../externals/api';
import '../styles/LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Wywołaj funkcję loginUser z danymi użytkownika
      const response = await loginUser({ username, password });

      // Sprawdź, czy logowanie było udane (możesz dostosować to do swojego backendu)
      if (response.success) {
        // Tutaj możesz dodać dodatkową logikę, np. zapisanie tokena do stanu
        // lub przeniesienie użytkownika na inną stronę
        alert('Logowanie udane!');
        navigate('/ebokhome'); // Przykładowa strona po zalogowaniu
      } else {
        // Jeżeli logowanie nie powiodło się, wyświetl komunikat błędu
        alert('Błąd logowania. Sprawdź dane.');
      }
    } catch (error) {
      console.error('Błąd logowania:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Logowanie do eBOK</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Użytkownik"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Zaloguj</button>
        </form>
        <p>
          Nie masz konta? <Link to="/registerform" className="registerlink">Zarejestruj się</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
