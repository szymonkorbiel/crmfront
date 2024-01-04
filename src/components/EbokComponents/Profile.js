import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import AuthService from '../../externals/auth';
import { Navigate, useNavigate } from 'react-router-dom';
// Komponent Profile
const Profile = () => {
  // Stan dla szczegółów profilu
  const [profileDetails, setProfileDetails] = useState(null);
  // Stan dla edycji profilu
  const [editMode, setEditMode] = useState(false);
  // Stan dla nowego hasła
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const navigate = useNavigate();
  // Funkcja pobierająca szczegóły profilu
  const fetchProfileDetails = async () => {
    try {
      const response = await instance.get('/profile/detail');
      const data = response.data.profile;
      setProfileDetails(data);
    } catch (error) {
      console.error('Error fetching profile details:', error);
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

  // Efekt pobierający szczegóły profilu po zamontowaniu komponentu
  useEffect(() => {
    fetchProfileDetails();
  }, []);

  // Renderowanie komponentu
  return (
    <div>
      {/* Wyświetlenie szczegółów profilu */}
      <h2>Profile Details</h2>
      {profileDetails ? (
        <div>
          <p>ID: {profileDetails.id}</p>
          <p>First Name: {profileDetails.firstName}</p>
          <p>Last Name: {profileDetails.lastName}</p>
          <p>Email: {profileDetails.email}</p>
          <p>Phone Number: {profileDetails.phoneNumber}</p>
          <p>Is Verified: {profileDetails.isVerified ? 'Yes' : 'No'}</p>
          <p>Is Active: {profileDetails.isActive ? 'Yes' : 'No'}</p>
          <p>Social Security Number: {profileDetails.socialSecurityNumber}</p>
          <p>Birth Date: {profileDetails.birthDate?.date}</p>
          <p>Two Factor Auth: {profileDetails.twoFactorAuth ? 'Yes' : 'No'}</p>
          <p>SMS Notification: {profileDetails.smsNotification ? 'Yes' : 'No'}</p>
          <p>Email Notification: {profileDetails.emailNotification ? 'Yes' : 'No'}</p>
          <p>Number of Contracts: {profileDetails.numberOfContracts}</p>
          <p>Number of Devices: {profileDetails.numberOfDevices}</p>
          <p>Number of Service Requests: {profileDetails.numberOfServiceRequests}</p>
          <p>Number of Bills: {profileDetails.numberOfBills}</p>
          <p>Number of Payments: {profileDetails.numberOfPayments}</p>
          <p>Number of Messages: {profileDetails.numberOfMessages}</p>
          {/* Dodaj pozostałe informacje zgodnie z odpowiedzią z API */}
        </div>
      ) : (
        <p>Loading profile details...</p>
      )}

      {/* Edycja profilu */}
      {editMode && (
        <div>
          <h2>Edit Profile</h2>
          {/* Dodaj pola do edycji profilu zgodnie z odpowiedzią z API */}
        </div>
      )}

      {/* Zmiana hasła */}
      <div>
        <h2>Change Password</h2>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleChangePassword}>Change Password</button>
      </div>
    </div>
  );
};

export default Profile;
