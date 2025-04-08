import { Link } from "react-router-dom";

const Users = () => {
  // Mock user data
  const users = [
    { id: 1, login: "john", name: "John Doe" },
    { id: 2, login: "jane", name: "Jane Smith" },
    { id: 3, login: "bob", name: "Bob Johnson" },
  ];

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Users List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <Link
              to={`/users/${user.login}`}
              style={{
                display: "block",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                textDecoration: "none",
                color: "#333",
              }}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
