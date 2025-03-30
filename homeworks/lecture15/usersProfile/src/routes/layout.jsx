import { Outlet } from "react-router-dom";
import {createContext, useState} from 'react';
export const userContext = createContext(null);


const Layout = () => {
    const [user, setUser] = useState(null);
    const [profiles, setProfiles] = useState([]);
 
  return (
    <userContext.Provider value={{user, setUser, profiles, setProfiles}}>
      <Outlet />
    </userContext.Provider>
  );
};

export default Layout;