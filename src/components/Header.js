// Header.js

import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logo from '../assets/graphics/logo_rec.png';
import AuthService from '../externals/auth';
import '../styles/Header.css';
function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    // Dodaj obsługę wylogowania
    AuthService.logout();
    setUser(null);
    // Przekieruj na stronę główną
    window.location.href = '/';
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
          <li><a href="/kontakt">FAQ</a></li>
          <li><a href="/oferty">Oferty</a></li>
        </ul>
      </nav>
      <div className="header-right">
        {user ? (
          <>
            <span>Witaj, {user.username}!</span>
            <button onClick={handleLogout}>Wyloguj</button>
          </>
        ) : (
          <Link to="/loginform">Zaloguj do eBOK</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
