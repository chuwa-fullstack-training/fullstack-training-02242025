import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>username</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => navigate(`/users/${user.login}`)}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>
                <img src={user.avatar_url} alt="avatar" width="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
