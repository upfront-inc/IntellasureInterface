import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('billingDetails'); 

  const toggleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <AppContext.Provider value={{ selectedTab, toggleSelectedTab }}> {/* Corrected this line */}
      {children}
    </AppContext.Provider>
  );
};
