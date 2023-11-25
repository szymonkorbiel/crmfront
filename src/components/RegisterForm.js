// components/RegisterForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../externals/api';
import '../styles/LoginForm.css';

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(userData);
      // Po pomyślnej rejestracji wyświetl alert i przekieruj do strony logowania
      alert('Pomyślnie zarejestrowano. Teraz możesz się zalogować.');
      // Przekieruj do strony logowania
      // Zakładając, że masz trasę "/login" dla strony logowania
      window.location.href = '/loginform';
    } catch (error) {
      // Obsłuż błąd rejestracji, np. wyświetl komunikat o błędzie
      console.error('Błąd rejestracji:', error);
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='login-container'>
        <div className='login-form'>
      <h2>Rejestracja</h2>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Użytkownik"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Hasło"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <button type="submit">Zarejestruj</button>
      </form>
      <p>
        Masz już konto? <Link to="/loginform" className="registerlink">Zaloguj się</Link>
      </p>
    </div>
    </div>
  );
};

export default RegisterForm;
