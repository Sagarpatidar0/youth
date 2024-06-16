import  { useState } from 'react';
import BasicForm from './BasicForm';
import AccountForm from './AccountForm';
import EmailForm from './EmailForm';
import './Settings.css';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('basic');

  return (
    <div className="settings-container">
        <h1>SETTINGS</h1>
      <nav className="settings-nav">
        <button className={`nav-button ${activeSection === 'basic' ? 'active' : ''}`} onClick={() => setActiveSection('basic')}>Basics</button>
        <button className={`nav-button ${activeSection === 'account' ? 'active' : ''}`} onClick={() => setActiveSection('account')}>Account</button>
        <button className={`nav-button ${activeSection === 'email' ? 'active' : ''}`} onClick={() => setActiveSection('email')}>Email notifications</button>
      </nav>
      <div className="settings-content">
        {activeSection === 'basic' && <BasicForm className="content-section active" />}
        {activeSection === 'account' && <AccountForm className="content-section active" />}
        {activeSection === 'email' && <EmailForm className="content-section active" />}
      </div>
    </div>
  );
};

export default Settings;
