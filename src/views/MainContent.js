import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainContent.css';

function MainContent() {
    return (
        <div className="mainContent">
            <h1>Najlepszy internet w mieście!</h1>
            <p>Zapoznaj się z naszą ofertą klikając&nbsp;
                <Link to="/oferty">TUTAJ</Link>
            </p>
            <p>tlo do zmiany 4k uhd</p>
        </div>
    );
}

export default MainContent;
