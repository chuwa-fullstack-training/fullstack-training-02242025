import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <>
          <h2>Welcome {user.username || "Guest"}</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Home;
