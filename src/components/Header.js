// Header.js

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/graphics/logo_rec.png';
import AuthService from '../externals/auth';
import '../styles/Header.css';

function Header() {
  const [user, setUser] = useState(null);
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    setShowButtons(false);
    navigate('/');
  };

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const closeOverlay = () => {
    setShowButtons(false);
  };

  return (
    <header className="header">
      <div className="header-left">
      <img src={logo} alt="CRMConnect Logo" />
      </div>
      <nav className="header-center">
        <ul>
          <li><Link to="/">Strona główna</Link></li>
          <li><Link to="/o-nas">O nas</Link></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/oferty">Oferty</a></li>
        </ul>
      </nav>
      <div className="header-right">
        {user ? (
          <>
            <span className='header-span'>Zalogowano jako,<br></br> {user.username}</span>
            <button className='arrow' onClick={toggleButtons}>&#x25B6;</button>
          </>
        ) : (
          <Link className="login-button" to="/loginform">Zaloguj do eBOK</Link>
        )}
        {showButtons && (
          <div className="overlay" onClick={closeOverlay}>
            <div className="buttons-container" onClick={(e) => e.stopPropagation()}>
              <Link to="/ebokhome/profile" onClick={closeOverlay} className='logout-tab'>
                eBOK
              </Link>
              <button onClick={handleLogout}>Wyloguj</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
