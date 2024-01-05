import React, { useState, useEffect } from 'react';
import axios from 'axios';
import instance from '../../externals/instance';
import PdfUtils from '../../externals/pdfUtil';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState('');
  const [invoiceDetails, setInvoiceDetails] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await instance.get('/bill/list');
        setInvoices(response.data.results.bills);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  const handleInvoiceClick = async (invoiceId) => {
    try {
      const response = await axios.get(`/bill/${invoiceId}/detail`);
      setInvoiceDetails(response.data);
    } catch (error) {
      console.error('Error fetching invoice details:', error);
    }
  };

  return (
    <div>
      <h2>List of your invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li className="invoice" key={invoice.id} onClick={() => handleInvoiceClick(invoice.id)}>
            {invoice.number}
            <a className="invoiced" onClick={() => PdfUtils.downloadPDF(invoice.fileName, 'download')}>download invoice</a>
            <a className="invoiceo" onClick={() => PdfUtils.downloadPDF(invoice.fileName, 'open')}>open invoice</a>
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
