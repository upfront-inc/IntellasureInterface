import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, signIn, signOut, signUp } from 'aws-amplify/auth';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  const grabCurrentUser = () => {
    getCurrentUser()
      .then(response => {
        setCurrentUser(response)
      })
      .catch(error => {
        console.log(`Error getting user: ${JSON.stringify(error)}`)
      })
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
    <UserContext.Provider value={{ currentUser, grabCurrentUser, signOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
