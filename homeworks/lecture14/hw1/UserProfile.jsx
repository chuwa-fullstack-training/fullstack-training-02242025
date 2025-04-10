import React, { useEffect, useState } from 'react';

const UserProfile = ({ user }) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!user) return;

    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(setProfile);

    fetch(`https://api.github.com/users/${user}/repos?per_page=3`)
      .then(res => res.json())
      .then(setRepos);
  }, [user]);

  if (!user || !profile) return <div className="profile">Select a user</div>;

  return (
    <div className="profile">
      <img src={profile.avatar_url} alt={profile.login} className="avatar" />
      <h3>{profile.name || profile.login}</h3>
      <p>Location: {profile.location || 'N/A'}</p>
      <h4>Repositories:</h4>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a><br />
            <small>{repo.description}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
