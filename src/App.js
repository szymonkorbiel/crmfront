// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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

// Import komponentów dla trasy /ebokhome
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
        <Route path="/faq" element={<Contact />} />
        <Route path="/oferty" element={<Offer />} />
        <Route path="/loginform" element={<LoginForm setUser={setUser} />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/logoutconfirmation" element={<LogoutConfirmation />} />
        <Route path="/verify/account" element={<VerifyAccount />} />
        <Route path="/ebokhome" element={<EbokHome user={user} />}>
          <Route index element={<Navigate to="profile" />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="contracts" element={<Contracts />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="settings" element={<Settings />} />
          <Route path="messages" element={<Messages />} />
          <Route path="models" element={<Models />} />
          <Route path="offers" element={<Offers />} />
          <Route path="payments" element={<Payments />} />
          <Route path="profile" element={<Profile />} />
          <Route path="service-requests" element={<ServiceRequests />} />
          <Route path="service-visits" element={<ServiceVisits />} />
        </Route>
      </Routes>
      <Footer />
      <BackToTopButton />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
