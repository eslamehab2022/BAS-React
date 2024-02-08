import React, { createContext, useState } from "react";
import App from "../App";

export const SideBarProvider = React.createContext();
const SidebarContext = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SideBarProvider.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SideBarProvider.Provider>
  );
};

export default SidebarContext;
