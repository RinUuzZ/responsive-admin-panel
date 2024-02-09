import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import SideBar from './SideBar';
import Dashboard from './Dashboard';
import Reports from './Reports';
import Settings from './Settings';
import Logout from './Logout';
import Login from './Login'; 
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {!isLoggedIn ? (
        <Login onLogin={setIsLoggedIn} />
      ) : (
        <div className='grid-container'>
          <Header />
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout onLogout={() => setIsLoggedIn(false)} />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
