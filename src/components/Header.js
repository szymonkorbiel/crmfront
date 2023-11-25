import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <p>CRMConnect</p>
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
                <Link to="/loginform">Zaloguj do eBOK</Link>
            </div>
        </header>
    );
}

export default Header;