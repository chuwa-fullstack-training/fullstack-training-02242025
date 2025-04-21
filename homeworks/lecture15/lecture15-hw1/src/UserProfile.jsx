import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const { login } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(data => setUser(data));

    fetch(`https://api.github.com/users/${login}/repos`)
      .then(res => res.json())
      .then(data => setRepos(data));
  }, [login]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="profile card">
        <h2>{user.login}</h2>
        <img className="avatar" src={user.avatar_url} alt="avatar" />
        <p><strong>Name:</strong> {user.name || "N/A"}</p>

        <h3> Repositories</h3>
        <ul>
          {repos.slice(0, 5).map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Back to Users Button */}
        <button
          onClick={() => navigate("/users")}
          style={{ marginTop: "20px", padding: "8px 16px" }}
        >
          ← Back to Users
        </button>
      </div>
    </div>
  );
}

