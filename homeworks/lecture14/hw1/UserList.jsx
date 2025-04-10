import React, { useEffect, useState } from 'react';

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users?per_page=10')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="user-list">
      <table>
        <thead>
          <tr><th>ID</th><th>Username</th><th>Image</th></tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} onClick={() => onSelectUser(user.login)}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td><img src={user.avatar_url} alt={user.login} width="50" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
