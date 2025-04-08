import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
}

interface UserProfile extends GitHubUser {
  name?: string;
  location?: string;
  repos_url: string;
}

interface Repository {
  name: string;
  html_url: string;
  description: string;
}

export default function GithubPage() {
  const navigate = useNavigate();
  const { login } = useParams();
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  const [userRepos, setUserRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  useEffect(() => {
    if (login) {
      fetchUserProfile(login);
    }
  }, [login]);

  const fetchUserProfile = async (username: string) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();
      setSelectedUser(userData);
      navigate(`/users/${username}`);

      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();
      setUserRepos(reposData.slice(0, 3));
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  return (
    <div className="app-container">
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                onClick={() => fetchUserProfile(user.login)}
                className={selectedUser?.id === user.id ? "selected" : ""}
              >
                <td>{user.id}</td>
                <td>{user.login}</td>
                <td>
                  <img
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                    className="avatar"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <div className="user-profile">
          <div className="profile-header">
            <img
              src={selectedUser.avatar_url}
              alt={`${selectedUser.login}'s avatar`}
              className="profile-avatar"
            />
            <div className="profile-info">
              <h2>{selectedUser.name || selectedUser.login}</h2>
              {selectedUser.location && (
                <p>Location: {selectedUser.location}</p>
              )}
            </div>
          </div>

          <div className="repositories">
            <h3>Repositories:</h3>
            {userRepos.map((repo) => (
              <div key={repo.name} className="repository">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
                {repo.description && <p>{repo.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
