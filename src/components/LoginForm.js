// LoginForm.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';
import { jwtDecode } from 'jwt-decode'; 
import { loginUser } from '../externals/api';  
import AuthService from '../externals/auth'; 

function LoginForm({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await loginUser({
        username: username,
        password: password
      });
  
      console.log('Odpowiedź z serwera:', response);
  
      if (response.user) {
        const decoded = jwtDecode(response.token);
        AuthService.login(response.token, response.refresh_token, response.user, decoded.exp);
        setUser(response.user);
        navigate('/ebokhome');
        window.location.reload();
      } else {
        console.error('Nieprawidłowe dane użytkownika w odpowiedzi:', response.user);
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
