import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import '../styles/EbokHome.css';
import MojeKonto from './EbokComponents/MojeKonto';
import MojeUmowy from './EbokComponents/MojeUmowy';
import InformacjeOFakturach from './EbokComponents/InformacjeOFakturach';
import AktualneUslugi from './EbokComponents/AktualneUslugi';
import InformacjeOUrzadzeniach from './EbokComponents/InformacjeOUrzadzeniach';
import Reklamacje from './EbokComponents/Reklamacje';
import Serwisy from './EbokComponents/Serwisy';

const EbokHome = () => {
  const [selectedTab, setSelectedTab] = React.useState('MojeKonto');

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="home-container">
        <div className="left-aaa">
        <div className='list'>
        <div
          className={`tab ${selectedTab === 'mojeKonto' ? 'active' : ''}`}
          onClick={() => handleTabClick('mojeKonto')}
        >
          <Link to="/ebokhome/moje-konto" className={`tab ${selectedTab === 'mojeKonto' ? 'active' : ''}`}>
  Moje Konto
</Link>

        </div>
        </div>
        <div className='list'>
        <div
          className={`tab ${selectedTab === 'mojeUmowy' ? 'active' : ''}`}
          onClick={() => handleTabClick('mojeUmowy')}
        >
          <Link to="/ebokhome/moje-umowy">Moje Umowy</Link>
        </div>
        </div>
        <div className='list'>
        <div
          className={`tab ${selectedTab === 'faktury' ? 'active' : ''}`}
          onClick={() => handleTabClick('faktury')}
        >
          <Link to="/ebokhome/informacje-o-fakturach">Informacje o Fakturach</Link>
        </div></div>
        <div className='list'>
        <div
          className={`tab ${selectedTab === 'uslugi' ? 'active' : ''}`}
          onClick={() => handleTabClick('uslugi')}
        >
          <Link to="/ebokhome/aktualne-uslugi">Aktualne Usługi</Link>
        </div></div>
        <div className='list'>
        <div
          className={`tab ${selectedTab === 'urzadzenia' ? 'active' : ''}`}
          onClick={() => handleTabClick('urzadzenia')}
        >
          <Link to="/ebokhome/informacje-o-urzadzeniach">Informacje o Urządzeniach</Link>
        </div></div>
        <div className='list'>
        <div
          className={`tab ${selectedTab === 'reklamacje' ? 'active' : ''}`}
          onClick={() => handleTabClick('reklamacje')}
        >
          <Link to="/ebokhome/reklamacje">Reklamacje</Link>
        </div></div>
        <div className='list'>
        <div
          className={`tab ${selectedTab === 'serwisy' ? 'active' : ''}`}
          onClick={() => handleTabClick('serwisy')}
        >
          <Link to="/ebokhome/serwisy">Serwisy</Link>
        </div></div>
        </div>
        <div className="right-aa">
          {/* Zawartość dla prawej kolumny */}
          <Routes>
          <Route
            path="/ebokhome/moje-konto"
            element={<MojeKonto />}
          />
          <Route
            path="/ebokhome/moje-umowy"
            element={<MojeUmowy />}
          />
          <Route
            path="/ebokhome/informacje-o-fakturach"
            element={<InformacjeOFakturach />}
          />
          <Route
            path="/ebokhome/aktualne-uslugi"
            element={<AktualneUslugi />}
          />
          <Route
            path="/ebokhome/informacje-o-urzadzeniach"
            element={<InformacjeOUrzadzeniach />}
          />
          <Route
            path="/ebokhome/reklamacje"
            element={<Reklamacje />}
          />
          <Route
            path="/ebokhome/serwisy"
            element={<Serwisy />}
          />
        </Routes>
        </div>
    </div>
  );
};

export default EbokHome;
