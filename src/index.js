import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './Contexts/ThemeContext';
import { SidebarProvider } from './Contexts/SidebarContext';
import { AppProvider } from './Contexts/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider> 
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);