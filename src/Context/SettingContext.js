import React, { createContext, useState } from "react";
import App from "../App";

const SettingContext = createContext();

export const SettingContextProvider = ({ children }) => {
  const [ReciptionType, setReceptionType] = useState(null);
  const [orderType, setOrderType] = useState(1);
  const [citizenServicesType, setCitizenServicesType] = useState(1);
  const [settingType, setSettingType] = useState("");

  return (
    <SettingContext.Provider
      value={{
        settingType,
        setSettingType,
        ReciptionType,
        setReceptionType,
        orderType,
        setOrderType,
        citizenServicesType,
        setCitizenServicesType
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export default SettingContext;
