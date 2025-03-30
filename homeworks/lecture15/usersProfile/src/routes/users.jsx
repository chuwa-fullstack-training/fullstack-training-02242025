import { useState, useEffect, useContext} from "react";
import {useNavigate} from 'react-router-dom';
import { userContext } from "./layout";

const Users = () => {
    const {user, setUser, profiles, setProfiles} = useContext(userContext); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://api.github.com/users");
          const data = await response.json();
          //login: username
          //id: id
          //avatar_url
          //repos_url: fetch repos
          //url: profileurl, to fetch profile
          // console.log(data);
          const profiles = [];
          for (let profile of data) {
            profiles.push({
              id: profile.id,
              username: profile.login,
              avatar: profile.avatar_url,
              profileUrl: profile.url,
              reposUrl: profile.repos_url,
            });
          }
          // console.log(profiles);
          setProfiles(profiles);
          setCurrProfile(profiles[0]);
        };
        fetchData();
      }, []);

      if(!user){
        navigate("/login");
      }

      return (
        <div style={{ display: "flex", gap: "80px" }}>
          <div className="profilelist">
            <table>
              <thead>
                <th>id</th>
                <th>Username</th>
                <th>Avatar</th>
              </thead>
              <tbody>
                {profiles &&
                  profiles.map((profile, index) => (
                    <tr>
                      <td>{profile.id}</td>
                      <td
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`/profile/${index}`)}
                      >
                        {profile.username}
                      </td>
                      <td>
                        <img src={profile.avatar} width="40px"></img>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default Users;