import React from 'react'
import { useTheme } from '../Contexts/ThemeContext';
import { useSidebar } from '../Contexts/SidebarContext';


const SettingsScreen = () => {
  const { toggleTheme } = useTheme(); 
  const { toggleSidebar } = useSidebar();

  return (
    <div>
      <div>
        <p className='toggle-button ' onClick={toggleTheme}>Toggle Theme</p>
      </div>
      <div>
        <p className='toggle-button ' onClick={toggleSidebar}>Toggle Sidebar</p>
      </div>
    </div>
  )
}

export default SettingsScreen
