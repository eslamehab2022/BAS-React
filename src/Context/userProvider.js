import React, { createContext, useState } from "react";
import App from "../App";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const UserProvider = React.createContext();
const UserContext = ({ children }) => {
  const user = Cookies.get("accessToken") ? Cookies.get("accessToken") : null;
  const Navigate = useNavigate();
  const logOut = () => {
    Cookies.remove("accessToken");
    Navigate("/");
  };
  return (
    <UserProvider.Provider value={{ user, logOut }}>
      {children}
    </UserProvider.Provider>
  );
};

export default UserContext;
