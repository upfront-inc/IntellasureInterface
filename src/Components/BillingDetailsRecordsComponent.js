import axios from 'axios'
import React, { useEffect } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { useUser } from '../Contexts/UserContext'

const BillingDetailsRecordsComponent = (props) => {
  const {record, setViewingTab} = props

  const { theme } = useTheme()
  const { userProfile } = useUser()

  useEffect(() => {
    grabAdmissionPercent()
  }, [])

  const grabAdmissionPercent = () => {
    let data = JSON.stringify({
      "charged": 4500,
      "paid": 1000,
      "balance": 200,
      "payout_ratio": 0.2,
      "total_auth_days": 12,
      "facility": "BEACHSIDE RECOVERY CENTER, LLC",
      "network": "in-network"
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://intellasureai.onrender.com/predict',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
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
    <tr onClick={() => {setViewingTab('prefix')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
      <td>SVD</td>
      <td>AETNA</td>
      <td>In-Network</td>
      <td>AXIS</td>
      <td>12 Days</td>
      <td>18 Days</td>
      <td>$18,324</td>
      <td>$10,2232</td>
      {
        userProfile.priviledges === 'admin' || userProfile.priviledges === 'dev' || userProfile.priviledges === 'owner'
          ? <td>78%</td>
          : null
      }
      <td>Likely</td>
      <td>78%</td>
    </tr>
  )
}

export default BillingDetailsRecordsComponent
