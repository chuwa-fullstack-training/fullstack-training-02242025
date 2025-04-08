import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>GitHub Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>username</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 10).map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/users/${user.login}`}>{user.login}</Link>
              </td>
              <td>
                <img src={user.avatar_url} width="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
