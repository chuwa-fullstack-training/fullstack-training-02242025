import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GitHubUserBrowser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const fetchUserDetails = (username) => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => setSelectedUser(res.data));

    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(res => setRepos(res.data.slice(0, 5))) // Fetch top 5 repos
      .catch(err => console.error(err));
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-100 p-4 overflow-auto">
        <h2 className="text-lg font-bold mb-4">GitHub Users</h2>
        {users.map(user => (
          <div key={user.id} className="flex items-center mb-3 cursor-pointer" onClick={() => fetchUserDetails(user.login)}>
            <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full mr-3" />
            <span className="text-blue-700 font-semibold">{user.login}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 p-6 overflow-auto">
        {selectedUser ? (
          <div>
            <div className="flex items-center mb-4">
              <img src={selectedUser.avatar_url} alt={selectedUser.login} className="w-20 h-20 rounded-full mr-4" />
              <div>
                <h2 className="text-2xl font-bold">{selectedUser.name || selectedUser.login}</h2>
                <p className="text-gray-600">@{selectedUser.login}</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Repositories</h3>
            <ul className="list-disc list-inside">
              {repos.map(repo => (
                <li key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Select a user to view their profile</p>
        )}
      </div>
    </div>
  );
};

export default GitHubUserBrowser;