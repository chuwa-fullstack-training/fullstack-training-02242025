import React, { useEffect } from "react";
import { useState } from "react";

function Tablerow({ user, onClick }) {
  return (
    <tr onClick={() => onClick(user)} style={{ cursor: "pointer" }}>
      <td>{user.id}</td>
      <td>{user.login}</td>
      <td>
        <img src={user.avatar_url} alt="avatar" width="32" height="32" />
      </td>
    </tr>
  );
}

function Profile({ user }) {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <img src={user.avatar_url} alt="avatar" width="40" height="40" />
        <div>
          <div>{user.id}</div>
          <div>{user.login}</div>
        </div>
      </div>
    </>
  );
}

export default function Hw1() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [curUser, setCurUser] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const userToDisplay = curUser || data[0];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <table style={{ borderCollapse: "separate", borderSpacing: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return <Tablerow user={user} onClick={setCurUser} />;
          })}
        </tbody>
      </table>
      <div
        style={{
          width: "250px",
          border: "2px solid black",
          height: "200px",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <Profile user={userToDisplay} />
      </div>
    </div>
  );
}
