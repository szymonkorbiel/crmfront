// Importy
import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import AuthService from '../../externals/auth';
import '../../styles/EbokStyles/Addresses.css';
// Komponent Addresses
const Addresses = () => {
  // Stan dla listy adresów
  const [addressesList, setAddressesList] = useState([]);
  // Stan dla szczegółów wybranego adresu
  const [selectedAddress, setSelectedAddress] = useState(null);
  // Stan dla nowego adresu
  const [newAddress, setNewAddress] = useState('');
  const [newZipCode, setNewZipCode] = useState('');
  const [newCountry, setNewCountry] = useState('');
  const [newCity, setNewCity] = useState('');

  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });

  // Funkcja pobierająca listę adresów
  const fetchAddressesList = async () => {
    try {
      const response = await instance.get('/customers/address/list');
      setAddressesList(response.data.addresses);
    } catch (error) {
      console.error('Error fetching addresses list:', error);
    }
  };

  // Funkcja pobierająca szczegóły adresu
  const fetchAddressDetails = async (addressId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/public/customers/address/${addressId}/details`);
      const data = await response.json();
      setSelectedAddress(data);
    } catch (error) {
      console.error('Error fetching address details:', error);
    }
  };

  // Funkcja do dodawania nowego adresu
  const addNewAddress = async () => {
    try {
      const response = await instance.post('/customers/address/add', {
        type: 1,
        zipCode: newZipCode,
        address: newAddress,
        customer: AuthService.getCurrentUser().id,
        country: newCountry,
        city: newCity,
      });

    fetchAddressesList();  
    } catch (error) {
      console.error('Error adding new address:', error);
    }
  };

  // Funkcja do edycji istniejącego adresu
  const editAddress = async (addressId) => {
    try {
      const response = await instance.patch(`/customers/address/${addressId}/edit`, {
        
      });

      // Sprawdź, czy edycja adresu zakończyła się sukcesem
      if (response.ok) {
        console.log('Address edited successfully!');
        // Opcjonalnie: Zaktualizuj listę adresów po udanej edycji
        fetchAddressesList();
        // Opcjonalnie: Zresetuj stan nowego adresu po udanej edycji
        setNewAddress('');
      } else {
        console.error('Error editing address');
      }
    } catch (error) {
      console.error('Error editing address:', error);
    }
  };

  // Funkcja do usuwania adresu
  const deleteAddress = async (addressId) => {
    try {
      const response = await instance.delete(`/customers/address/${addressId}/delete`);

      // Sprawdź, czy usuwanie adresu zakończyło się sukcesem
      if(response.status != 200){
        console.error('Error deleting address');
        return;
      }

      fetchAddressesList();
    } catch (error) {
      console.error('Error deleting address:', error);
    }

  };
  // Efekt pobierający listę adresów po zamontowaniu komponentu
  useEffect(() => {
    fetchAddressesList();
  }, []);

  // Renderowanie komponentu
  return (
    <div className="address-list">
      <h2>Lista twoich adresów</h2>
      <ul>
      {addressesList.map((address) => (
  <li key={address.id}>
    {`${address.address} ${address.city} ${address.zipCode} ${address.country} `} {' '}
    <button onClick={() => deleteAddress(address.id)}>Usuń</button>
  </li>
))}
      </ul>

      {/* Formularz do dodawania/edycji adresu */}
      <div className="address-form">
      <h2>Dodaj adres</h2>
      <input
        type="text"
        placeholder="Ulica"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kod pocztowy"
        value={newZipCode}
        onChange={(e) => setNewZipCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kraj"
        value={newCountry}
        onChange={(e) => setNewCountry(e.target.value)}
      />
      <input
        type="text"
        placeholder="Miasto"
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
      />
      <button onClick={addNewAddress}>Dodaj adres</button>
      </div>
    </div>
  );
};

export default Addresses;
