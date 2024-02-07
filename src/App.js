import React from 'react';
import './App.css';
import { useTheme } from './Contexts/ThemeContext'; 
import { useSidebar } from './Contexts/SidebarContext';
import SideBarComponent from './Components/SideBarComponent';

function App() {
  const { theme, toggleTheme } = useTheme(); 
  const { sidebarPosition, toggleSidebar } = useSidebar();

  return (
    <div className={`App-${sidebarPosition} ${theme}`}>
      <SideBarComponent />
      <div>
        <p className='toggle-button ' onClick={toggleTheme}>Toggle Theme</p>
      </div>
      <div>
        <p className='toggle-button ' onClick={toggleSidebar}>Toggle Sidebar</p>
      </div>
    </div>
  );
}

export default App;
