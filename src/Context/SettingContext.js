import React, { createContext, useState } from "react";
import App from "../App";

const SettingContext = createContext();

export const SettingContextProvider = ({ children }) => {
  const [ReciptionType, setReceptionType] = useState(null);
  const [settingType, setSettingType] = useState("");

  return (
    <SettingContext.Provider
      value={{ settingType, setSettingType, ReciptionType, setReceptionType }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export default SettingContext;
