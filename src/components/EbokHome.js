import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import '../styles/EbokHome.css';
import Profile from './EbokComponents/Profile';
import Invoices from './EbokComponents/Invoices';
import Contracts from './EbokComponents/Contracts';
import Addresses from './EbokComponents/Addresses';
import Settings from './EbokComponents/Settings';
import Messages from './EbokComponents/Messages';
import Payments from './EbokComponents/Payments';
import ServiceRequests from './EbokComponents/ServiceRequests';
import ServiceVisits from './EbokComponents/ServiceVisits';
import { IoMan, FaFileInvoice, FaFileContract, FaAddressBook, IoMdSettings, FaEnvelope, MdRouter, MdLocalOffer, FaDollarSign, MdOutlineMiscellaneousServices, RiCustomerService2Fill } from "../assets/graphics/icons/iconImports";
const TabLink = ({ to, label, selectedTab, onClick }) => {
  const isActive = selectedTab === label;
  return (
    <div className={`eboktab ${isActive ? 'active' : ''}`} onClick={() => onClick(label)}>
      <Link to={to} className={`eboktab-link ${isActive ? 'active' : ''}`}>
        {label}
      </Link>
    </div>
  );
};

const EbokHome = () => {
  const [selectedTab, setSelectedTab] = useState('Profile');

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="home-container">
      <div className="left-aaa">
      <TabLink to="/ebokhome/profile" label={<><IoMan /> Profil</>} selectedTab={selectedTab} onClick={handleTabClick} />
<TabLink to="/ebokhome/invoices" label={<><FaFileInvoice /> Faktury</>} selectedTab={selectedTab} onClick={handleTabClick} />
<TabLink to="/ebokhome/contracts" label={<><FaFileContract /> Umowy</>} selectedTab={selectedTab} onClick={handleTabClick} />
<TabLink to="/ebokhome/addresses" label={<><FaAddressBook /> Adresy</>} selectedTab={selectedTab} onClick={handleTabClick} />
<TabLink to="/ebokhome/settings" label={<><IoMdSettings /> Ustawienia</>} selectedTab={selectedTab} onClick={handleTabClick} />
<TabLink to="/ebokhome/messages" label={<><FaEnvelope /> Wiadomości</>} selectedTab={selectedTab} onClick={handleTabClick} />
<TabLink to="/ebokhome/payments" label={<><FaDollarSign /> Opłaty</>} selectedTab={selectedTab} onClick={handleTabClick} />
<TabLink to="/ebokhome/service-requests" label={<><RiCustomerService2Fill /> Żądania serwisowe</>} selectedTab={selectedTab} onClick={handleTabClick} />
<TabLink to="/ebokhome/service-visits" label={<><MdOutlineMiscellaneousServices /> Wizyty serwisowe</>} selectedTab={selectedTab} onClick={handleTabClick} />

      </div>
      <div className="right-aa">
        {/* Zawartość dla prawej kolumny */}
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="contracts" element={<Contracts />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="settings" element={<Settings />} />
          <Route path="messages" element={<Messages />} />
          <Route path="payments" element={<Payments />} />
          <Route path="service-requests" element={<ServiceRequests />} />
          <Route path="service-visits" element={<ServiceVisits />} />
        </Routes>
      </div>
    </div>
  );
};

export default EbokHome;
