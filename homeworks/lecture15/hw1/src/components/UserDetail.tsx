import { useParams, Link } from "react-router-dom";

const UserDetail = () => {
  const { login } = useParams();

  // Mock user data
  const users = {
    john: { name: "John Doe", email: "john@example.com", role: "Admin" },
    jane: { name: "Jane Smith", email: "jane@example.com", role: "User" },
    bob: { name: "Bob Johnson", email: "bob@example.com", role: "User" },
  };

  const user = users[login as keyof typeof users];

  if (!user) {
    return (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h2>User not found</h2>
        <Link to="/users">Back to Users</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>User Details</h2>
      <div style={{ marginBottom: "20px" }}>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>
      <Link
        to="/users"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        Back to Users
      </Link>
    </div>
  );
};

export default UserDetail;
