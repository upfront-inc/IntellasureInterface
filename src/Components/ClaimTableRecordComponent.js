import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import axios from 'axios'

const ClaimTableRecordComponent = (props) => {
  const {item} = props

  const { theme } = useTheme()

  const [checked, setChecked] = useState(item.favorites);

  function convertDateToMMDDYYYY(dateString) {
    const date = new Date(dateString);
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0'); // UTC months from 1-12
    const dd = String(date.getUTCDate()).padStart(2, '0'); // UTC day of the month
    const yyyy = date.getUTCFullYear(); // UTC full year
  
    return `${mm}/${dd}/${yyyy}`;
  }

  const formatDollarAmount = (str) => {
    const num = parseFloat(str);
    return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  const handleCheckboxChange = () => {
    console.log(!checked)
    setChecked(!checked);
    !checked
      ? addToFavorites()
      : removeFromFavorites()
  };

  const removeFromFavorites = () => {
    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: `https://intellasurebackend-docker.onrender.com/claims/remove_favorite/${item.claim_id}`,
      headers: { }
    };
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const addToFavorites = () => {
    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: `https://intellasurebackend-docker.onrender.com/claims/add_favorite/${item.claim_id}`,
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
      <td>{item.claim_id}</td>
      <td>{item.name}</td>
      <td>{item.facility}</td>
      <td>{item.status}</td>
      <td>{formatDollarAmount(item.charged_total)}</td>
      <td>{formatDollarAmount(item.paid_total)}</td>
      <td>{formatDollarAmount(item.balance_total)}</td>
      <td>{convertDateToMMDDYYYY(item.start_date)}</td>
      <td>{convertDateToMMDDYYYY(item.end_date)}</td>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </td>
    </tr>
  )
}

export default ClaimTableRecordComponent
