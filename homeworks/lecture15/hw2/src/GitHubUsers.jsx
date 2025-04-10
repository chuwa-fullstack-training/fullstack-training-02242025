import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GitHubUsers.css';

const API_URL = 'https://api.github.com/users';

function GitHubUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 20)))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUserClick = (username) => {
    navigate(`/users/${username}`);
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
              <tr
                key={user.id}
                onClick={() => handleUserClick(user.login)}
                className="user-row"
              >
                <td>{index + 1}</td>
                <td>{user.login}</td>
                <td>
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="avatar"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GitHubUsers;