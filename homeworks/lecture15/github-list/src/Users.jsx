import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import "./App.css"; // Add styling here
import { useNavigate } from "react-router-dom";

function Users() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const navigate = useNavigate();
    if(username===''||password==='') navigate('/login');
    
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((e) => {
            console.error("Error getting data:", e);
            setLoading(false);
        });
    }, []);

    return (
        <div className="app-container">
        <div className="user-list">
            <h1>GitHub Users</h1>
            {loading ? (
            <p>Loading...</p>
            ) : (
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
                    <tr key={user.id} 
                    onClick={() => navigate(`/users/${user.login}`)} 
                    style={{ cursor: "pointer" }}>
                    <td>{user.id}</td>
                    <td>{user.login}</td>
                    <td>
                        <img
                        src={user.avatar_url}
                        alt={user.login}
                        height="60"
                        style={{ borderRadius: "8px" }}
                        />
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
        </div>
    );
}

export default Users;
