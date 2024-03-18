import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import amplifyconfig from './amplifyconfiguration.json';

import { useApp } from './Contexts/AppContext';
import { useTheme } from './Contexts/ThemeContext';
import { useSidebar } from './Contexts/SidebarContext';
import { useUser } from './Contexts/UserContext';
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
import ChatWithAIComponent from './Components/ChatWithAIComponent';
import { Amplify } from 'aws-amplify';
import LoadingComponent from './Screens/LoadingScreen';
import LoginScreen from './Screens/Authentication/LoginScreen';
import AuthenticationScreen from './Screens/Authentication/AuthenticationScreen';
import AdduserComponent from './Components/AdduserComponent';
import UpdateIntakeRecord from './Components/UpdateIntakeRecord';

Amplify.configure(amplifyconfig)

const TIMEOUT = 25 * 60 * 1000; // Set timeout as 5 minutes


function App() {
  const { theme } = useTheme(); 
  const { sidebarPosition, showProfile } = useSidebar();
  const { selectedTab, showAddIntakeRecord, showAddUserRecord, showUpdateIntakeRecord } = useApp();
  const { grabCurrentUser, currentUser, loading, signOutUser } = useUser()

  const [isActive, setIsActive] = useState(true);
  const [timer, setTimer] = useState(TIMEOUT);

  useEffect(() => {
    // signOutUser()
    grabCurrentUser()
  }, [])
  
  const handleActivity = useCallback(() => {
    setIsActive(true);
    setTimer(TIMEOUT);
  }, []);

  useEffect(() => {
    if (isActive && timer === 0) {
      // Do something after inactivity, like logout the user
      console.log('User has been inactive for 25 minutes');
      setIsActive(false);
      signOutUser()
    }
  }, [isActive, timer]);

  useEffect(() => {
    // Events that will reset the timer
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('click', handleActivity);

    let interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1000 : 0));
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('click', handleActivity);
    };
  }, [handleActivity]);

  const displayLoading = () => {
    return(
      <div style={styles.loadingContainer}>
        <LoadingComponent />
      </div>
    )
  }

  return (
    <>
      {
        loading
          ? displayLoading()
          : !currentUser
              ? <AuthenticationScreen />
              : <div className={`App-${sidebarPosition} ${theme}`}>
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
                                                      : selectedTab === 'AI'
                                                        ? <ChatWithAIComponent/>
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
                </div>
      }
    </>
  );
}

const styles = {
  loadingContainer: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  }
}

export default App;
