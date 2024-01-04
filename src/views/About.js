import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <div className="about-container">
            <div className="list">
                <ul>
                    <li><a href="#historia-firmy">Historia firmy</a></li>
                    <li><a href="#mapa-zasiegu">Mapa zasięgu</a></li>
                    <li><a href="#technologia-ftth">Technologia FTTH</a></li>
                </ul>
            </div>

            <div className="content">
                <h1>Trochę informacji o naszej firmie</h1>
                
                <section id="historia-firmy">
                    <h2>Historia firmy</h2>
                    <p>W latach 90. XX wieku, w sercu dynamicznego miasta, grupa pasjonatów technologii i zarządzania relacjami z klientem postanowiła zmienić sposób, w jaki firmy łączą się i budują trwałe relacje z klientami. Ich marzeniem było stworzenie kompleksowych rozwiązań CRM, które pomogą przedsiębiorstwom lepiej zrozumieć i obsługiwać swoich klientów. To marzenie stało się zalążkiem powstania firmy <strong>CRMConnect</strong>.</p>

    <p>Pierwsze kroki były skromne. Rozpoczęli od tworzenia prostego oprogramowania do zarządzania klientami, które pomagało firmom śledzić kontakty, historię interakcji i dane klientów. Ich pierwszym klientem był niewielki dostawca internetu, który pragnął zorganizować obsługę klienta i zwiększyć lojalność swoich użytkowników. To był kamień milowy.</p>

    <p>W miarę jak technologia ewoluowała, <strong>CRMConnect</strong> również rozwijało swoje usługi. Szybko zyskali opinię lidera w dziedzinie CRM o globalnym zasięgu. Dostarczali nie tylko narzędzia do zarządzania relacjami z klientami, ale także zaawansowane analizy danych, które pomagały firmom tworzyć spersonalizowane strategie i oferty.</p>

    <p>Firma była znana z innowacyjności. Wprowadzili na rynek pierwszy na świecie system CRM w chmurze, który umożliwiał firmom dostęp do swoich danych z dowolnego miejsca i urządzenia. To było przełomowe. Wprowadzili również narzędzia automatyzacji marketingu, co pozwoliło firmom lepiej dostosowywać swoje kampanie i budować długotrwałe relacje.</p>

    <p>Ale CRMConnect to nie tylko technologia. To także zaangażowanie w sukces swoich klientów. Firma oferowała nie tylko narzędzia, ale także wsparcie techniczne, doradztwo i szkolenia, aby pomóc przedsiębiorstwom w pełni wykorzystać potencjał narzędzi CRM.</p>

    <p>W miarę jak <strong>CRMConnect</strong> rosło, również ich zespół się rozrastał. To była grupa nie tylko ekspertów od CRM, ale także ludzi, którzy wierzyli, że lepsze zarządzanie relacjami z klientami może przekształcić biznesy. Dla nich to nie była tylko firma. To była misja.</p>

    <p>Dziś CRMConnect to międzynarodowy gigant w dziedzinie CRM, który nadal oferuje najnowocześniejsze narzędzia i rozwiązania do zarządzania relacjami z klientami. Ale niezależnie od tego, jak daleko doszli, nie zapomnieli o swoim skromnym początku ani o marzeniach, które zainicjowały tę niezwykłą podróż.</p>

                </section>
                
                {/* Sekcja: Mapa zasięgu */}
                <section id="mapa-zasiegu">
                    <h2>Mapa zasięgu</h2>
                    <p>Sprawdź czy zasięg naszej sieci Cię obejmuje: narazie robocza pozniej bez autora i z wyszukiwarką lokalizacji dla klienta</p>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1QyOo_IBBZALq7HoWlDPc4KrCFX3P_Lg&ehbc=2E312F" width="640" height="480"></iframe>
                </section>
                
                {/* Sekcja: Technologia FTTH */}
                <section id="technologia-ftth">
                    <h2>Technologia FTTH</h2>
                    <p>FTTH oznacza, że światłowód jest prowadzony aż do twojego domu. To oznacza, że masz dostęp do internetu za pośrednictwem ultra-szybkiego łącza światłowodowego, które przesyła dane w postaci impulsów świetlnych.</p>

    <h2>Główne korzyści FTTH to:</h2>
    <ul>
        <li><strong>Szybkość:</strong> FTTH zapewnia jedne z najszybszych dostępów do internetu dostępnych dla użytkowników domowych. Możesz pobierać i przesyłać dane z prędkościami, które pozwolą na płynne strumieniowanie wideo, granie online i inne wymagające aplikacje.</li>
        <li><strong>Stabilność:</strong> Światłowód jest odporny na zakłócenia elektromagnetyczne i interferences, co oznacza, że masz stabilne połączenie bez względu na pogodę czy inne czynniki.</li>
        <li><strong>Symetria:</strong> FTTH oferuje symetryczne prędkości, co oznacza, że zarówno pobieranie, jak i przesyłanie danych odbywa się z tą samą prędkością. To szczególnie ważne, jeśli prowadzisz działalność online lub przesyłasz duże pliki.</li>
        <li><strong>Niskie opóźnienia:</strong> Dzięki niskim opóźnieniom możesz cieszyć się płynną komunikacją w czasie rzeczywistym, na przykład podczas wideokonferencji lub gry online.</li>
        <li><strong>Zwiększona przepustowość:</strong> Światłowód ma dużą przepustowość, co oznacza, że jest w stanie obsłużyć wiele urządzeń podłączonych do sieci bez spadku prędkości.</li>
        <li><strong>Skalowalność:</strong> Technologia FTTH jest łatwa do rozbudowy, co oznacza, że dostawcy mogą dostarczać coraz szybsze połączenia w miarę postępu technologicznego.</li>
    </ul>

    <p>W skrócie, FTTH to technologia, która przynosi ultra-szybki, stabilny i niezawodny dostęp do internetu aż do twojego domu, co pozwala cieszyć się zaawansowanymi aplikacjami i usługami online.</p>
                </section>
            </div>

        </div>
    );
}

export default About;
