import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import '../../styles/EbokHome.css';

const Payments = () => {
  const [paymentsList, setPaymentsList] = useState([]);

  const fetchPaymentsList = async () => {
    try {
      const response = await instance.get('/payments/list');
      setPaymentsList(response.data.payments);
    } catch (error) {
      console.error('Error fetching payments list:', error);
    }
  };

  useEffect(() => {
    fetchPaymentsList();
  }, []);

  // Function to get the payment method based on the 'paidBy' value
  const getPaymentMethod = (paidBy) => {
    switch (paidBy) {
      case 0:
        return 'Kartą';
      case 1:
        return 'BLIK';
      case 2:
        return 'Płatność Online';
      case 3:
        return 'Gotówka';
      default:
        return 'Nieznany';
    }
  };

  // Function to get the payment status based on the 'status' value
  const getPaymentStatus = (status) => {
    switch (status) {
      case 0:
        return (
          <span style={{ backgroundColor: '#ffb766', padding: '2px', borderRadius: '5px', color:'white' }}>
            W trakcie
          </span>
        );
      case 1:
        return (
          <span style={{ backgroundColor: 'green', padding: '2px', margin: '2px', borderRadius: '5px', color:'white' }}>
            Opłacone
          </span>
        );
      default:
        return (
          <span style={{ backgroundColor: 'red', padding: '5px', borderRadius: '5px', color:'white' }}>
            Nieopłacona
          </span>
        );
    }
  };

  return (
<div>
  <h1 className='ebokh1'>Lista płatności</h1>
  <ul className='ebokul'>
    {Array.isArray(paymentsList) && paymentsList.length > 0 ? (
      <>
        <li className='ebokli' key="header">
          <table>
            <thead>
              <tr>
                <th className='ebokth' style={{ width: '10%' }}></th>
                <th className='ebokth' style={{ width: '20%' }}>Kwota</th>
                <th className='ebokth' style={{ width: '30%' }}>Numer faktury</th>
                <th className='ebokth' style={{ width: '20%' }}>Płatność przez</th>
                <th className='ebokth' style={{ width: '20%' }}>Status</th>
              </tr>
            </thead>
          </table>
        </li>
        {paymentsList.map((payment, index) => (
          <li className='ebokli' key={payment.id}>
            <table>
              <tr>
                <td style={{ width: '10%' }}>{index + 1}</td>
                <td style={{ width: '20%' }}>{payment.amount} zł</td>
                <td style={{ width: '30%', color:"gray" }}>{payment.bill.number}</td>
                <td style={{ width: '20%' }}>{getPaymentMethod(payment.paidBy)}</td>
                <td style={{ width: '20%' }}>{getPaymentStatus(payment.status)}</td>
              </tr>
            </table>
          </li>
        ))}
      </>
    ) : (
      <p className='ebokp'>No payments available.</p>
    )}
  </ul>
</div>

  
  );
};

export default Payments;
