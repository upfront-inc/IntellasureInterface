import React, { useState } from 'react';
import { useUser } from '../Contexts/UserContext';
import axios from 'axios';

const BookedDropdownComponent = ({ item, getIntakeRecords }) => {
  const privilegeOptions = ['Arrived', 'MIA', 'Pending'];

  const [selectedPrivilege, setSelectedPrivilege] = useState(item.booked);

  const handlePrivilegeChange = (e) => {
    setSelectedPrivilege(e.target.value)
    updateUserProfile(e.target.value)
    // You can perform any additional actions when the privilege changes here
  };

  const updateUserProfile = (privilege) => {
    console.log(privilege)
    const data = { data: {
      "checked_in": item.checked_in,
      "booked": privilege,
      "coordinator": item.coordinator,
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
    <select value={selectedPrivilege} onChange={handlePrivilegeChange}>
      {privilegeOptions.map((privilege) => (
        <option key={privilege} value={privilege}>
          {privilege}
        </option>
      ))}
    </select>
  );
};

export default BookedDropdownComponent;