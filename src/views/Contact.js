import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleSectionClick = (index) => {
    setExpandedSection((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-div">
      <div className="transparent-div">
        <h1>FAQ</h1>

        {faqData.map((item, index) => (
          <div key={index} className={`faq-section ${expandedSection === index ? 'expanded' : ''}`}>
            <h3 className="contact-h3" onClick={() => handleSectionClick(index)}>
              {item.question}&#9660;
            </h3>
            <p className="contact-p">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;

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
      question: 'Czy przyjmujecie zamówienia online?',
      answer: 'Tak, przyjmujemy zamówienia online. Możesz złożyć zamówienie za pomocą naszej strony internetowej lub skontaktować się z nami telefonicznie.',
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
      question: 'Czy oferujecie usługi dostawy?',
      answer: 'Tak, oferujemy usługi dostawy. Koszty dostawy i terminy dostawy zależą od produktu i lokalizacji dostawy.',
    },
    {
      question: 'Czy możemy zwrócić lub wymienić zakupiony towar?',
      answer: 'Tak, przyjmujemy zwroty i wymiany towarów zgodnie z naszą polityką zwrotów. Prosimy o zapoznanie się z nią na naszej stronie lub skontaktowanie się z nami, aby uzyskać więcej informacji.',
    },
    {
      question: 'Jakie są wasze profile w mediach społecznościowych?',
      answer: 'Możesz śledzić nasze profile na Facebooku (@CRMConnect), Twitterze (@CRMConnectPL) i Instagramie (@CRMConnect) dla najnowszych aktualizacji i ofert.',
    },
  ];
  
