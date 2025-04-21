import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <div className="user-list">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>GitHub Users</h2>
          <button onClick={logout} style={{ padding: "6px 12px", fontSize: "14px" }}>
            Logout
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                onClick={() => navigate(`/users/${user.login}`)}
                style={{ cursor: "pointer" }}
              >
                <td>{user.id}</td>
                <td>{user.login}</td>
                <td>
                  <img src={user.avatar_url} alt="avatar" width="30" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
