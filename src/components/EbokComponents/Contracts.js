// Importy
import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import '../../styles/EbokHome.css';
// Komponent Contracts
const Contracts = () => {
  // Stan dla listy kontraktów
  const [contractsList, setContractsList] = useState([]);
  // Stan dla szczegółów konkretnego kontraktu
  const [selectedContract, setSelectedContract] = useState(null);

  // Funkcja pobierająca listę kontraktów
  const fetchContractsList = async () => {
    try {
      const response = await instance.get('/contracts/list');
      setContractsList(response.data.results);
    } catch (error) {
      console.error('Error fetching contracts list:', error);
    }
  };

  // Funkcja pobierająca szczegóły konkretnego kontraktu
  const fetchContractDetails = async (contractId) => {
    try {
      const response = await instance.get(`/contracts/${contractId}/details`);
      setSelectedContract(response.data.contract);
    } catch (error) {
      console.error('Error fetching contract details:', error);
    }
  };

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

  // Efekt pobierający listę kontraktów po zamontowaniu komponentu
  useEffect(() => {
    fetchContractsList();
  }, []);

  // Renderowanie komponentu
  return (
    <div style={{ display: 'flex' }}>
      {/* Wyświetlenie listy umów */}
      <h1 className='ebokh1'>Umowy</h1>
      <div style={{ flex: '1', paddingTop: '5%'}}>
        <h2 className='ebokh2'>Lista Twoich umów</h2>
        <ul className='ebokul'>
  {Array.isArray(contractsList) && contractsList.length > 0 ? (
    <>
      <li className='ebokli' key="header">
        <table>
          <th className='ebokth'></th>
          <th className='ebokth'>Numer umowy</th>
          <th className='ebokth'>Adres</th>
        </table>
      </li>
      {contractsList.map((contract, index) => (
        <li className='ebokli' key={contract.id}>
          <table>
            <tr>
              <td style={{color:'#0335a6'}}>{index + 1}</td>
              <td style={{color:'grey'}}>{contract.contractNumber}</td>
              <td>{contract.address}</td>
              <td>
                <button className="ebokbutton" onClick={() => fetchContractDetails(contract.id)}>Szczegóły</button>
              </td>
            </tr>
          </table>
        </li>
      ))}
    </>
  ) : (
    <p className='ebokp'>No contracts available.</p>
  )}
</ul>

      </div>
  
      {/* Wyświetlenie szczegółów wybranej umowy */}
      <div style={{ flex: '1', paddingTop: '5%'}}>
        {selectedContract && (
          <div>
            <h2 className='ebokh2'>Szczegóły umowy</h2>
            <p className='ebokp'>Id: <span style={{color:"gray"}}>{selectedContract.id}</span></p>
            <p className='ebokp'>Numer: <span style={{color:"gray"}}>{selectedContract.contractNumber}</span></p>
            <p className='ebokp'>Godność: <span style={{color:"gray"}}>{selectedContract.customer.name} {selectedContract.customer.surname}</span></p>
            <p className='ebokp'>Data utworzenia: <span style={{color:"gray"}}>{formatDateWithoutTime(selectedContract.createdAt.date)}</span></p>
            <p className='ebokp'>Data rozpoczęcia: <span style={{color:"gray"}}>{formatDateWithoutTime(selectedContract.startDate.date)}</span></p>
            <p className='ebokp'>Adres: <span style={{color:"gray"}}>{selectedContract.address} {selectedContract.zipCode} {selectedContract.city}</span></p>
            <p className='ebokp'>Całkowite podsumowanie opłat: <span style={{color:"gray"}}>{selectedContract.totalSum} zł</span></p>
          </div>
          
        )}
      </div>
    </div>
  );
  
  
};

export default Contracts;
