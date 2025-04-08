import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <>
          <p>Welcome {user}</p>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}
