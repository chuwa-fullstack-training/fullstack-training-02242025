import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.github.com/users?per_page=10')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>GitHub Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => navigate(`/users/${user.login}`)} style={{ cursor: 'pointer' }}>
            <img src={user.avatar_url} alt={user.login} width="30" /> {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
