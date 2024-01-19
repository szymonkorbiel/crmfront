import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/About.css';
import family from './../assets/graphics/family.PNG'
import bg from './../assets/graphics/bg.jpg'
function About() {
    return (
        
        <div className="about-container">
            <section id="top"></section>
            <div className="list">
                <ul>
                    <li><a href="#top">Historia firmy</a></li>
                    <li><a href="#mapa-zasiegu">Mapa zasięgu</a></li>
                    <li><a href="#technologia-ftth">Technologia FTTH</a></li>
                </ul>
            </div>
            
            <div className="content">
                <div className='history'>
                <h1>Trochę informacji o naszej firmie</h1>
                <section id="historia-firmy">
                    <h2>Historia firmy</h2>
                    <p>W latach 90. XX wieku, grupa pasjonatów technologii postanowiła zmienić sposób, w jaki firmy łączą się z internetem i budować trwałe relacje z klientami. To marzenie stało się zalążkiem powstania firmy <strong>CRMConnect</strong>.</p>

                    <p>Pierwsze kroki były skromne. Rozpoczęli od tworzenia sieci światłowodowej na małym obszarze w centrum miasta. Ich pierwsi klienci byli bardzo zadowoleni ze stabilności oraz jakości połączenia internetowego.</p>
                    <Link to="/oferty">SPRAWDŹ OFERTY &#187;</Link>

                </section>
                </div>
                <div className='history'>
                <img src={family} alt="family"/> 
                </div> 

                {/* Sekcja: Mapa zasięgu */}
                <section id="mapa-zasiegu">
                    <h2>Mapa zasięgu</h2>
                    <p>Sprawdź czy zasięg naszej sieci Cię obejmuje!</p>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1QyOo_IBBZALq7HoWlDPc4KrCFX3P_Lg&ehbc=2E312F" width="640" height="480"></iframe>
                </section>

                <div className='history'>
                {/* Sekcja: Technologia FTTH */}
                <section id="technologia-ftth">
                    <h2>Technologia FTTH</h2>
                    <p>FTTH oznacza, że światłowód jest prowadzony aż do twojego domu. To oznacza, że masz dostęp do internetu za pośrednictwem ultra-szybkiego łącza światłowodowego, które przesyła dane w postaci impulsów świetlnych.</p>

    <h2>Główne korzyści FTTH to:</h2>
    <ul style={{listStyleType:"none"}}>
        <li><strong style={{color:"#0335a6"}}>Szybkość:</strong> FTTH zapewnia jedne z najszybszych dostępów do internetu dostępnych dla użytkowników domowych. Możesz pobierać i przesyłać dane z prędkościami, które pozwolą na płynne strumieniowanie wideo, granie online i inne wymagające aplikacje.</li>
        <li><strong style={{color:"#0335a6"}}>Stabilność:</strong> Światłowód jest odporny na zakłócenia elektromagnetyczne i interferences, co oznacza, że masz stabilne połączenie bez względu na pogodę czy inne czynniki.</li>
        <li><strong style={{color:"#0335a6"}}>Symetria:</strong> FTTH oferuje symetryczne prędkości, co oznacza, że zarówno pobieranie, jak i przesyłanie danych odbywa się z tą samą prędkością. To szczególnie ważne, jeśli prowadzisz działalność online lub przesyłasz duże pliki.</li>
        <li><strong style={{color:"#0335a6"}}>Niskie opóźnienia:</strong> Dzięki niskim opóźnieniom możesz cieszyć się płynną komunikacją w czasie rzeczywistym, na przykład podczas wideokonferencji lub gry online.</li>
        <li><strong style={{color:"#0335a6"}}>Zwiększona przepustowość:</strong> Światłowód ma dużą przepustowość, co oznacza, że jest w stanie obsłużyć wiele urządzeń podłączonych do sieci bez spadku prędkości.</li>
        <li><strong style={{color:"#0335a6"}}>Skalowalność:</strong> Technologia FTTH jest łatwa do rozbudowy, co oznacza, że dostawcy mogą dostarczać coraz szybsze połączenia w miarę postępu technologicznego.</li>
    </ul>
                </section>
                </div>
                <div className='history'>
                <img src={bg} alt="bg" id="bg"/>
                </div>
                </div>
            </div>
    );
}

export default About;
