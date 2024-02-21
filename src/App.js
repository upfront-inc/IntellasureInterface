import React from 'react';
import './App.css';

import { useApp } from './Contexts/AppContext';
import { useTheme } from './Contexts/ThemeContext';
import { useSidebar } from './Contexts/SidebarContext';
import SideBarComponent from './Components/SideBarComponent';
import SettingsScreen from './Screens/SettingsScreen';
import BillingDetailsScreen from './Screens/BillingDetailsScreen';
import DailRateScreen from './Screens/DailRateScreen';
import FlaggedScreen from './Screens/FlaggedScreen';
import MissingScreen from './Screens/MissingScreen';
import IntakeScreen from './Screens/IntakeScreen';
import AccountsScreen from './Screens/AccountsScreen';
import BackendScreen from './Screens/BackendScreen';
import TicketsScreen from './Screens/TicketsScreen';
import HelpScreen from './Screens/HelpScreen';
import ProfileComponent from './Components/ProfileComponent';
import AddIntakeRecord from './Components/AddIntakeRecord';

function App() {
  const { theme } = useTheme(); 
  const { sidebarPosition, showProfile } = useSidebar();
  const { selectedTab, showAddIntakeRecord } = useApp();

  return (
    <div className={`App-${sidebarPosition} ${theme}`}>
      <SideBarComponent />
      {
        selectedTab === 'billingDetails'
          ? <BillingDetailsScreen/>
          : selectedTab === 'dailyRates'
              ? <DailRateScreen/>
              : selectedTab === 'flagged'
                  ? <FlaggedScreen/>
                  : selectedTab === 'missing'
                      ? <MissingScreen/>
                      : selectedTab === 'intake'
                          ? <IntakeScreen/>
                          : selectedTab === 'accounts'
                              ? <AccountsScreen/>
                              : selectedTab === 'backend'
                                  ? <BackendScreen/>
                                  : selectedTab === 'helpTickets'
                                      ? <TicketsScreen/>
                                      : selectedTab === 'help'
                                          ? <HelpScreen/>
                                          : null
      }
      {
        showProfile
          ? <div className={`popup-${sidebarPosition}`}><ProfileComponent/></div>
          : null
      }
      {
        showAddIntakeRecord
          ? <div className={`popup-${sidebarPosition}`}><AddIntakeRecord/></div>
          : null
      }
      {/* {
        showAddIntakeRecord
          ? <div className={`popup-${sidebarPosition}`}><AddIntakeRecord/></div>
          : null
      } */}
    </div>
  );
}

export default App;
