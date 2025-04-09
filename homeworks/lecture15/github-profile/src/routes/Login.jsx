import { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { userContext } from "./Layout";

const Login = () => {
  const [username, setUsername] = useState("test");
  const [password, setPassword] = useState("password");
  const {user, setUser} = useContext(userContext); 
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === "test" && password === "password"){
        setUser({name: "user"})
        navigate("/users")
    }else{
        setUsername("");
        setPassword("");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;