// Header.js

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/graphics/logo_rec.png';
import AuthService from '../externals/auth';
import '../styles/Header.css';
import { FaBriefcase, FaHandshake, FaQuestion, CiSettings, FaHome, FaTools, MdLogout } from "../assets/graphics/icons/iconImports";
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
      <Link to="/" className='nostyle'><img src={logo} alt="CRMConnect Logo" className='logo'/></Link>
      </div>
      <nav className="header-center">
        <ul>
          <li><Link to="/"><FaHome />Strona główna</Link></li>
          <li><Link to="/o-nas"><FaBriefcase />O nas</Link></li>
          <li><a href="/faq"><FaQuestion />FAQ</a></li>
          <li><a href="/oferty"><FaHandshake />Oferty</a></li>
        </ul>
      </nav>
      <div className="header-right">
        {user ? (
          <>
            <span className='header-span'>Zalogowano jako,<br></br> {user.username}</span>
            <div className='arrow-container' onClick={toggleButtons}>
            <CiSettings className='arrow-icon' />
            </div>
          </>
        ) : (
          <Link className="login-button" to="/loginform"><FaTools />&nbsp;Zaloguj do eBOK</Link>
        )}
        {showButtons && (
          <div className="overlay" onClick={closeOverlay}>
            <div className="buttons-container" onClick={(e) => e.stopPropagation()}>
              <Link to="/ebokhome/profile" onClick={closeOverlay} className='logout-tab'>
              eBOK&nbsp;<FaTools />
              </Link>
              <button onClick={handleLogout}>Wyloguj&nbsp;<MdLogout /></button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
