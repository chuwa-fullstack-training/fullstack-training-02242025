import React, { useState, useEffect } from "react";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  // Fetch user list
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // Fetch selected user details and repos
  useEffect(() => {
    if (!selectedUser) {
      setUserDetails(null);
      setUserRepos([]);
      return;
    }

    const fetchDetails = async () => {
      try {
        const [detailsRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${selectedUser.login}`),
          fetch(`https://api.github.com/users/${selectedUser.login}/repos`),
        ]);

        const details = await detailsRes.json();
        const repos = await reposRes.json();

        setUserDetails(details);
        setUserRepos(
          repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
        );
      } catch (err) {
        console.error("Error fetching user details or repos:", err);
      }
    };

    fetchDetails();
  }, [selectedUser]);

  const styles = {
    container: {
      display: "flex",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
    },
    userList: {
      width: "300px",
      borderRight: "1px solid #ddd",
      padding: "1rem",
      boxSizing: "border-box",
    },
    userProfile: {
      flex: 1,
      padding: "1rem",
      boxSizing: "border-box",
    },
    userItem: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      marginBottom: "10px",
    },
    avatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    profileAvatar: {
      width: "100px",
      borderRadius: "50%",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.userList}>
        <h2>GitHub Users</h2>
        {users.map((user) => (
          <div
            key={user.id}
            style={styles.userItem}
            onClick={() => setSelectedUser(user)}
          >
            <img src={user.avatar_url} alt={user.login} style={styles.avatar} />
            <span>{user.login}</span>
          </div>
        ))}
      </div>

      <div style={styles.userProfile}>
        {selectedUser && userDetails ? (
          <div>
            <h2>{userDetails.name || userDetails.login}</h2>
            <img
              src={userDetails.avatar_url}
              alt={userDetails.login}
              style={styles.profileAvatar}
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