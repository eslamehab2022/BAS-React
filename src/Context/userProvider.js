import React, { createContext, useState } from "react";
import App from "../App";
import Cookies from "js-cookie";

export const UserProvider = React.createContext();
const UserContext = ({ children }) => {
  const user = Cookies.get("accessToken") ? Cookies.get("accessToken") : null;

  return (
    <UserProvider.Provider value={{ user }}>{children}</UserProvider.Provider>
  );
};

export default UserContext;
