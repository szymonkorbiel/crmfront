import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import AuthService from '../../externals/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../styles/EbokHome.css';

const Settings = () => {
  const [settingsDetails, setSettingsDetails] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [updatedSettings, setUpdatedSettings] = useState({
    emailNotification: false,
    smsNotification: false,
    twoFactor: false,
  });
  const [disableTwoFactorConfirmation, setDisableTwoFactorConfirmation] = useState(false);
  const [changesSaved, setChangesSaved] = useState(false); // Nowa zmienna stanu dla komunikatu

  const navigate = useNavigate();

  const fetchSettingsDetails = async (customerId) => {
    try {
      const response = await instance.get(`/customers/settings/${customerId}/detail`);
      const data = await response.data.settings;
      setSettingsDetails(data);
      setUpdatedSettings(data);
    } catch (error) {
      console.error('Error fetching settings details:', error);
    }
  };

  const updateSettings = async (customerId) => {
    try {
      if (!updatedSettings.twoFactor && disableTwoFactorConfirmation) {
        const confirmation = window.confirm('Czy na pewno chcesz wyłączyć dwuskładnikową weryfikację?');
        if (!confirmation) return;
      }

      const response = await instance.put(`/customers/settings/${customerId}/edit`, {
        emailNotification: updatedSettings.emailNotification,
        smsNotification: updatedSettings.smsNotification,
        "2fa": updatedSettings.twoFactor,
      });

      if (response.ok) {
        console.log('Settings updated successfully');
        setChangesSaved(true); // Ustawienie stanu na true po zapisaniu zmian
        setTimeout(() => {
          setChangesSaved(false); // Resetowanie komunikatu po kilku sekundach
        }, 3000);
      } else {
        console.error('Error updating settings');
      }
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  const handleChangePassword = async () => {
    try {
      const response = await instance.post('/profile/password/change', {
        newPassword: newPassword,
        oldPassword: oldPassword
      });

      if (response.status === 200) {
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

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUpdatedSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  useEffect(() => {
    fetchSettingsDetails(AuthService.getCurrentUser().id);
  }, []);

  return (
    <div>
      {settingsDetails && (
        <form onSubmit={(e) => { e.preventDefault(); updateSettings(AuthService.getCurrentUser().id); }} className='settings-form'>
          <h1 className='ebokh1'>Ustawienia konta</h1>
          <label className='eboklabel'>
            Powiadomienia Email:
            <input
              className='ebokcheckbox'
              type="checkbox"
              name="emailNotification"
              checked={updatedSettings.emailNotification}
              onChange={handleInputChange}
            />
          </label><br />

          <label className='eboklabel'>
            Powiadomienia SMS:
            <input
              className='ebokcheckbox'
              type="checkbox"
              name="smsNotification"
              checked={updatedSettings.smsNotification}
              onChange={handleInputChange}
            />
          </label><br />

          <label className='eboklabel'>
            Dwuskładnikowa weryfikacja:
            <input
              className='ebokcheckbox'
              type="checkbox"
              name="twoFactor"
              checked={updatedSettings.twoFactor}
              onChange={(e) => {
                setDisableTwoFactorConfirmation(!e.target.checked);
                handleInputChange(e);
              }}
            />
          </label><br />

          <button className='ebokbutton' type="submit">Zatwierdź zmiany</button>
          {changesSaved && <p>Zmiany zapisane pomyślnie</p>} {/* Komunikat po zapisaniu zmian */}
        </form>
      )}

      <div className="password-form">
        <h2 className='ebokh2'>Zmień hasło</h2>
        <form className='settings-form'>
          <label className="eboklabel" htmlFor="oldPassword">Stare hasło:</label>
          <input
            className='ebokpassword'
            type="password"
            id="oldPassword"
            placeholder="Wprowadź stare hasło..."
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          /><br />

          <label className="eboklabel" htmlFor="newPassword">Nowe hasło:</label>
          <input
            className='ebokpassword'
            type="password"
            id="newPassword"
            placeholder="Wprowadź nowe hasło..."
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          /><br />

          <button className='ebokbutton' onClick={handleChangePassword}>Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
