import React, { createContext, useContext, useState } from 'react';
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
        console.log(`Logged in user: ${JSON.stringify(response.data)}`)
        setCurrentUser(response.data)
      })
      .catch(error => {
        console.log(`Error getting user: ${JSON.stringify(error)}`)
      })
  }

  return (
    <UserContext.Provider value={{ currentUser, grabCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
