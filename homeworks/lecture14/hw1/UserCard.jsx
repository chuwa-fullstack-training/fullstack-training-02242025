import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCard = (props) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const userRes = await axios.get(props.url);
        const repoRes = await axios.get(props.reposUrl);
        setUser(userRes.data);
        setRepos(repoRes.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [props.url]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-card">
      <img src={user.avatar_url} style={{ width: "100px", height: "100px" }} />
      <div>
        <p className="name">{user.name}</p>
        <p className="card-font">Location: {user.location}</p>
        <p className="card-font">Repositories:</p>
        {repos.slice(0, 3).map((repo) => (
          <ul className="repo-list">
            <li key={repo.id} className="repo-item">
              <a href="repo.html_url">{repo.name}</a>
              <p className="card-font">{repo.description}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
