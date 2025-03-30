import {useNavigate, useParams} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import { userContext } from './layout';

const Profile = () => {
  const {index} = useParams();
  const {user, setUser, profiles, setProfiles} = useContext(userContext); 
  const [repos, setRepos] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
    const currProfile = profiles[parseInt(index)];

  useEffect(()=>{
    setLoading(true);
    console.log(profiles);
    console.log(currProfile);
    const fetchProfile = async () => {
      try {
        const profileResponse = await fetch(currProfile.profileUrl);
        const profileData = await profileResponse.json();
        const repoResponse = await fetch(currProfile.reposUrl);
        const reposData = await repoResponse.json();
        console.log(reposData);
        console.log(profileData);
        setName(profileData.name);
        setLocation(profileData.location);
        setRepos(
          reposData
            .map((repo) => {
              return {
                repoName: repo.full_name,
                description: repo.description,
                link: repo.html_url,
              };
            })
            .slice(0, 3)
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  },[currProfile]);

  return (
    <div className="detailPage">
        {loading || !name || !location || repos.length === 0 ? (
          <div
            style={{
              width: "400px",
              height: "220px",
              border: "solid 1px grey",
              display: "flex",
              padding: "20px",
              gap: "20px",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(90deg, #eee, #f5f5f5, #eee)",
                backgroundSize: "200% 100%",
                animation: "skeleton-loading 1.5s infinite linear",
              }}
            ></div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    width: i === 1 ? "100px" : i === 2 ? "150px" : "80%",
                    height: "12px",
                    borderRadius: "4px",
                    background: "linear-gradient(90deg, #eee, #f5f5f5, #eee)",
                    backgroundSize: "200% 100%",
                    animation: "skeleton-loading 1.5s infinite linear",
                  }}
                ></div>
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              width: "400px",
              height: "220px",
              border: "solid 1px grey",
              display: "flex",
              padding: "20px",
              gap: "20px",
            }}
          >
            <img src={currProfile.avatar} width="60px" height="60px"></img>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <div>{name}</div>
              <div>{location}</div>
              <div>Repositories:</div>
              <ul>
                {repos.map((repo) => (
                  <li>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        textAlign: "start",
                        gap: "10px",
                      }}
                    >
                      <div style={{ color: "blue" }}>{repo.repoName}</div>
                      <div>{repo.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
  )

}

export default Profile;