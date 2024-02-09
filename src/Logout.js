import React from 'react';

const Logout = ({ onLogout }) => {
  
  return (
    <div>
      <h1>You are logged out!</h1>
      <button onClick={onLogout}>Log In Again</button>
    </div>
  );
};

export default Logout;
