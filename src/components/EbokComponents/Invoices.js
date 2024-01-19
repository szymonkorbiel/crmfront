import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import PdfUtils from '../../externals/pdfUtil';
import Modal from '../../externals/Modal'; 

import '../../styles/EbokHome.css';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [invoiceDetails, setInvoiceDetails] = useState(null);
  const [isDetailsOverlayVisible, setDetailsOverlayVisible] = useState(false);

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

  const formatDateWithoutTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
  
    const formattedDate = date.toLocaleString('en-US', options);
  
    return formattedDate;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 1: // STATUS_PAID
        return (
          <span style={{ backgroundColor: 'green', padding: '1px', margin: '2px', borderRadius: '5px' }}>
            Opłacona
          </span>
        );
      case 2: // STATUS_PAID_PARTIALLY
        return (
          <span style={{ backgroundColor: '#ffb766', padding: '5px', borderRadius: '5px' }}>
            Częściowo opłacona
          </span>
        );
      case 3: // STATUS_PAIMENT_DELAYED
        return (
          <span style={{ backgroundColor: 'red', padding: '5px', borderRadius: '5px' }}>
            Opóźniona płatność
          </span>
        );
      case 4: // STATUS_NOT_PAID
        return (
          <span style={{ backgroundColor: 'red', padding: '5px', borderRadius: '5px' }}>
            Nieopłacona
          </span>
        );
      case 5: // STATUS_REFUNDED
        return (
          <span style={{ backgroundColor: 'blue', padding: '5px', borderRadius: '5px' }}>
            Zwrócona płatność
          </span>
        );
      default:
        return (
          <span style={{ backgroundColor: '#3498db', padding: '5px', borderRadius: '5px' }}>
            Oczekuje na płatność
          </span>
        );
    }
  };
  
  

  const handleInvoiceClick = async (invoiceId) => {
    try {
      const response = await instance.get(`/bill/${invoiceId}/detail`);
      setInvoiceDetails(response.data.bill);
      openDetailsOverlay(); 
    } catch (error) {
      console.error('Error fetching invoice details:', error);
    }
  };

  const openDetailsOverlay = () => {
    setDetailsOverlayVisible(true);
  };

  const closeDetailsOverlay = () => {
    setDetailsOverlayVisible(false);
  };

  return (
    <div>
      <h1 className='ebokh1'>Lista twoich faktur</h1>
      <ul className="ebokul">
    <li className='ebokli' key="header">
      <table>
        <thead>
          <tr>
            <th className='ebokth'></th>
            <th className='ebokth'>Numer faktury</th>
            <th className='ebokth'>Status</th>
            <th className='ebokth'>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={invoice.id}>
              <td>
                <p style={{ color: "#0335a6" }}>{index + 1}&nbsp;</p>
              </td>
              <td>
                <div>
                  <span style={{ color: 'grey' }}> {invoice.number}</span>
                </div>
              </td>
              <td>
                <div style={{ minWidth: '300px', paddingLeft: "50px" }}>
                  <span style={{ color: "white" }}>{getStatusColor(invoice.status)}</span>
                </div>
              </td>
              <td>
                <div>
                  <button className='ebokbutton' onClick={() => PdfUtils.downloadPDF(invoice.fileName, 'download')}>Pobierz</button>
                  <button className='ebokbutton' onClick={() => PdfUtils.downloadPDF(invoice.fileName, 'open')}>Otwórz</button>
                  <button className='ebokbutton' onClick={() => handleInvoiceClick(invoice.id)}>Szczegóły</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </li>
  </ul>

      {isDetailsOverlayVisible && (
        <Modal onClose={closeDetailsOverlay}>
          {invoiceDetails && (
            <div>
              <h3 className='ebokh2'>Szczegóły faktury <span style={{color:"white", fontWeight:"normal", fontSize:"15px"}}>{getStatusColor(invoiceDetails.status)}</span></h3>
              <p style={{color:"#0335a6", fontWeight:"bold"}}>Id: <span style={{color:"gray"}}>{invoiceDetails.id}</span></p>
              <p style={{color:"#0335a6", fontWeight:"bold"}}>Numer: <span style={{color:"gray"}}>{invoiceDetails.number}</span></p>
              <p style={{color:"#0335a6", fontWeight:"bold"}}>Kwota: <span style={{color:"gray"}}>{invoiceDetails.amount}</span></p>
              <p style={{color:"#0335a6", fontWeight:"bold"}}>Wystawiona dnia: <span style={{color:"gray"}}>{formatDateWithoutTime(invoiceDetails.dateOfIssue.date)}</span></p>
              <p style={{color:"#0335a6", fontWeight:"bold"}}>Termin zapłaty: <span style={{color:"gray"}}>{formatDateWithoutTime(invoiceDetails.payDue.date)}</span></p>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Invoices;
