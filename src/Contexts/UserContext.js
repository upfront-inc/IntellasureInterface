import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, signIn, signOut, signUp } from 'aws-amplify/auth';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [loading, setLoading] = useState(false)

  const grabCurrentUser = () => {
    setLoading(true)
    getCurrentUser()
      .then(response => {
        setCurrentUser(response)
        setLoading(false)
      })
      .catch(error => {
        console.log(`Error getting user: ${JSON.stringify(error)}`)
      })
  }

  const grabCurrentUserProfile = () => {
    
  }

  const signOutUser = () => {
    signOut()
      .then((response) => {
        setCurrentUser(null)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, grabCurrentUser, signOutUser, userProfile, loading }}>
      {children}
    </UserContext.Provider>
  );
};
