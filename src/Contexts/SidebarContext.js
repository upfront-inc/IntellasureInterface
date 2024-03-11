import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function useSidebar() {
  return useContext(SidebarContext);
}

export const SidebarProvider = ({ children }) => {
  const [sidebarPosition, setSidebarPosition] = useState('open'); 
  const [showProfile, setShowProfile] = useState(false)

  const toggleSidebar = () => {
    setSidebarPosition((prevPosition) => (prevPosition === 'open' ? 'closed' : 'open'));
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <SidebarContext.Provider value={{ sidebarPosition, toggleSidebar,
                                      showProfile, toggleProfile}}>
      {children}
    </SidebarContext.Provider>
  );
};
