import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import AuthService from '../../externals/auth';
import '../../styles/EbokHome.css';
const ServiceRequests = () => {
  const [serviceRequestsList, setServiceRequestsList] = useState([]);
  const [selectedServiceRequest, setSelectedServiceRequest] = useState(null);
  const [newServiceRequest, setNewServiceRequest] = useState('');
  const [contractsList, setContractsList] = useState([]);
  const [selectedContract, setSelectedContract] = useState('');

  const fetchServiceRequestsList = async () => {
    try {
      const response = await instance.get('/service-requests/list');
      setServiceRequestsList(response.data.results.serviceRequests);
    } catch (error) {
      console.error('Error fetching service requests list:', error);
    }
  };

  const fetchServiceRequestDetails = async (requestId) => {
    try {
      const response = await instance.get(`service-requests/${requestId}/detail`);
      setSelectedServiceRequest(response.data.serviceRequest);
    } catch (error) {
      console.error('Error fetching service request details:', error);
    }
  };

  const cancelServiceRequest = async (requestId) => {
    try {
      const response = await instance.delete(`service-requests/${requestId}/cancel`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Service request canceled successfully!');
        fetchServiceRequestsList();
      } else {
        console.error('Error canceling service request');
      }
    } catch (error) {
      console.error('Error canceling service request:', error);
    }
  };

  const createServiceRequest = async () => {
    try {
      const response = await instance.post('/service-requests/create', {
          description: newServiceRequest,
          customer: AuthService.getCurrentUser().id,
          contract: selectedContract,
      });

      if (response.ok) {
        console.log('Service request created successfully!');
        fetchServiceRequestsList();
        setNewServiceRequest('');
      } else {
        console.error('Error creating service request');
      }
    } catch (error) {
      console.error('Error creating service request:', error);
    }
  };

  const fetchContractsList = async () => {
    try {
      const response = await instance.get('/contracts/list');
      setContractsList(response.data.results);
      // Domyślnie ustaw pierwszy kontrakt jako wybrany
      if (response.data.results.length > 0) {
        setSelectedContract(response.data.results[0].id);
      }
    } catch (error) {
      console.error('Error fetching contracts list:', error);
    }
  };

  useEffect(() => {
    fetchServiceRequestsList();
    fetchContractsList();
  }, []);

  return (
    <div>
      <h2 className='ebokh2'>Service Requests List</h2>
      <ul>
        {Array.isArray(serviceRequestsList) && serviceRequestsList.length > 0 ? (
          serviceRequestsList.map((request) => (
            <li className='ebokli' key={request.id}>
              {request.date} - {request.description} -{' '}
              <button className='ebokbutton' onClick={() => fetchServiceRequestDetails(request.id)}>Details</button>
              <button className='ebokbutton' onClick={() => cancelServiceRequest(request.id)}>Cancel</button>
            </li>
          ))
        ) : (
          <p className='ebokp'>No service requests available.</p>
        )}
      </ul>

      {selectedServiceRequest && (
        <div>
          <h2 className='ebokh2'>Service Request Details</h2>
          <p className='ebokp'>ID: {selectedServiceRequest.id}</p>
        </div>
      )}

      <div>
        <h2 className='ebokh2'>Create Service Request</h2>
        <input
          className='ebokinputext'
          type="text"
          placeholder="New Service Request"
          value={newServiceRequest}
          onChange={(e) => setNewServiceRequest(e.target.value)}
        />

        {/* Wybór kontraktu */}
        <select className='ebokselect' value={selectedContract} onChange={(e) => setSelectedContract(e.target.value)}>
          {contractsList.map((contract) => (
            <option className='ebokoption' key={contract.id} value={contract.id}>
              {contract.contractNumber}
            </option>
          ))}
        </select>

        <button className='ebokbutton' onClick={createServiceRequest}>Create Service Request</button>
      </div>
    </div>
  );
};

export default ServiceRequests;
