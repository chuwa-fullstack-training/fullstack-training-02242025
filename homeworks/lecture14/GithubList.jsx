import React, { useState, useEffect } from "react";

function TableRow({ user, onClick }) {
  return (
    <tr onClick={() => onClick(user.login)} style={{ cursor: "pointer" }}>
      <td>{user.id}</td>
      <td>{user.login}</td>
      <td>
        <img src={user.avatar_url} alt="avatar" width="32" height="32" />
      </td>
    </tr>
  );
}

function Profile({ user }) {
  if (!user) return null;

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <img src={user.avatar_url} alt="avatar" width="60" height="60" />
        <div>
          <div><strong>Username:</strong> {user.login}</div>
          <div><strong>Name:</strong> {user.name || "N/A"}</div>
        </div>
      </div>
      <h4 style={{ marginTop: "10px" }}>Repositories:</h4>
      <ul>
        {user.repos && user.repos.length > 0 ? (
          user.repos.slice(0, 5).map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </li>
          ))
        ) : (
          <li>No repositories found.</li>
        )}
      </ul>
    </div>
  );
}

export default function GithubList() {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const [currentUserData, setCurrentUserData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserList(data);
        if (data.length > 0) {
          fetchUserDetails(data[0].login); // 默认展示第一个用户
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  
  const fetchUserDetails = async (username) => {
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const user = await userRes.json();

      const repoRes = await fetch(user.repos_url);
      const repos = await repoRes.json();

      setCurrentUserData({
        ...user,
        repos,
      });
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  if (loading) return <div>Loading GitHub users...</div>;

  return (
    <div style={{ display: "flex", gap: "30px", padding: "20px" }}>
      <table style={{ borderCollapse: "separate", borderSpacing: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <TableRow key={user.id} user={user} onClick={fetchUserDetails} />
          ))}
        </tbody>
      </table>

      <div
        style={{
          width: "300px",
          border: "2px solid black",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <Profile user={currentUserData} />
      </div>
    </div>
  );
}
