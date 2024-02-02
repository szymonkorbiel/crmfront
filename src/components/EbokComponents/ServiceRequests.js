import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import Modal from '../../externals/Modal'; 
import '../../styles/EbokHome.css';

const ServiceRequests = () => {
  const [serviceRequestsList, setServiceRequestsList] = useState([]);
  const [selectedServiceRequest, setSelectedServiceRequest] = useState(null);
  const [isDetailsOverlayVisible, setDetailsOverlayVisible] = useState(false);

  const formatHourWithMinutes = (dateString) => {
    const date = new Date(dateString);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    const formattedTime = date.toLocaleString('pl-PL', options);

    return formattedTime;
  };

  const formatDateWithTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
  
    const formattedDate = date.toLocaleString('pl-PL', options);
  
    return formattedDate;
  }

  useEffect(() => {
    const fetchServiceRequests = async () => {
      try {
        const response = await instance.get('/service-requests/list');
        setServiceRequestsList(response.data.results.serviceRequests);
      } catch (error) {
        console.error('Error fetching service requests:', error);
      }
    };

    fetchServiceRequests();
  }, []);

  const handleServiceRequestClick = async (requestId) => {
    try {
      const response = await instance.get(`/service-requests/${requestId}/detail`);
      setSelectedServiceRequest(response.data.serviceRequest);
      openDetailsOverlay(); 
    } catch (error) {
      console.error('Error fetching service request details:', error);
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
      <h1 className='ebokh1'>Lista twoich serwisów</h1>
      <ul className="ebokul">
        <li className='ebokli' key="header">
          <table>
            <thead>
              <tr>
                <th className='ebokth'></th>
                <th className='ebokth'>Status</th>
                <th className='ebokth'>Data utworzenia</th>
                <th className='ebokth'>Kontrakt</th>
                <th className='ebokth'>Akcje</th>
              </tr>
            </thead>
            <tbody>
              {serviceRequestsList.map((request, index) => (
                <tr key={request.id}>
                  <td>
                    <p style={{ color: "#0335a6" }}>{index + 1}&nbsp;</p>
                  </td>
                  <td>
                    <div style={{ minWidth: '300px', paddingLeft: "50px" }}>
                      {request.closed ? 'Zamknięte' : 'Otwarte'}
                    </div>
                  </td>
                  <td>
                    <div style={{ minWidth: '300px', paddingLeft: "50px" }}>
                      {formatDateWithTime(request.createdDate.date)}
                    </div>
                  </td>
                  <td>
                    <div style={{ minWidth: '300px', paddingLeft: "50px" }}>
                      {request.contract.number}
                    </div>
                  </td>
                  <td>
                    <div>
                      <button className='ebokbutton' onClick={() => handleServiceRequestClick(request.id)}>Szczegóły</button>
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
    {selectedServiceRequest && (
      <div style={{marginLeft:"20px"}}>
        <h2 className='ebokh2'>Szczegóły zadania serwisowego</h2>
        <p className='ebokp'>ID: <span style={{color:"gray"}}>{selectedServiceRequest.id}</span></p>
        {selectedServiceRequest.customer && (
          <p className='ebokp'>Klient: <span style={{color:"gray"}}>{selectedServiceRequest.customer.name} {selectedServiceRequest.customer.surname}</span></p>
        )}
        <p className='ebokp'>Data utworzenia: <span style={{color:"gray"}}>{selectedServiceRequest.createdDate.date}</span></p>
        <p className='ebokp'>Kontrakt ID: <span style={{color:"gray"}}>{selectedServiceRequest.contract.id}</span></p>
        <p className='ebokp'>Numer kontraktu: <span style={{color:"gray"}}>{selectedServiceRequest.contract.number}</span></p>
        {selectedServiceRequest.user && (
          <p className='ebokp'>Użytkownik: <span style={{color:"gray"}}>{selectedServiceRequest.user.name} {selectedServiceRequest.user.surname}</span></p>
        )}
        {selectedServiceRequest.localization && (
          <p className='ebokp'>Adres: <span style={{color:"gray"}}>{selectedServiceRequest.localization.address}, {selectedServiceRequest.localization.zipCode} {selectedServiceRequest.localization.city}</span></p>
        )}
        <p className='ebokp'>Opis: <span style={{color:"gray"}}>{selectedServiceRequest.description}</span></p>
      </div>
    )}
  </Modal>
)}



    </div>
  );
};

export default ServiceRequests;
