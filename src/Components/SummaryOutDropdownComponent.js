import React, { useState } from 'react';
import { useUser } from '../Contexts/UserContext';
import axios from 'axios';

const SummaryOutDropdownComponent = ({ item, getIntakeRecords }) => {
  const privilegeOptions = ['Pending', 'Good VOB', 'Bad VOB'];

  const [selectedPrivilege, setSelectedPrivilege] = useState(item.summary_out);

  const handlePrivilegeChange = (e) => {
    setSelectedPrivilege(e.target.value);
    updateUserProfile(e.target.value)
    // You can perform any additional actions when the privilege changes here
  };

  const updateUserProfile = (privilege) => {
    const data = { data: {
      "checked_in": item.checked_in,
      "booked": item.booked,
      "coordinator": item.coordinator,
      "summary_out": privilege
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
    <select value={selectedPrivilege} onChange={handlePrivilegeChange}>
      {privilegeOptions.map((privilege) => (
        <option key={privilege} value={privilege}>
          {privilege}
        </option>
      ))}
    </select>
  );
};

export default SummaryOutDropdownComponent;