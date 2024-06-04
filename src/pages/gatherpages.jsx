import React, { useState } from 'react';
import Header from '../components/header'
import User from '../components/user';
import Riwayat from '../components/riwayat';
import Tagihan from '../components/tagihan';
import Detail from '../components/detail';


const Gatherpages = () => {
  const [activeTab, setActiveTab] = useState('akun-saya');

  const renderContent = () => {
    switch (activeTab) {
      case 'akun-saya':
        return <User/>;
      case 'detail-kelas': 
        return <Detail />;
      case 'riwayat-periode-kelas':
        return <Riwayat/>;
      case 'tagihan-saya':
        return <Tagihan/>;
      default:
        return <User/>;
    }
  };

  return (
    <div>
      <Header className="header"/>
      <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'akun-saya' ? 'active' : ''}`} onClick={() => setActiveTab('akun-saya')}>
            Akun Saya
          </a>
        </li>
        <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'detail-kelas' ? 'active' : ''}`}
              onClick={() => setActiveTab('detail-kelas')}
            >
              Detail Kelas
            </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'riwayat-periode-kelas' ? 'active' : ''}`} onClick={() => setActiveTab('riwayat-periode-kelas')}>
            Riwayat Periode Kelas
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'tagihan-saya' ? 'active' : ''}`} onClick={() => setActiveTab('tagihan-saya')}>
            Tagihan Saya
          </a>
        </li>
      </ul>
      <div className="tab-content">
        {renderContent()}
      </div>
      </div>
    </div>
  );
}

export default Gatherpages;
