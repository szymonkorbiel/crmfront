// Importy
import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import '../../styles/EbokHome.css';
import AuthService from '../../externals/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { IoMan, FaFileInvoice, FaFileContract, FaAddressBook, IoMdSettings, FaEnvelope, MdRouter, MdLocalOffer, FaDollarSign, MdOutlineMiscellaneousServices, RiCustomerService2Fill } from "../../assets/graphics/icons/iconImports";

// Komponent Profile
const Profile = () => {
  // Stan dla szczegółów profilu
  const [profileDetails, setProfileDetails] = useState(null);
  // Stan dla edycji profilu
  const [editMode, setEditMode] = useState(false);
  // Stan dla nowego hasła

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

  // Efekt pobierający szczegóły profilu po zamontowaniu komponentu
  useEffect(() => {
    fetchProfileDetails();
  }, []);

  // Renderowanie komponentu
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Informacje o Twoim koncie</h2>

      {profileDetails ? (
        <div className="profile-grid">
          {/* Account Details */}
          <div className="profile-section">
            <h3 className='ebokh3'>Podstawowe dane</h3>
            <div className="ebokvalue">{profileDetails.firstName}</div>
            <div className="ebokvalue">{profileDetails.lastName}</div>
            <div className="ebokvalue">{profileDetails.email}</div>
          </div>

          {/* Personal Details */}
          <div className="profile-section">
            <h3 className='ebokh3'>Szczegóły personalne</h3>
            <div className="eboklabel">Imię:</div>
            <div className="ebokvalue">{profileDetails.firstName}</div>

            <div className="eboklabel">Nazwisko:</div>
            <div className="ebokvalue">{profileDetails.lastName}</div>

            <div className="eboklabel">Data urodzenia:</div>
            <div className="ebokvalue">{formatDateWithoutTime(profileDetails.birthDate?.date)}</div>
          </div>

          {/* Contact Details */}
          <div className="profile-section">
            <h3 className='ebokh3'>Szczegóły kontaktowe</h3>
            <div className="eboklabel">Email:</div>
            <div className="ebokvalue">{profileDetails.email}</div>

            <div className="eboklabel">Numer telefonu:</div>
            <div className="ebokvalue">{profileDetails.phoneNumber}</div>
          </div>

          {/* Verification Details */}
          <div className="profile-section">
            <h3 className='ebokh3'>Szczegóły weryfikacji</h3>
            <div className="eboklabel">Czy konto jest zweryfikowane:</div>
            <div className="ebokvalue">{profileDetails.isVerified ? 'Tak' : 'Nie'}</div>

            <div className="eboklabel">Podwójna autentykacja:</div>
            <div className="ebokvalue">{profileDetails.twoFactorAuth ? 'Tak' : 'Nie'}</div>

            <div className="eboklabel">Czy konto jest aktywowane:</div>
            <div className="ebokvalue">{profileDetails.isActive ? 'Tak' : 'Nie'}</div>
          </div>

          {/* Company Details */}
          <div className="profile-section">
            <h3 className='ebokh3'>Inne</h3>
            <div className="eboklabel">Numer ubezpieczenia:</div>
            <div className="ebokvalue">{profileDetails.socialSecurityNumber}</div>

            <div className="eboklabel">Liczba umów:</div>
            <div className="ebokvalue">{profileDetails.numberOfContracts}</div>

            <div className="eboklabel">Liczba urządzeń:</div>
            <div className="ebokvalue">{profileDetails.numberOfDevices}</div>

            <div className="eboklabel">Liczba serwisów:</div>
            <div className="ebokvalue">{profileDetails.numberOfServiceRequests}</div>

            <div className="eboklabel">Liczba rachunków:</div>
            <div className="ebokvalue">{profileDetails.numberOfBills}</div>

            <div className="eboklabel">Liczba płatności:</div>
            <div className="ebokvalue">{profileDetails.numberOfPayments}</div>

            <div className="eboklabel">Liczba wiadomości:</div>
            <div className="ebokvalue">{profileDetails.numberOfMessages}</div>
          </div>

          {/* Notification Details */}
          <div className="profile-section">
            <h3 className='ebokh3'>Informacje o powiadomieniach</h3>

            <div className="eboklabel">Powiadomienia SMS:</div>
            <div className="ebokvalue">{profileDetails.smsNotification ? 'Tak' : 'Nie'}</div>

            <div className="eboklabel">Powiadomienia Email:</div>
            <div className="ebokvalue">{profileDetails.emailNotification ? 'Tak' : 'Nie'}</div>
          </div>

        </div>
      ) : (
        <p className='ebokp'>Ładowanie szczegółów profilu...</p>
      )}
    </div>
  );
};

export default Profile;
