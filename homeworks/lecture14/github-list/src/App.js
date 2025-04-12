import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import "./App.css"; // Add styling here

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Error getting data:", e);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <div className="user-list">
        <h1>GitHub Users</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{user.id}</td>
                  <td>{user.login}</td>
                  <td>
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      height="60"
                      style={{ borderRadius: "8px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="profile-section">
        {selectedUser ? (
          <Profile user={selectedUser} />
        ) : (
          <p style={{ padding: 24 }}>Select a user to view profile</p>
        )}
      </div>
    </div>
  );
}

export default App;
