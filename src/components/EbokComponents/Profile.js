import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import '../../styles/EbokStyles/Profile.css';
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



  // Efekt pobierający szczegóły profilu po zamontowaniu komponentu
  useEffect(() => {
    fetchProfileDetails();
  }, []);

  // Renderowanie komponentu
  return (
    <div>
      <h2>Your profile details</h2>

{profileDetails ? (
  <div className="profile-grid">
    {/* Account Details */}
    <div className="profile-section">
      <h3>Your account</h3>
      <div className="value">{profileDetails.firstName}</div>
      <div className="value">{profileDetails.lastName}</div>
      <div className="value">{profileDetails.email}</div>
    </div>

    {/* Personal Details */}
    <div className="profile-section">
      <h3>Personal Details</h3>
      <div className="label">First Name:</div>
      <div className="value">{profileDetails.firstName}</div>

      <div className="label">Last Name:</div>
      <div className="value">{profileDetails.lastName}</div>

      <div className="label">Birth Date:</div>
      <div className="value">{profileDetails.birthDate?.date}</div>
    </div>

    {/* Contact Details */}
    <div className="profile-section">
      <h3>Contact Details</h3>
      <div className="label">Email:</div>
      <div className="value">{profileDetails.email}</div>

      <div className="label">Phone Number:</div>
      <div className="value">{profileDetails.phoneNumber}</div>
    </div>

    {/* Verification Details */}
    <div className="profile-section">
      <h3>Verification Details</h3>
      <div className="label">Is Verified:</div>
      <div className="value">{profileDetails.isVerified ? 'Yes' : 'No'}</div>

      <div className="label">Two Factor Auth:</div>
      <div className="value">{profileDetails.twoFactorAuth ? 'Yes' : 'No'}</div>

      <div className="label">Is Activated:</div>
    <div className="value">{profileDetails.isActive ? 'Yes' : 'No'}</div>
    </div>

    {/* Company Details */}
    <div className="profile-section">
      <h3>Company Details</h3>
      <div className="label">Social Security Number:</div>
      <div className="value">{profileDetails.socialSecurityNumber}</div>
      
    <div className="label">Number of Contracts:</div>
    <div className="value">{profileDetails.numberOfContracts}</div>

    <div className="label">Number of Devices:</div>
    <div className="value">{profileDetails.numberOfDevices}</div>

    <div className="label">Number of Service Requests:</div>
    <div className="value">{profileDetails.numberOfServiceRequests}</div>

    <div className="label">Number of Bills:</div>
    <div className="value">{profileDetails.numberOfBills}</div>

    <div className="label">Number of Payments:</div>
    <div className="value">{profileDetails.numberOfPayments}</div>

    <div className="label">Number of Messages:</div>
    <div className="value">{profileDetails.numberOfMessages}</div>

    </div>

        {/* Notification Details */}
        <div className="profile-section">
      <h3>Notification Settings</h3>
      
    <div className="label">SMS Notification:</div>
    <div className="value">{profileDetails.smsNotification ? 'Yes' : 'No'}</div>

    <div className="label">Email Notification:</div>
    <div className="value">{profileDetails.emailNotification ? 'Yes' : 'No'}</div>

    </div>

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

      

    </div>
  );
};

export default Profile;
