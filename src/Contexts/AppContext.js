import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('billingDetails'); 
  const [tableFilter, setTableFilter] = useState(false)

  const [filterFacility, setFilterFacility] = useState(false)
  const [filterColumns, setFilterColumns] = useState(false)

  const toggleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  const toggleTableFilter = () => {
    setTableFilter(!tableFilter);
  };

  const toggleFilterFacility = () => {
    setFilterFacility(!filterFacility);
  };

  const toggleFilterColumns = () => {
    setFilterColumns(!filterColumns);
  };

  return (
    <AppContext.Provider value={{ selectedTab, toggleSelectedTab,
                                  tableFilter,toggleTableFilter,
                                  filterFacility, toggleFilterFacility,
                                  filterColumns, toggleFilterColumns }}> {/* Corrected this line */}
      {children}
    </AppContext.Provider>
  );
};
