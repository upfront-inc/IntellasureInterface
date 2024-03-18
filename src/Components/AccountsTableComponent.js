import React, { useEffect, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import axios from 'axios'
import { useUser } from '../Contexts/UserContext'
import PrivilegeDropDownComponent from './PrivilegeDropDownComponent'
import DepartmentDropDownComponent from './DepartmentDropDownComponent'

const AccountsTableComponent = () => {

  const { theme } = useTheme()
  const { userProfile } = useUser()

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    grabAllProfiles()
  }, [])

  const grabAllProfiles = () => {
    setProfiles([])
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

  const updateUserProfile = (profile, active) => {
    const data = {
      "department": profile.department,
      "privileges": profile.privileges,
      "active": active
    }
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `https://intellasurebackend-docker.onrender.com/users/update/${profile.userid}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data,
    };
    axios.request(config)
      .then((response) => {
        grabAllProfiles()
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
              Department
            </th>
            <th className='table-header-text'>
              Comapny
            </th>
            <th className='table-header-text'>
              Status
            </th>
            <th className='table-header-text'>
              Activity
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
                      {
                        userProfile.privileges === 'admin' || userProfile.privileges === 'dev' || userProfile.privileges === 'owner'
                          ? <td><PrivilegeDropDownComponent profile={profile} grabAllProfiles={grabAllProfiles}/></td>
                          : <td>{profile.privileges}</td>
                      }
                      {
                        userProfile.privileges === 'admin' || userProfile.privileges === 'dev' || userProfile.privileges === 'owner'
                          ? <td><DepartmentDropDownComponent profile={profile} grabAllProfiles={grabAllProfiles}/></td>
                          : <td>{profile.department}</td>
                      }
                      {/* <td>{profile.department}</td> */}
                      <td>{(profile.company).toUpperCase()}</td>
                      <td>{profile.active ? 'Acitve' : 'Suspended'}</td>
                      {
                        userProfile.privileges === 'admin' || userProfile.privileges === 'dev' || userProfile.privileges === 'owner'
                          ? <td>
                              {
                                profile.active
                                  ? <span onClick={() => {updateUserProfile(profile, false)}} style={{color: 'blue'}}>Deactivate</span>
                                  : <span onClick={() => {updateUserProfile(profile, true)}} style={{color: 'blue'}}>Activate</span>
                              }
                            </td>
                          : <td></td>
                      }
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
