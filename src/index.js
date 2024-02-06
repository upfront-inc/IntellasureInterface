import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './Contexts/ThemeContext';
import { SidebarProvider } from './Contexts/SidebarContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider> 
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);