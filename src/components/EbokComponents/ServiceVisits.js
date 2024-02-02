import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import '../../styles/EbokHome.css';

const ServiceVisits = () => {
  const [serviceVisitsList, setServiceVisitsList] = useState([]);
  const [selectedServiceVisit, setSelectedServiceVisit] = useState(null);

  const fetchServiceVisitsList = async () => {
    try {
      const response = await instance.get('/service/visit/list');
      const visits = response.data.results.serviceVisits.map(visit => ({
        ...visit,
        cancelled: visit.cancelled === "true" ? true : false // Konwersja wartości "true"/"false" na boolean
      }));
      setServiceVisitsList(visits);
    } catch (error) {
      console.error('Error fetching service visits list:', error);
    }
  };
  

  const fetchServiceVisitDetails = async (visitId) => {
    try {
      const response = await instance.get(`/service/visit/${visitId}/detail`);
      setSelectedServiceVisit(response.data.serviceVisit);
    } catch (error) {
      console.error('Error fetching service visit details:', error);
    }
  };

  const cancelServiceVisit = async (visitId) => {
    try {
      const response = await instance.delete(`/service/visit/${visitId}/cancel`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Service visit canceled successfully!');
        fetchServiceVisitsList();
      } else {
        console.error('Error canceling service visit');
      }
    } catch (error) {
      console.error('Error canceling service visit:', error);
    }
  };

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
    fetchServiceVisitsList();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ paddingTop: '5%' }}>
        <h2 className='ebokh2'>Lista wizyt serwisowych</h2>
        <ul className='ebokul'>
          {Array.isArray(serviceVisitsList) && serviceVisitsList.length > 0 ? (
            <>
              <li className='ebokli' key="header">
                <table>
                  <th className='ebokth'></th>
                  <th className='ebokth'>Tytuł</th>
                  <th className='ebokth'>ID</th>
                </table>
              </li>
              {serviceVisitsList.map((visit, index) => (
                <li className='ebokli' key={visit.id}>
                  <table>
                    <tr>
                      <td style={{ color: '#0335a6' }}>{index + 1}</td>
                      <td style={{ color: 'grey' }}>{visit.title}</td>
                      <td>{visit.id}</td>
                      <td>
                        <button className="ebokbutton" onClick={() => fetchServiceVisitDetails(visit.id)}>Szczegóły</button>
                        <button className="ebokbutton" onClick={() => cancelServiceVisit(visit.id)}>Anuluj</button>
                      </td>
                    </tr>
                  </table>
                </li>
              ))}
            </>
          ) : (
            <p className='ebokp'>Brak dostępnych wizyt serwisowych.</p>
          )}
        </ul>
      </div>

      <div style={{ flex: '1', paddingTop: '5%' }}>
        {selectedServiceVisit && (
          <div style={{marginLeft:"20px"}}>
          <h2 className='ebokh2'>Szczegóły wizyty serwisowej</h2>
          <p className='ebokp'>Tytuł: <span style={{color:"gray"}}>{selectedServiceVisit.title}</span></p>
          <p className='ebokp'>Data: <span style={{color:"gray"}}>{formatDateWithTime(selectedServiceVisit.date.date)}</span></p>
          <p className='ebokp'>Godzina: <span style={{color:"gray"}}>{formatHourWithMinutes(selectedServiceVisit.start.date)}</span></p>
          <p className='ebokp'>Technik: <span style={{color:"gray"}}>{selectedServiceVisit.user.name}&nbsp;{selectedServiceVisit.user.surname}</span></p>
          <p className='ebokp'>Status: <span style={{color:"gray"}}>{selectedServiceVisit.cancelled ? "Anulowana" : "Zarezerwowana"}</span></p>
        </div>
        
        )}
      </div>
    </div>
  );
};

export default ServiceVisits;
