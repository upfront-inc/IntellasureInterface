import React, { useState } from 'react';
import { useUser } from '../Contexts/UserContext';
import axios from 'axios';

const PrivilegeDropDownComponent = ({ profile, grabAllProfiles }) => {
  const privilegeOptions = ['staff', 'manager', 'admin', 'dev', 'owner'];

  const [selectedPrivilege, setSelectedPrivilege] = useState(profile.privileges);

  const handlePrivilegeChange = (e) => {
    setSelectedPrivilege(e.target.value);
    updateUserProfile(e.target.value)
    // You can perform any additional actions when the privilege changes here
  };

  const updateUserProfile = (privilege) => {
    const data = {
      "department": profile.department,
      "privileges": privilege,
      "active": true
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
    <select value={selectedPrivilege} onChange={handlePrivilegeChange}>
      {privilegeOptions.map((privilege) => (
        <option key={privilege} value={privilege}>
          {privilege}
        </option>
      ))}
    </select>
  );
};

export default PrivilegeDropDownComponent;