import React, { createContext, useState } from "react";

import App from "../App";

export const showAddUpdateUser = React.createContext();
const CheckAddUpdateUserVisability = ({ children }) => {
  const [showAddUserModel, setShowAddUserModel] = useState(false);
  const [showUpdateUserModel, setShowUpdateUserModel] = useState(false);

  return (
    <showAddUpdateUser.Provider
      value={{
        showAddUserModel,
        setShowAddUserModel,
        showUpdateUserModel,
        setShowUpdateUserModel,
      }}
    >
      {children}
    </showAddUpdateUser.Provider>
  );
};

export default CheckAddUpdateUserVisability;
