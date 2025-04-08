import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserCard = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { login } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const userRes = await axios.get(
          `https://api.github.com/users/${login}`
        );
        const repoRes = await axios.get(
          `https://api.github.com/users/${login}/repos`
        );
        setUser(userRes.data);
        setRepos(repoRes.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [login]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-card">
      <img src={user.avatar_url} />
      <div>
        <p className="name">{user.name}</p>
        <p className="card-font">Location: {user.location}</p>
        <p className="card-font">Repositories:</p>
        <ul className="repo-list">
          {repos.slice(0, 3).map((repo) => (
            <li className="repo-item" key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
              <p className="card-font">{repo.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
