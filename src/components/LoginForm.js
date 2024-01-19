// LoginForm.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';
import { jwtDecode } from 'jwt-decode'; 
import { confirmLogin, loginUser } from '../externals/api';  
import AuthService from '../externals/auth'; 

function LoginForm({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const navigate = useNavigate();
  
  const verifyLogin = async () =>{
    try {
      const response = await confirmLogin({
        code: verifyCode
      });
  
      console.log('Odpowiedź z serwera:', response);

      if (response.user) {
        const decoded = jwtDecode(response.token);
        AuthService.login(response.token, response.refresh_token, response.user, decoded.exp);
        setUser(response.user);
        navigate('/ebokhome/profile');
        window.location.reload();
      } else {
        console.error('Nieprawidłowe dane użytkownika w odpowiedzi:', response.user);
      }
    } catch (error) {
      console.error('Błąd logowania:', error);
    }
  
  }

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
        navigate('/ebokhome/profile');
        window.location.reload();
      } else {
        console.error('Nieprawidłowe dane użytkownika w odpowiedzi:', response.user);
      }
    } catch (error) {
      console.error('Błąd logowania:', error);
      if(error.error == "REQUIRED_2FA"){
        setIsCodeVisible(true);
        return;
      }
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
          {isCodeVisible ? 
          <input
            type="text"
            placeholder="Kod Weryfikacyjny"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
            
          />
        : null }
        {isCodeVisible == false ?
          <button type="submit">Zaloguj</button>
          : 
          <button onClick={verifyLogin}>Weryfikuj</button>
        }
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
