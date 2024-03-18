import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, signIn, signOut, signUp } from 'aws-amplify/auth';
import axios from 'axios'

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
        console.log(response)
        setCurrentUser(response.userId)
        grabCurrentUserProfile(response.userId)
        // setLoading(false)
      })
      .catch(error => {
        console.log(`Error getting user: ${error}`)
        setLoading(false)
      })
  }

  const grabCurrentUserProfile = (userId) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://intellasurebackend-docker.onrender.com/api/users/${userId}`,
      headers: { }
    };
    axios.request(config)
      .then((response) => {
        console.log("users profile: ", JSON.stringify(response.data.data));
        setUserProfile(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
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
