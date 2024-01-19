import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import AuthService from '../../externals/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../styles/EbokHome.css';
// Komponent Settings
const Settings = () => {
  // Stan dla szczegółów ustawień
  const [settingsDetails, setSettingsDetails] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const navigate = useNavigate();
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

    // Funkcja do zmiany hasła
    const handleChangePassword = async () => {
      try {
        const response = await instance.post('/profile/password/change', {
          newPassword:newPassword,
          oldPassword:oldPassword
        });
  
        // Sprawdź, czy zmiana hasła zakończyła się sukcesem
        if (response.status==200) {
          console.log('Password changed successfully!');
          AuthService.logout();
          navigate('/loginform');
          setNewPassword('');
        } else {
          console.error('Error changing password');
        }
      } catch (error) {
        console.error('Error changing password:', error);
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
          <h1 className='ebokh1'>Ustawienia konta</h1>
          <label className='eboklabel'>
            Email Notification:
            <input
              className='ebokcheckbox'
              type="checkbox"
              name="emailNotification"
              checked={updatedSettings.emailNotification}
              onChange={handleInputChange}
            />
          </label>

          <label className='eboklabel'>
            SMS Notification:
            <input
              className='ebokcheckbox'
              type="checkbox"
              name="smsNotification"
              checked={updatedSettings.smsNotification}
              onChange={handleInputChange}
            />
          </label>

          <label className='eboklabel'>
            Two-Factor Authentication:
            <input
              className='ebokcheckbox'
              type="checkbox"
              name="twoFactor"
              checked={updatedSettings.twoFactor}
              onChange={handleInputChange}
            />
          </label>

          <button className='ebokbutton' type="submit">Update Settings</button>
        </form>
      )}

      {/* Zmiana hasła */}
      <div className="password-form">
  <h2 className='ebokh2'>Change Password</h2>
  <form>
    <label className="eboklabel" htmlFor="oldPassword">Old Password:</label>
    <input
      className='ebokpassword'
      type="password"
      id="oldPassword"
      placeholder="Enter your old password"
      value={oldPassword}
      onChange={(e) => setOldPassword(e.target.value)}
    />

    <label className="eboklabel" htmlFor="newPassword">New Password:</label>
    <input
      className='ebokpassword'
      type="password"
      id="newPassword"
      placeholder="Enter your new password"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
    />

    <button className='ebokbutton' onClick={handleChangePassword}>Change Password</button>
  </form>
</div>
    </div>
  );
};

export default Settings;
