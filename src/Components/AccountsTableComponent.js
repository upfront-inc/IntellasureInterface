import React, { useEffect, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import axios from 'axios'

const AccountsTableComponent = () => {

  const { theme } = useTheme()

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    grabAllProfiles()
  }, [])

  const grabAllProfiles = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://intellasurebackend-docker.onrender.com/users/all',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    
    axios.request(config)
      .then((response) => {
        setProfiles(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th className='table-header-text'>
              Name
            </th>
            <th className='table-header-text'>
              Email
            </th>
            <th className='table-header-text'>
              privileges
            </th>
            <th className='table-header-text'>
              Comapny
            </th>
            <th className='table-header-text'>
              Account
            </th>
            <th className='table-header-text'>
              Remove
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {
            profiles.length > 0
              ? profiles.map(profile => {
                  return(
                    <tr className={`table-content-row-${theme}`} key={profile.user_id} style={{textAlign: 'center'}}>
                      <td>{profile.name}</td>
                      <td>{profile.email}</td>
                      {/* <td>{profile.status}</td> */}
                      <td>{profile.privileges}</td>
                      <td>{(profile.company).toUpperCase()}</td>
                      {
                        profile.privileges === 'admin'
                          ? <td>Remove Admin</td>
                          : <td>Make Admin</td>
                      }
                      <td>X</td>
                    </tr>
                  )
                })
              : null
          }
        </tbody>
      </table>
    </div>
  )
}

export default AccountsTableComponent
