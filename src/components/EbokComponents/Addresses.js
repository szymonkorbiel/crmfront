// Importy
import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';

// Komponent Addresses
const Addresses = () => {
  // Stan dla listy adresów
  const [addressesList, setAddressesList] = useState([]);
  // Stan dla szczegółów wybranego adresu
  const [selectedAddress, setSelectedAddress] = useState(null);
  // Stan dla nowego adresu
  const [newAddress, setNewAddress] = useState('');

  // Funkcja pobierająca listę adresów
  const fetchAddressesList = async () => {
    try {
      const response = await instance.get('http://localhost:8000/api/public/customers/address/list');
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
      const response = await fetch('http://localhost:8000/api/public/customers/address/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: newAddress }),
      });

      // Sprawdź, czy dodawanie adresu zakończyło się sukcesem
      if (response.ok) {
        console.log('Address added successfully!');
        // Opcjonalnie: Zaktualizuj listę adresów po udanym dodaniu
        fetchAddressesList();
        // Opcjonalnie: Zresetuj stan nowego adresu po udanym dodaniu
        setNewAddress('');
      } else {
        console.error('Error adding new address');
      }
    } catch (error) {
      console.error('Error adding new address:', error);
    }
  };

  // Funkcja do edycji istniejącego adresu
  const editAddress = async (addressId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/public/customers/address/${addressId}/edit`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: newAddress }),
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
      const response = await fetch(`http://localhost:8000/api/public/customers/address/${addressId}/delete`, {
        method: 'DELETE',
      });

      // Sprawdź, czy usuwanie adresu zakończyło się sukcesem
      if (response.ok) {
        console.log('Address deleted successfully!');
        // Opcjonalnie: Zaktualizuj listę adresów po udanym usunięciu
        fetchAddressesList();
      } else {
        console.error('Error deleting address');
      }
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
    <div>
      {/* Wyświetlenie listy adresów */}
      <h2>Addresses List</h2>
      <ul>
        {addressesList.map((address) => (
          <li key={address.id}>
            {`${address.address} ${address.country}`} {address.city}  -{' '}
            <button onClick={() => fetchAddressDetails(address.id)}>Details</button>
            <button onClick={() => deleteAddress(address.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Wyświetlenie szczegółów wybranego adresu */}
      {selectedAddress && (
        <div>
          <h2>Address Details</h2>
          <p>ID: {selectedAddress.id}</p>
          {/* Dodaj pozostałe informacje zgodnie z odpowiedzią z API */}
        </div>
      )}

      {/* Formularz do dodawania/edycji adresu */}
      <div>
        <h2>Add Address</h2>
        <input
          type="text"
          placeholder="New Address"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <button onClick={addNewAddress}>Add Address</button>
        {/* <button onClick={() => editAddress(selectedAddress.id)}>Edit Address</button> */}
      </div>
    </div>
  );
};

export default Addresses;
