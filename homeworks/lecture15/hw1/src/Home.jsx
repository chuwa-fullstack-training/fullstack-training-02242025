import { Link } from "react-router-dom";

export default function Home({ user, setUser }) {
  const handleClick = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ margin: "2px" }}> Home Page</div>
      {user ? (
        <div style={{ textAlign: "center" }}>
          <div style={{ margin: "2px" }}>Welcome User </div>
          <button onClick={handleClick}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}
