import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [shelterCtxData, setShelterCtxData] = useState();
  const [shelterCtxDataOps, setShelterCtxDataOps] = useState();
  const [safeTextData, setSafeTextData] = useState();

  const contextValue = { 
    shelterCtxData, 
    setShelterCtxData, 
    shelterCtxDataOps, 
    setShelterCtxDataOps,
    safeTextData,
    setSafeTextData
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
