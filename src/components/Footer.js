import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer>
    <div className="footer-container">
        
        <div className="footer-column">
            <h4>Nasze Biuro</h4>
            <p>ul. Technologiczna 123</p>
            <p>00-987 Miastowo</p>
        </div>

        <div className="footer-column">
            <h4>Godziny otwarcia:</h4>
            <p>Poniedziałek - Piątek: 8:00 - 18:00</p>
            <p>Sobota: 9:00 - 14:00</p>
            <p>Niedziela: Zamknięte</p>
        </div>

        <div className="footer-column">
            <h4>Kontakt:</h4>
            <p>Telefon: +48 123 456 789</p>
            <p>Email: kontakt@naszinternet.pl</p>
            <p>Fax: +48 123 456 788</p>
        </div>

        <div className="footer-column">
            <h4>Wsparcie techniczne:</h4>
            <p>Telefon: +48 123 456 790</p>
            <p>Godziny pracy: 24/7</p>
        </div>

        <div className="footer-column">
            <h4>Media społecznościowe:</h4>
            <p>Facebook: @CRMConnect</p>
            <p>Twitter: @CRMConnectPL</p>
            <p>Instagram: @CRMConnect_official</p>
        </div>

    </div>
</footer>

    );
}

export default Footer;
