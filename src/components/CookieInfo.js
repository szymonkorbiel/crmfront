import React, { useState, useEffect } from 'react';

const CookieInfo = () => {
  const [isVisible, setIsVisible] = useState(true);//false

  /*useEffect(() => {
    const isAccepted = localStorage.getItem('cookiesAccepted');
    setIsVisible(!isAccepted);
  }, []);
*/
  const handleAccept = () => {
    setIsVisible(false);
    //localStorage.setItem('cookiesAccepted', 'true');
  };

  return (
    isVisible && (
      <div
        style={{
          position: 'fixed',
          width: '20%',
          bottom: '10px',
          right: '10px',
          backgroundColor: '#ffb766',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: '0.8',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        <p style={{ margin: '0' }}>
        Informujemy, iż w celu optymalizacji treści dostępnych w naszym serwisie korzystamy z informacji zapisanych za pomocą plików cookies na urządzeniach końcowych użytkowników. Dalsze korzystanie z naszego serwisu internetowego oznacza, iż użytkownik akceptuje stosowanie plików cookies.
        </p>
        <button
          style={{
            backgroundColor: '#68d388',
            color: '#ffffff',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '5px',
            marginTop: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            fontWeight: 'bold',
          }}
          onClick={handleAccept}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0fd64a')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#68d388')}
        >
          OK, rozumiem
        </button>
      </div>
    )
  );
};

export default CookieInfo;
