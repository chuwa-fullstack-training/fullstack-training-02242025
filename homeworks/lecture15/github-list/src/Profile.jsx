import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

function Profile() {
  const { login } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${login}`).then((res) => res.json()),
      fetch(`https://api.github.com/users/${login}/repos`).then((res) => res.json())
    ])
      .then(([userData, repoData]) => {
        setUser(userData);
        setRepos(repoData);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Error loading profile", e);
        setLoading(false);
      });
  }, [login]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user data</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>{user.name || user.login}</h1>
      <p>Location: {user.location || "Unknown"}</p>
      <img src={user.avatar_url} alt={user.login} height={150} />
      <h3>Repositories:</h3>
      <ul>
        {repos.slice(0, 3).map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
