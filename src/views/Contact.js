import React from 'react';
import '../styles/Contact.css';

function FAQ() {
  const faqData = [
    {
      question: 'Jak mogę się skontaktować z waszą firmą?',
      answer: 'Możesz skontaktować się z nami za pomocą naszego formularza kontaktowego, dzwoniąc pod numer telefonu +48 123 456 789 lub wysyłając e-mail na adres kontakt@crmconnect.pl.',
    },
    {
      question: 'Jaka jest lokalizacja waszej siedziby?',
      answer: 'Nasza siedziba znajduje się pod adresem ul. Nowa 123, 12-345 Miastowo.',
    },
    {
      question: 'Jakie są godziny otwarcia waszej firmy?',
      answer: 'Jesteśmy dostępni od poniedziałku do piątku w godzinach 9:00 - 17:00, w soboty od 10:00 - 14:00, a w niedziele jesteśmy zamknięci.',
    },
    {
      question: 'Czy oferujecie wsparcie techniczne?',
      answer: 'Tak, oferujemy wsparcie techniczne 24/7. Możesz skontaktować się z naszym zespołem pod numerem +48 123 456 790.',
    },
    {
      question: 'Czy można zgłosić serwis online?',
      answer: 'Tak, przyjmujemy zgłoszenia online. Możesz zgłosić potrzebę serwisu za pomocą naszej strony internetowej lub skontaktować się z nami telefonicznie.',
    },
    {
      question: 'Czy prowadzicie warsztaty lub szkolenia?',
      answer: 'Tak, organizujemy warsztaty i szkolenia. Szczegółowe informacje znajdziesz na naszej stronie lub możesz skontaktować się z nami, aby dowiedzieć się o planowanych wydarzeniach.',
    },
    {
      question: 'Jakie formy płatności akceptujecie?',
      answer: 'Akceptujemy płatności kartą kredytową, przelewem bankowym i gotówką przy odbiorze.',
    },
    {
      question: 'Co zrobić gdy internet wolno działa?',
      answer: <div dangerouslySetInnerHTML={{ __html: `
  ✔ Sprawdź stan swoich płatności. Jeżeli na koncie istnieją duże zaległości, prędkość połączenia mogła zostać ograniczona przez system. Informacje na temat rachunku można uzyskać telefonicznie w BOK lub przez Panel Klienta. Login i hasło do panelu otrzymałeś na pierwszej stronie umowy abonenckiej.<br><br>

  ✔ Wykonaj test prędkości. Do tego celu zalecamy strony: [Speedtest](https://www.speedtest.net/), [Speedtest.pl](https://www.speedtest.pl/) lub [Pro Speedtest](https://pro.speedtest.pl/) (UWAGA! Aby pomiar był wiarygodny, upewnij się, że urządzenie jest podłączone do routera za pośrednictwem kabla sieciowego. Wyniki osiągane na urządzeniu połączonym bezprzewodowo mogą być zakłócone i nie są podstawą do reklamowania usługi. Pamiętaj też, aby przed rozpoczęciem testu wyłączyć wszystkie aplikacje, które obciążają Twoje łącze!)<br><br>

` }} />,

    },
    {
      question: 'Brak połączenia z internetem',
      answer: (
        <div dangerouslySetInnerHTML={{ __html: `
        Przed kontaktem z Biurem Obsługi Klienta sprawdź:<br><br>  
        <ul>
            <li>czy świecą się diody na modemie światłowodowym,</li>
            <li>czy świecą się diody na routerze Wi-Fi,</li>
            <li>czy kolejność kabli nie została zamieniona lub któryś z przewodów nie poluzował się.</li>
          </ul>
          Odłącz zasilacz urządzenia światłowodowego i routera Wi-Fi od źródła zasilania na kilkanaście sekund. Następnie uruchom urządzenia ponownie. Połączenie powinno zostać nawiązane na nowo w ciągu kilku minut. Nie używaj przycisku RESET.<br><br>
    
          Jeżeli korzystasz z Wi-Fi, sprawdź, czy dostęp do sieci jest możliwy przy połączeniu kablowym. W tym celu podłącz komputer/laptop do routera za pośrednictwem kabla sieciowego. Dzięki temu przekonasz się, czy łącze internetowe dociera do lokalu.<br><br>
    
          Sprawdź, czy problem dotyczy wszystkich urządzeń korzystających z sieci.
        ` }} />
      ),
    },
    
    {
      question: 'Jakie są wasze profile w mediach społecznościowych?',
      answer: 'Możesz śledzić nasze profile na Facebooku (@CRMConnect), Twitterze (@CRMConnectPL) i Instagramie (@CRMConnect) dla najnowszych aktualizacji i ofert.',
    },
  ];

  const handleAccordionClick = (index) => {
    const accordionItem = document.getElementById(`accordion-button-${index}`);
    const expanded = accordionItem.getAttribute('aria-expanded') === 'true';

    for (let i = 0; i < faqData.length; i++) {
      const item = document.getElementById(`accordion-button-${i}`);
      item.setAttribute('aria-expanded', 'false');
    }

    accordionItem.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  };

  return (
    <div className="containerfaq">
      <h2 className='h2faq'>Pomoc - pytania i odpowiedzi</h2>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              id={`accordion-button-${index}`}
              aria-expanded="false"
              onClick={() => handleAccordionClick(index)}
            >
              <span className="accordion-title">{item.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
