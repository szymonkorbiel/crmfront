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
        return 'Card';
      case 1:
        return 'BLIK';
      case 2:
        return 'Online Payment';
      case 3:
        return 'Cash';
      default:
        return 'Unknown';
    }
  };

  // Function to get the payment status based on the 'status' value
  const getPaymentStatus = (status) => {
    switch (status) {
      case 0:
        return 'Pending';
      case 1:
        return 'Posted';
      default:
        return 'Unknown';
    }
  };

  return (
    <div>
      <h2 className='ebokh2'>Payments List</h2>
      <ul className='ebokul'>
        {Array.isArray(paymentsList) && paymentsList.length > 0 ? (
          paymentsList.map((payment) => (
            <li className='ebokli' key={payment.id}>
              {payment.amount} PLN - {payment.bill.number} - Paid by: {getPaymentMethod(payment.paidBy)} - Status: {getPaymentStatus(payment.status)}
            </li>
          ))
        ) : (
          <p className='ebokp'>No payments available.</p>
        )}
      </ul>
    </div>
  );
};

export default Payments;
