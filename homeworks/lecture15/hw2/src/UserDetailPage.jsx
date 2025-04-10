import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './UserDetailPage.css'; // Import the CSS file

function UserDetailPage() {
  const { login } = useParams();
  const navigate = useNavigate();
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

  if (!user) return <p className="loading-text">Loading...</p>;

  return (
    <div className="user-detail-container">
      <div className="user-content">
        <h1 className="user-title">{user.login}</h1>
        <img 
          src={user.avatar_url} 
          alt={user.login} 
          className="user-avatar"
        />
        <p className="user-name">
          {user.name || 'No name available'}
        </p>
        
        <h2 className="repos-title">Repositories:</h2>
        <ul className="repos-list">
          {repos.map((repo) => (
            <li key={repo.id} className="repo-item">
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="repo-link"
              >
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => navigate('/users')}
          className="back-button"
        >
          Back to Users
        </button>
      </div>
    </div>
  );
}

export default UserDetailPage;