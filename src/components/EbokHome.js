import React from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import '../styles/EbokHome.css';

const EbokHome = () => {
  const [selectedTab, setSelectedTab] = React.useState('Profile');

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="home-container">
      <div className="left-aaa">

         
      <div
    className={`eboktab ${selectedTab === 'Profile' ? 'active' : ''}`}
    onClick={() => handleTabClick('Profile')}
  >
    <Link to="/ebokhome/profile" className={`eboktab-link ${selectedTab === 'Profile' ? 'active' : ''}`}>
  Profile
</Link>
  </div>
         
         
          <div
            className={`eboktab ${selectedTab === 'Invoices' ? 'active' : ''}`}
            onClick={() => handleTabClick('Invoices')}
          >
            <Link to="/ebokhome/invoices" className={`eboktab-link ${selectedTab === 'Invoices' ? 'active' : ''}`}>
  Invoices
</Link>
          </div>
          <div
    className={`eboktab ${selectedTab === 'Contracts' ? 'active' : ''}`}
    onClick={() => handleTabClick('Contracts')}
  >
    <Link to="/ebokhome/contracts" className={`eboktab-link ${selectedTab === 'Contracts' ? 'active' : ''}`}>
  Contracts
</Link>
  </div>


  <div
    className={`eboktab ${selectedTab === 'Addresses' ? 'active' : ''}`}
    onClick={() => handleTabClick('Addresses')}
  >
    <Link to="/ebokhome/addresses" className={`eboktab-link ${selectedTab === 'Addresses' ? 'active' : ''}`}>
  Addresses
</Link>
  </div>

  <div
    className={`eboktab ${selectedTab === 'Settings' ? 'active' : ''}`}
    onClick={() => handleTabClick('Settings')}
  >
    <Link to="/ebokhome/settings" className={`eboktab-link ${selectedTab === 'Settings' ? 'active' : ''}`}>
  Settings
</Link>
  </div>


  <div
    className={`eboktab ${selectedTab === 'Documents' ? 'active' : ''}`}
    onClick={() => handleTabClick('Documents')}
  >
    <Link to="/ebokhome/documents" className={`eboktab-link ${selectedTab === 'Documents' ? 'active' : ''}`}>
  Documents
</Link>
  </div>


  <div
    className={`eboktab ${selectedTab === 'Messages' ? 'active' : ''}`}
    onClick={() => handleTabClick('Messages')}
  >
    <Link to="/ebokhome/messages" className={`eboktab-link ${selectedTab === 'Messages' ? 'active' : ''}`}>
  Messages
</Link>
  </div>



  <div
    className={`eboktab ${selectedTab === 'Models' ? 'active' : ''}`}
    onClick={() => handleTabClick('Models')}
  >
    <Link to="/ebokhome/models" className={`eboktab-link ${selectedTab === 'Models' ? 'active' : ''}`}>
  Models
</Link>
  </div>



  <div
    className={`eboktab ${selectedTab === 'Offers' ? 'active' : ''}`}
    onClick={() => handleTabClick('Offers')}
  >
    <Link to="/ebokhome/offers" className={`eboktab-link ${selectedTab === 'Offers' ? 'active' : ''}`}>
  Offers
</Link>
  </div>



  <div
    className={`eboktab ${selectedTab === 'Payments' ? 'active' : ''}`}
    onClick={() => handleTabClick('Payments')}
  >
    
<Link to="/ebokhome/payments" className={`eboktab-link ${selectedTab === 'Payments' ? 'active' : ''}`}>
  Payments
</Link>
  </div>


  <div
    className={`eboktab ${selectedTab === 'ServiceRequests' ? 'active' : ''}`}
    onClick={() => handleTabClick('ServiceRequests')}
  >
    <Link to="/ebokhome/service-requests" className={`eboktab-link ${selectedTab === 'ServiceRequests' ? 'active' : ''}`}>
  Service Requests
</Link>
  </div>



  <div
    className={`eboktab ${selectedTab === 'ServiceVisits' ? 'active' : ''}`}
    onClick={() => handleTabClick('ServiceVisits')}
  >
   <Link to="/ebokhome/service-visits" className={`eboktab-link ${selectedTab === 'ServiceVisits' ? 'active' : ''}`}>
  Service Visits
</Link>
  </div>

      </div>
      <div className="right-aa">
        {/* Zawartość dla prawej kolumny */}

       
      </div>
    </div>
  );
};

export default EbokHome;
