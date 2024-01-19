import React from 'react';
import { Link } from 'react-router-dom';
import { FaWifi, AiFillSafetyCertificate, MdLocalOffer, FaLightbulb } from "../assets/graphics/icons/iconImports";
import family from './../assets/graphics/family.PNG'
import gift from './../assets/graphics/gift.png'
import map from './../assets/graphics/map.PNG'
import contact from './../assets/graphics/contact.PNG'
import OpinionsSlider from '../externals/OpinionsSlider';
import ContactForm from '../externals/ContactForm';
import '../styles/MainContent.css';

function MainContent() {
  return (
    <div className="mainContent">
      <div className="c">
      <input type="radio" name="a" id="cr-1" className="slider-input" defaultChecked />
<label htmlFor="cr-1" style={{ "--hue": 1 }}></label>
<div className="ci" style={{ "--z": 4 }}>
          <h2 className="ch">
          <Link to="/oferty">Nawet pół roku w prezencie!</Link>
          </h2>
          <p className='p-slider'>Wyjątkowa oferta dla naszych użytkowników! 🎁<br></br>
            Dostępna zarówno dla obecnych, jak i nowych klientów. Ograniczony czas trwania oferty! ⏰<br></br>
            Sprawdź, co dla Ciebie przygotowaliśmy. 🔥<br></br>
            👉 Nie przegap okazji! Skorzystaj już teraz i skorzystaj z wyjątkowych korzyści!</p>
          <img src={gift} alt="gift"/>
          
        </div>

        <input type="radio" name="a" id="cr-2" className="slider-input" />
<label htmlFor="cr-2" style={{ "--hue": 12 }}></label>
<div className="ci" style={{ "--z": 3 }}>
          <p className='p-slider'>🚀 Odkryj Nowy Wymiar Internetu<br></br>
          Szybki i niezawodny internet o najwyższych prędkościach. 🌐<br></br>
          🔒 Bezpieczne połączenie i ochrona prywatności.<br></br>
          Obsługa klienta na najwyższym poziomie. 💼
          </p>
          <h2 className="ch">
          <Link to="/oferty">Przejdź do CRMConnect!</Link>
          </h2>
          <img src={family} alt="family"/>
        </div>

        <input type="radio" name="a" id="cr-3" className="slider-input" />
<label htmlFor="cr-3" style={{ "--hue": 15 }}></label>
<div className="ci" style={{ "--z": 2 }}>
        <p className='p-slider'>📡 Czy jesteś w zasięgu naszego szybkiego internetu?<br></br> 
        Sprawdź teraz dostępność w Twojej okolicy i ciesz się niezawodnym połączeniem!<br></br>
        🕰️ Przeżyj z nami fascynującą podróż przez naszą historię.
        </p>
          <h2 className="ch">
          <Link to="/o-nas">Sprawdź czy jesteś w zasięgu.</Link>
          </h2>
          <img src={map} alt="map"/>
        </div>

        <input type="radio" name="a" id="cr-4" className="slider-input" />
<label htmlFor="cr-4" style={{ "--hue": 20 }}></label>
<div className="ci" style={{ "--z": 1 }}>
        <p className='p-sliderc'>🛠️ Jesteśmy tutaj, aby Ci pomóc!<br></br> 
        Bez względu na to,<br></br> czy masz pytania dotyczące naszych usług,<br></br> czy potrzebujesz wsparcia technicznego,<br></br> jesteśmy gotowi odpowiedzieć na Twoje pytania.</p>
          <h2 className="ch">
          <Link to="/faq">Potrzebujesz pomocy?</Link>
          </h2>
          <img src={contact} alt="contact" style={{height : "100%"}}/>
        </div>
      </div>
      <div className='mission'>

</div>
      <div class="column">
      <div className="feature">
  <div className="feature-content">
    <div className="icon-container">
      <div className="icon-circle">
        <FaWifi />
      </div>
    </div>
    <h3 className="textcol">Nielimitowany internet</h3>
    <p>Oferujemy stabilne łącze światłowodowe bez limitu poboru danych. </p>
  </div>
</div>
    <div class="feature">
      <div class="feature-content">
      <div className="icon-container">
      <div className="icon-circle">
        <AiFillSafetyCertificate />
      </div>
    </div>
        <h3 class="textcol">Wysoka jakość</h3>
        <p>Zastosowanie nowoczesnych technologii gwarantuje najwyższą jakość usług. </p>
      </div>
    </div>
    <div class="feature">
      <div class="feature-content">
      <div className="icon-container">
      <div className="icon-circle">
        <MdLocalOffer />
      </div>
    </div>
        <h3 class="textcol">Elastyczna oferta</h3>
        <p>Skrojona na miarę, dopasowana do indywidualnych potrzeb każdego Klienta. </p>
      </div>
    </div>
    <div class="feature">
      <div class="feature-content">
      <div className="icon-container">
      <div className="icon-circle">
        <FaLightbulb />
      </div>
    </div>
        <h3 class="textcol">Doświadczenie</h3>
        <p>25 lat doświadczenia na rynku czyni nas pewnym dostawcą usług telekomunikacyjnych. </p>
      </div>
    </div>
  </div>
  <div className="opinions-section">
    <OpinionsSlider />
  </div>
  <div className="contactform-section">
    <ContactForm />
  </div>
    </div>
  );
}

export default MainContent;
