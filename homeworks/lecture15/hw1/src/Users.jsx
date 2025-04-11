import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import { useProfile } from "./ProfileContext";

function Tablerow({ user, onClick }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td onClick={onClick} style={{ cursor: "pointer" }}>
        {user.login}
      </td>
      <td>
        <img src={user.avatar_url} alt="avatar" width="32" height="32" />
      </td>
    </tr>
  );
}

export default function Users({ user }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const history = useHistory();
  const { setProfiles } = useProfile();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        const transformedProfiles = data.map((user) => ({
          id: user.id,
          username: user.login,
          avatar: user.avatar_url,
        }));
        setProfiles(transformedProfiles);
        setData(data);
        setLoading(false);
      })
      .then(() => setProfiles(profiles))
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   console.log(user);
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);

  //useeffect must located before this loading
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleRowClick = (user) => {
    // navigate(`/users/${user.id}`, { state: { user } });
    navigate(`/users/${user.id}`);
  };

  console.log(user);
  if (!user) {
    history.push("/login");
  }
  // React cannot perform side
  // effects like navigation directly during rendering.
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
            return (
              <Tablerow
                user={user}
                key={user.id}
                onClick={() => handleRowClick(user)}
              /> //onclick不在这上运作 只是传递
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
