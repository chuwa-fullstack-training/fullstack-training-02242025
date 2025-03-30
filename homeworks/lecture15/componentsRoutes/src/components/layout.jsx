import { Outlet } from "react-router-dom";
import {createContext, useState} from 'react';

export const componentContext = createContext(null);


import Header from "./header";
const Layout = () => {
    const [components, setComponents] = useState(
    Array.from({ length: 6 }, (_, index) => {
        return { id: index, value: index + 1, color: "white" };
    })
    );

  const colors = ["grey", "blue", "lightgrey", "orange", "yellow"];
 
  return (
    <componentContext.Provider value={{components, setComponents}}>
      <Header components={components}
            setComponents={setComponents}
            colors={colors}
      />
      <Outlet />
    </componentContext.Provider>
  );
};

export default Layout;
