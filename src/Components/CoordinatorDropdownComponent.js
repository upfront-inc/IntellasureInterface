import React, { useEffect, useState } from 'react';
import { useUser } from '../Contexts/UserContext';
import axios from 'axios';

const CoordinatorDropdownComponent = ({ item, getIntakeRecords }) => {
  const [privilegeOptions, setPrivilegeOPtions] = useState([])
  const [selectedPrivilege, setSelectedPrivilege] = useState('');

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
        setPrivilegeOPtions(response.data)
        response.data.map((selection) => {
          if(selection.userid === item.coordinator){
            setSelectedPrivilege(selection.userid)
          } 
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }


  const handlePrivilegeChange = (e) => {
    console.log(e.target.value)
    setSelectedPrivilege(e.target.value)
    updateUserProfile(e.target.value)
  };

  const updateUserProfile = (privilege) => {
    console.log(privilege)
    const data = { data: {
      "checked_in": item.checked_in,
      "booked": item.booked,
      "coordinator": privilege,
      "summary_out": item.summary_out
    }}
    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: `https://intellasurebackend-docker.onrender.com/intake/${item.intake_id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data,
    };
    
    axios.request(config)
      .then((response) => {
        // grabAllProfiles()
        getIntakeRecords()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <select value={selectedPrivilege} onChange={handlePrivilegeChange}>
        {privilegeOptions.map((privilege) => (
          <option key={privilege.userid} value={privilege.userid}>
            {privilege.name} - {privilege.userid}
          </option>
        ))}
      </select>
    </>
  );
};

export default CoordinatorDropdownComponent;