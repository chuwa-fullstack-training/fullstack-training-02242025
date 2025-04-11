import React, { useEffect, useState } from 'react';
import './hw1.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const fetchUserDetails = async (username) => {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userRes.json();
    setSelectedUser(userData);

    const repoRes = await fetch(userData.repos_url);
    const repoData = await repoRes.json();
    setRepos(repoData.slice(0, 5)); // limit to 5 repos
  };

  return (
    <div className="container">
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} onClick={() => fetchUserDetails(user.login)}>
                <td>{user.id}</td>
                <td>{user.login}</td>
                <td><img src={user.avatar_url} alt="avatar" width="50" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="profile">
        {selectedUser && (
          <div className="card">
            <img className="avatar" src={selectedUser.avatar_url} alt="avatar" />
            <h2>{selectedUser.name || selectedUser.login}</h2>
            <p>Location: {selectedUser.location || 'N/A'}</p>
            <h4>Repositories:</h4>
            <ul>
              {repos.map(repo => (
                <li key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                  <p>{repo.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
