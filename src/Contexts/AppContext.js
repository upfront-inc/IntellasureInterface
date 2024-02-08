import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('billingDetails'); 
  const [tableFilter, setTableFilter] = useState(false)

  const toggleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  const toggleTableFilter = () => {
    setTableFilter(!tableFilter);
  };

  return (
    <AppContext.Provider value={{ selectedTab, toggleSelectedTab,
                                  tableFilter,toggleTableFilter }}> {/* Corrected this line */}
      {children}
    </AppContext.Provider>
  );
};
