// Importy
import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import AuthService from '../../externals/auth';
// Komponent Settings
const Settings = () => {
  // Stan dla szczegółów ustawień
  const [settingsDetails, setSettingsDetails] = useState(null);

  // Funkcja pobierająca szczegóły ustawień
  const fetchSettingsDetails = async (customerId) => {
    try {
      const response = await instance.get(`http://localhost:8000/api/public/customers/settings/${customerId}/detail`);
      const data = await response.json();
      setSettingsDetails(data.settings);  // Ustawienie tylko danych z sekcji "settings"
    } catch (error) {
      console.error('Error fetching settings details:', error);
    }
  };

  // Funkcja aktualizująca ustawienia (PUT)
  const updateSettings = async (customerId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/public/customers/settings/${customerId}/edit`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Dodaj dodatkowe nagłówki, jeśli są wymagane
        },
        // Dodaj dane, jeśli są wymagane do aktualizacji
        body: JSON.stringify(settingsDetails),  // Użycie aktualnych danych ustawień
      });

      // Sprawdź, czy aktualizacja zakończyła się sukcesem
      if (response.ok) {
        console.log('Settings updated successfully');
        // Możesz dodać dodatkowe akcje po aktualizacji
      } else {
        console.error('Error updating settings');
      }
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  // Efekt pobierający szczegóły ustawień po zamontowaniu komponentu
  useEffect(() => {
    // Przykładowe ID klienta (może być pobrane od użytkownika)
    const customerId = "018c68d6-4e01-7edb-a124-f74afe28a937";
    fetchSettingsDetails(customerId);
  }, []);

  // Renderowanie komponentu
  return (
    <div>
      {/* Wyświetlenie szczegółów ustawień */}
      <h2>Settings Details</h2>
      {settingsDetails && (
        <div>
          <p>ID: {settingsDetails.id}</p>
          <p>Email Notification: {settingsDetails.emailNotification.toString()}</p>
          <p>SMS Notification: {settingsDetails.smsNotification.toString()}</p>
          <p>Two-Factor: {settingsDetails.twoFactor.toString()}</p>
        </div>
      )}

      {/* Przykład aktualizacji ustawień */}
      {settingsDetails && (
        <button onClick={() => updateSettings(settingsDetails.id)}>Update Settings</button>
      )}
    </div>
  );
};

export default Settings;
