import React, { useState } from 'react';
import UserList from './UserList';
import UserProfile from './UserProfile';
import './App.css';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app-container">
      <UserList onSelectUser={setSelectedUser} />
      <UserProfile user={selectedUser} />
    </div>
  );
};

export default App;
