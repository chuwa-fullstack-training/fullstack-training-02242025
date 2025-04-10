import React, { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://api.github.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 20)))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const fetchUserDetails = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedUser(data);
        fetchRepos(username);
      })
      .catch((error) => console.error("Error fetching user details:", error));
  };

  const fetchRepos = (username) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 3))) // Show first 5 repos
      .catch((error) => console.error("Error fetching repos:", error));
  };

  return (
    <div className="container">

  <div className="sidebar">
    <h2>GitHub Users</h2>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          
          <th>Username</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id} onClick={() => fetchUserDetails(user.login)}>
            <td>{index + 1}</td>
            <td>{user.login}</td> 
            <td>
              <img 
                src={user.avatar_url} 
                alt={user.login} 
                className="avatar" 
                style={{ width: '40px', height: '40px' }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


      <div className="profile">
        {selectedUser ? (
          <div className="profile-details">
            <img src={selectedUser.avatar_url} alt={selectedUser.login} className="profile-avatar" />
            <h2>{selectedUser.login}</h2>
            <p>{selectedUser.name || "No name available"}</p>
            {selectedUser.location && (
    <p>
      <strong>Location:</strong> {selectedUser.location}
    </p>
  )}
            <strong>Repositories:</strong>
            <ul>
              {repos.map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Select a user to view details</p>
        )}
      </div>
    </div>
  );
}

export default App;
