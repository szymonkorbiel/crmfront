// Importy
import React, { useState, useEffect } from 'react';

// Komponent Payments
const Payments = () => {
  // Stan dla listy płatności
  const [paymentsList, setPaymentsList] = useState([]);

  // Funkcja pobierająca listę płatności
  const fetchPaymentsList = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/public/payments/list');
      const data = await response.json();
      setPaymentsList(data);
    } catch (error) {
      console.error('Error fetching payments list:', error);
    }
  };

  // Efekt pobierający listę płatności po zamontowaniu komponentu
  useEffect(() => {
    fetchPaymentsList();
  }, []);

  // Renderowanie komponentu
  return (
    <div>
      {/* Wyświetlenie listy płatności */}
      <h2>Payments List</h2>
      <ul>
        {paymentsList.map((payment) => (
          <li key={payment.id}>
            {payment.amount} - {payment.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payments;
