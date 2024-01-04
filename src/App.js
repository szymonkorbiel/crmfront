// App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'; // Dodane Navigate


import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import LogoutConfirmation from './components/LogoutConfirmation';
import BackToTopButton from './components/BackToTopButton';
import VerifyAccount from './components/VerifyAccount';
import EbokHome from './components/EbokHome';
import MainContent from './views/MainContent';
import About from './views/About';
import Contact from './views/Contact';
import Offer from './views/Offer';
import Invoices from './components/EbokComponents/Invoices';
import Contracts from './components/EbokComponents/Contracts';
import Addresses from './components/EbokComponents/Addresses';
import Settings from './components/EbokComponents/Settings';
import Messages from './components/EbokComponents/Messages';
import Models from './components/EbokComponents/Models';
import Offers from './components/EbokComponents/Offers';
import Payments from './components/EbokComponents/Payments';
import Profile from './components/EbokComponents/Profile';
import ServiceRequests from './components/EbokComponents/ServiceRequests';
import ServiceVisits from './components/EbokComponents/ServiceVisits';



function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/oferty" element={<Offer />} />
        <Route path="/loginform" element={<LoginForm setUser={setUser}/>} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/logoutconfirmation" element={<LogoutConfirmation />} />
        <Route path="/verify/account" element={<VerifyAccount />} />
        <Route path="/ebokhome" element={<EbokHome user={user}/>} />
        <Route
          path="/ebokhome"
          element={<Navigate to="/ebokhome/profile" />} 
        />
          <Route
            path="/ebokhome/invoices"
            element={<Invoices />}
          />
          <Route
            path="/ebokhome/contracts"
            element={<Contracts />}
          />
          <Route
            path="/ebokhome/addresses"
            element={<Addresses />}
          />
          <Route
            path="/ebokhome/settings"
            element={<Settings />}
          />
          <Route
            path="/ebokhome/messages"
            element={<Messages />}
          />
          <Route
            path="/ebokhome/models"
            element={<Models />}
          />
          <Route
            path="/ebokhome/offers"
            element={<Offers />}
          />
          <Route
            path="/ebokhome/payments"
            element={<Payments />}
          />
          <Route
            path="/ebokhome/profile"
            element={<Profile />}
          />
          <Route
            path="/ebokhome/service-requests"
            element={<ServiceRequests />}
          />
          <Route
            path="/ebokhome/service-visits"
            element={<ServiceVisits />}
          />
      </Routes>
      <Footer />
      <BackToTopButton />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
