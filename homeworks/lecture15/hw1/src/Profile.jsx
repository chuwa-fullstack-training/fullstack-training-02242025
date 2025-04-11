//import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useProfile } from "./ProfileContext";

export default function Profile() {
  const { userId } = useParams();
  const { profiles } = useProfile();
  const location = useLocation();
  const user = profiles.find((profile) => profile.id.toString() === userId);
  // const { user } = location.state || {};
  //   const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/${userId}`)
  //       .then((res) => res.json())
  //       .then((data) => setUser(data))
  //       .catch((err) => console.error(err));
  //   }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <img src={user.avatar} alt="avatar" width="40" height="40" />
        <div>
          <div>{user.id}</div>
          <div>{user.username}</div>
        </div>
      </div>
    </>
  );
}
