import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/users';

  const handleLogin = () => {
    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
