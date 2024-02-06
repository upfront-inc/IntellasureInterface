import React from 'react';
import './App.css';
import { useTheme } from './Contexts/ThemeContext'; 

function App() {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <div className={`App ${theme}`}>
      <p>Intellasure</p>
      <div className='toggle-button' onClick={toggleTheme}><p>Toggle Theme</p></div>
    </div>
  );
}

export default App;
