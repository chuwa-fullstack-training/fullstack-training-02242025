import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { userContext } from './Layout';

const Profile = () => {
  const { index } = useParams();
  const { profiles } = useContext(userContext);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState(null);

  const profileIndex = parseInt(index);
  
  useEffect(() => {
    if (!profiles || profiles.length <= profileIndex) {
      setError("Profile not found");
      setLoading(false);
      return;
    }
    
    const currProfile = profiles[profileIndex];
    if (!currProfile) {
      setError("Profile not found");
      setLoading(false);
      return;
    }
    
    const fetchProfile = async () => {
      try {
        const profileResponse = await fetch(currProfile.profileUrl);
        if (!profileResponse.ok) throw new Error('Profile not found');
        const profileData = await profileResponse.json();
        setProfileData(profileData);

        const repoResponse = await fetch(currProfile.reposUrl);
        if (!repoResponse.ok) throw new Error('Repos not found');
        const reposData = await repoResponse.json();
        setRepos(reposData.slice(0, 3));
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, [index, profiles, profileIndex]);
  
  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profileData) return <div>Profile not found</div>;
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: "12px",
        boxShadow: "2px 5px 5px grey",
        padding: "30px",
        margin: "80px",
        maxHeight: "300px",
        width: "fit-content",
        maxWidth: "100%",
      }}
    >
      <div style={{ paddingTop: "30px" }}>
        <img
          src={profileData.avatar_url}
          style={{ height: "100px", borderRadius: "50%" }}
          alt={`${profileData.login}'s avatar`}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "12px",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h3 style={{ margin: "0 0 0 0", fontSize: "24px" }}>{profileData.login}</h3>
        {profileData.name && <p>{profileData.name}</p>}
        {profileData.location && <p>Location: {profileData.location}</p>}
        <p>Repositories: {repos.length}</p>
        <ul style={{ padding: "0px", lineHeight: "1" }}>
          {repos.map((repo) => (
            <li key={repo.id}>
              <strong style={{ color: "blue" }}>{repo.name}</strong>
              <p>{repo.description || "No description"}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;