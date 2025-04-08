import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const { login } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then((data) => setUser(data));

    fetch(`https://api.github.com/users/${login}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 3)));
  }, [login]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <img src={user.avatar_url} width="100" />
      <h2>{user.name || user.login}</h2>
      <p>Location: {user.location || "N/A"}</p>
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
            : {repo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
