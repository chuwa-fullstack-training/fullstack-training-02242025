import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

import UserCard from "./UserCard";

export default function User() {
  const [users, setUsers] = useState(null);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleSelected = (user) => setSelected(user);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <table className="table-section">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => handleSelected(user)}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>
                <img src={user.avatar_url} style={{ width: "60px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="card-section">
        {selected && (
          <UserCard url={selected.url} reposUrl={selected.repos_url} />
        )}
      </div>
    </div>
  );
}
