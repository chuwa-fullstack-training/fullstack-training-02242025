import React, { useState } from 'react';
import { useAuth } from './auth';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/users';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate(from, { replace: true });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl mb-4 font-bold">Login</h2>
      <input className="block w-full mb-4 p-2 border" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input className="block w-full mb-4 p-2 border" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Login</button>
    </form>
  );
};

export default Login;
