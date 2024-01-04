import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import AuthService from '../../externals/auth';

// Komponent Settings
const Settings = () => {
  // Stan dla szczegółów ustawień
  const [settingsDetails, setSettingsDetails] = useState(null);

  // Stan dla formularza aktualizacji ustawień
  const [updatedSettings, setUpdatedSettings] = useState({
    emailNotification: false,
    smsNotification: false,
    twoFactor: false,
  });

  // Funkcja pobierająca szczegóły ustawień
  const fetchSettingsDetails = async (customerId) => {
    try {
      const response = await instance.get(`/customers/settings/${customerId}/detail`);
      const data = await response.data.settings;
      setSettingsDetails(data);  // Ustawienie tylko danych z sekcji "settings"
      setUpdatedSettings(data);  // Ustawienie formularza aktualizacji na obecne ustawienia
    } catch (error) {
      console.error('Error fetching settings details:', error);
    }
  };

  // Funkcja aktualizująca ustawienia (PUT)
  const updateSettings = async (customerId) => {
    try {
      const response = await instance.put(`/customers/settings/${customerId}/edit`, {
        emailNotification: updatedSettings.emailNotification,
        smsNotification: updatedSettings.smsNotification,
        "2fa": updatedSettings.twoFactor,
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

  // Obsługa zmian w formularzu aktualizacji
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUpdatedSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Efekt pobierający szczegóły ustawień po zamontowaniu komponentu
  useEffect(() => {
    // Przykładowe ID klienta (może być pobrane od użytkownika)
    
    fetchSettingsDetails(AuthService.getCurrentUser().id);
  }, []);

  // Renderowanie komponentu
  return (
    <div>

      {/* Formularz aktualizacji ustawień */}
      {settingsDetails && (
        <form onSubmit={(e) => { e.preventDefault(); updateSettings(AuthService.getCurrentUser().id); }}>
          <label>
            Email Notification:
            <input
              type="checkbox"
              name="emailNotification"
              checked={updatedSettings.emailNotification}
              onChange={handleInputChange}
            />
          </label>

          <label>
            SMS Notification:
            <input
              type="checkbox"
              name="smsNotification"
              checked={updatedSettings.smsNotification}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Two-Factor Authentication:
            <input
              type="checkbox"
              name="twoFactor"
              checked={updatedSettings.twoFactor}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">Update Settings</button>
        </form>
      )}
    </div>
  );
};

export default Settings;
