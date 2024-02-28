import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './Contexts/ThemeContext';
import { SidebarProvider } from './Contexts/SidebarContext';
import { AppProvider } from './Contexts/AppContext';
import { FilterProvider } from './Contexts/FilterContext';
import { UserProvider } from './Contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AppProvider>
        <FilterProvider>
          <ThemeProvider> 
            <SidebarProvider>
              <App />
            </SidebarProvider>
          </ThemeProvider>
        </FilterProvider>
      </AppProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);