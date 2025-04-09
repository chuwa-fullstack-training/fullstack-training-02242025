import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from './Layout';

const Users = () => {
  const navigate = useNavigate();
  const { profiles, setProfiles } = useContext(userContext);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    if (profiles.length === 0) {
      fetchData();
    }
  }, [profiles]);
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      
      const profilesData = data.map((user, index) => ({
        id: user.id,
        login: user.login,
        avatar_url: user.avatar_url,
        profileUrl: user.url,
        reposUrl: user.repos_url,
        index: index
      }));
      
      setProfiles(profilesData);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleProfileClick = (index) => {
    navigate(`/profile/${index}`);
  };
  
  if (loading) return <div>Loading users...</div>;
  
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {profiles.map((profile, index) => (
          <div 
            key={profile.id} 
            onClick={() => handleProfileClick(index)}
            style={{
              cursor: 'pointer',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              width: '200px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <img 
              src={profile.avatar_url} 
              style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '10px' }}
            />
            <h3>{profile.login}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;