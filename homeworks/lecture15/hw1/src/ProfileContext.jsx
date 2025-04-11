// UserContext.js
import { createContext, useContext, useState } from "react";

// Create the context
export const ProfileContext = createContext(null);

// Create the provider component
export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  return (
    <ProfileContext.Provider value={{ profiles, setProfiles }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook for consuming context
export const useProfile = () => useContext(ProfileContext);
