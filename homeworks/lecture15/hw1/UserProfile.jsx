import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { login } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setUser);

    fetch(`https://api.github.com/users/${login}/repos?per_page=3`)
      .then(res => res.json())
      .then(setRepos);
  }, [login]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name || user.login}</h2>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <p>{user.location}</p>
      <h3>Repositories:</h3>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
