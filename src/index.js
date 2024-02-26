import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './Contexts/ThemeContext';
import { SidebarProvider } from './Contexts/SidebarContext';
import { AppProvider } from './Contexts/AppContext';
import { FilterProvider } from './Contexts/FilterContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <FilterProvider>
        <ThemeProvider> 
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </ThemeProvider>
      </FilterProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);