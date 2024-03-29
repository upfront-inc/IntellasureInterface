import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('intake'); 
  const [tableFilter, setTableFilter] = useState(false)

  const [filterFacility, setFilterFacility] = useState(false)
  const [filterColumns, setFilterColumns] = useState(false)
  const [filterNetwork, setFilterNetwork] = useState(false)

  const [showAddIntakeRecord, setShowAddIntakeRecord] = useState(false)
  const [showAddUserRecord, setShowAddUserRecord] = useState(false)
  const [showUpdateIntakeRecord, setShowUpdateIntakeRecord] = useState(false)
  const [updatingRecord, setUpdatingRecord] = useState(null)

  const [currentUser, setCurrentUser] = useState(true)

  const toggleShowAddIntakeRecord = () => {
    setShowAddIntakeRecord(!showAddIntakeRecord)
  };

  const toggleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  const toggleTableFilter = () => {
    setTableFilter(!tableFilter);
  };

  const toggleFilterFacility = () => {
    setFilterFacility(!filterFacility);
    setFilterColumns(false);
    setFilterNetwork(false)
  };

  const toggleFilterColumns = () => {
    setFilterColumns(!filterColumns);
    setFilterFacility(false);
    setFilterNetwork(false)
  };

  const toggleNetworkColumns = () => {
    setFilterNetwork(!filterNetwork)
    setFilterColumns(false);
    setFilterFacility(false);
  };

  const toggleShowUserCreate = () => {
    setShowAddUserRecord(!showAddUserRecord)
  };

  const toggleUpdateIntakeRecord = () => {
    setShowUpdateIntakeRecord(!showUpdateIntakeRecord)
  };

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser,
                                  selectedTab, toggleSelectedTab,
                                  tableFilter,toggleTableFilter,
                                  filterFacility, toggleFilterFacility,
                                  filterColumns, toggleFilterColumns,
                                  showAddIntakeRecord, toggleShowAddIntakeRecord,
                                  filterNetwork, toggleNetworkColumns,
                                  showAddUserRecord, toggleShowUserCreate,
                                  showUpdateIntakeRecord, toggleUpdateIntakeRecord,
                                  updatingRecord, setUpdatingRecord }}> {/* Corrected this line */}
      {children}
    </AppContext.Provider>
  );
};
