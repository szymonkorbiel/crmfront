// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Dodane Navigate

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import LogoutConfirmation from './components/LogoutConfirmation';
import BackToTopButton from './components/BackToTopButton';
import EbokHome from './components/EbokHome';
import MainContent from './views/MainContent';
import About from './views/About';
import Contact from './views/Contact';
import Offer from './views/Offer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/oferty" element={<Offer />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/logoutconfirmation" element={<LogoutConfirmation />} />
        <Route path="/ebokhome/*" element={<EbokHome />} />
        {/* Dodane ogólne przekierowanie dla /ebokhome */}
        <Route
          path="/ebokhome"
          element={<Navigate to="/ebokhome/moje-konto" />} 
        />
      </Routes>
      <Footer />
      <BackToTopButton />
      <ScrollToTop />
    </Router>
  );
}

export default App;
