// Importy
import React, { useState, useEffect } from 'react';

// Komponent Profile
const Profile = () => {
  // Stan dla szczegółów profilu
  const [profileDetails, setProfileDetails] = useState(null);
  // Stan dla edycji profilu
  const [editMode, setEditMode] = useState(false);
  // Stan dla nowego hasła
  const [newPassword, setNewPassword] = useState('');

  // Funkcja pobierająca szczegóły profilu
  const fetchProfileDetails = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/public/profile/detail');
      const data = await response.json();
      setProfileDetails(data);
    } catch (error) {
      console.error('Error fetching profile details:', error);
    }
  };

  // Funkcja do zmiany hasła
  const handleChangePassword = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/public/profile/password/change', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      // Sprawdź, czy zmiana hasła zakończyła się sukcesem
      if (response.ok) {
        console.log('Password changed successfully!');
        // Opcjonalnie: Zresetuj stan nowego hasła po udanej zmianie
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
          <p>Name: {profileDetails.name}</p>
          <p>Email: {profileDetails.email}</p>
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
