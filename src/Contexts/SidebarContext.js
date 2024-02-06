import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function useSidebar() {
  return useContext(SidebarContext);
}

export const SidebarProvider = ({ children }) => {
  const [sidebarPosition, setSidebarPosition] = useState('open'); 

  const toggleSidebar = () => {
    setSidebarPosition((prevPosition) => (prevPosition === 'open' ? 'closed' : 'open'));
  };

  return (
    <SidebarContext.Provider value={{ sidebarPosition, toggleSidebar }}> {/* Corrected this line */}
      {children}
    </SidebarContext.Provider>
  );
};
