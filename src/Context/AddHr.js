import React, { createContext, useState } from "react";
import App from "../App";

export const AddHrType = React.createContext();

export const AddHr = ({ children }) => {
  const [openHr, setOpenHr] = useState(false);
  const [HrType, setHrType] = useState("");
  return (
    <AddHrType.Provider value={{ openHr, setOpenHr, HrType, setHrType }}>
      {children}
    </AddHrType.Provider>
  );
};
