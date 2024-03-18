import React, { useEffect, useState } from 'react';
import { useUser } from '../Contexts/UserContext';
import axios from 'axios';

const DepartmentDropDownComponent = ({ grabAllProfiles, profile }) => {
  const privilegeOptions = ['intake', 'administration', 'dev'];

  useEffect(() => {
    console.log(profile.department)
  }, [])

  const [selectedDepartment, setSelectedDeparment] = useState(profile.department);

  const handleDepartmentChange = (e) => {
    setSelectedDeparment(e.target.value);
    updateUserProfile(e.target.value)
    // You can perform any additional actions when the privilege changes here
  };

  const updateUserProfile = (department) => {
    const data = {
      "department": department,
      "privileges": profile.privileges,
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
        console.log('updated: ', response.data)
        grabAllProfiles()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <select value={selectedDepartment} onChange={handleDepartmentChange}>
      {privilegeOptions.map((department) => (
        <option key={department} value={department}>
          {department}
        </option>
      ))}
    </select>
  );
};

export default DepartmentDropDownComponent;