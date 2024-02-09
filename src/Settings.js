import React from 'react';
import './SettingsPage.css'; 
const SettingsPage = () => {

  const handleLogout = () => alert('Logout Functionality Here');
  const handleChangeTheme = () => alert('Theme Change Functionality Here');

  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>
      <div className="settings-section">
        <h3>Profile</h3>
        <button>Edit Profile</button>
      </div>
      <div className="settings-section">
        <h3>Details</h3>
        <button>View/Edit Details</button>
      </div>
      <div className="settings-section">
        <h3>Theme</h3>
        <button onClick={handleChangeTheme}>Change Theme</button>
      </div>
      <div className="settings-section">
        <h3>Logout</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default SettingsPage;
