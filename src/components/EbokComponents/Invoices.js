import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState('');
  const [invoiceDetails, setInvoiceDetails] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/public/bill/list');
        setInvoices(response.data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  const handleInvoiceClick = async (invoiceId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/public/bill/${invoiceId}/detail`);
      setInvoiceDetails(response.data);
    } catch (error) {
      console.error('Error fetching invoice details:', error);
    }
  };

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id} onClick={() => handleInvoiceClick(invoice.id)}>
            {invoice.invoiceNumber}
          </li>
        ))}
      </ul>

      {invoiceDetails && (
        <div>
          <h3>Invoice Details</h3>
          <p>ID: {invoiceDetails.id}</p>
          {/* Dodaj więcej informacji o fakturze w zależności od danych, jakie zwraca endpoint */}
        </div>
      )}
    </div>
  );
};

export default Invoices;
