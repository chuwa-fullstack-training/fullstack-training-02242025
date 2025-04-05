import React, { useState, useEffect } from "react";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  // fetch users
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  // selected uers change fetch detail
  useEffect(() => {
    if (!selectedUser) {
      setUserDetails(null);
      setUserRepos([]);
      return;
    }

    fetch(`https://api.github.com/users/${selectedUser.login}`)
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });

    fetch(`https://api.github.com/users/${selectedUser.login}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        const sortedRepos = repos.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setUserRepos(sortedRepos);
      })
      .catch((error) => {
        console.error("Error fetching user repos:", error);
      });
  }, [selectedUser]);

  const containerStyle = {
    display: "flex",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  };

  const userListStyle = {
    width: "300px",
    borderRight: "1px solid #ddd",
    padding: "1rem",
    boxSizing: "border-box",
  };

  const userProfileStyle = {
    flex: 1,
    padding: "1rem",
    boxSizing: "border-box",
  };

  const userItemStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "10px",
  };

  const avatarStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={userListStyle}>
        <h2>GitHub Users</h2>
        {users.map((user) => (
          <div
            key={user.id}
            style={userItemStyle}
            onClick={() => setSelectedUser(user)}
          >
            <img src={user.avatar_url} alt={user.login} style={avatarStyle} />
            <span>{user.login}</span>
          </div>
        ))}
      </div>

      <div style={userProfileStyle}>
        {selectedUser && userDetails ? (
          <div>
            <h2>{userDetails.name || userDetails.login}</h2>
            <img
              src={userDetails.avatar_url}
              alt={userDetails.login}
              style={{ width: "100px", borderRadius: "50%" }}
            />
            <p>
              <strong>Username:</strong> {userDetails.login}
            </p>
            {userDetails.location && (
              <p>
                <strong>Location:</strong> {userDetails.location}
              </p>
            )}
            <p>
              <strong>Repositories:</strong>
            </p>
            <ul>
              {userRepos.slice(0, 5).map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Select a user to see their profile</p>
        )}
      </div>
    </div>
  );
}

export default ListUsers;
