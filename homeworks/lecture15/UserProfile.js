import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const { login } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        return fetch(data.repos_url);
      })
      .then((res) => res.json())
      .then((repos) => setRepos(repos.slice(0, 5)));
  }, [login]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="card">
      <img className="avatar" src={user.avatar_url} alt="avatar" width={100} />
      <h2>{user.name || user.login}</h2>
      <p>Location: {user.location || "N/A"}</p>
      <h4>Repositories:</h4>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
