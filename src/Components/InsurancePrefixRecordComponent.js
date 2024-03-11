import axios from 'axios'
import React, { useEffect } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { useUser } from '../Contexts/UserContext'

const InsurancePrefixRecordComponent = (props) => {
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
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
      <td>{record.name}</td>
      <td>{record.prefix}</td>
      <td>{record.policy_id}</td>
      <td>{record.insurance}</td>
      <td>{record.network}</td>
      <td>{record.facility}</td>
      <td>{record.res_days}</td>
      <td>{record.detox}</td>
      <td>{record.average_charge}</td>
      <td>{record.average_paid}</td>
      <td>{record.payout}</td>
      <td>Likely</td>
      {
        userProfile.priviledges === 'admin' || userProfile.priviledges === 'dev' || userProfile.priviledges === 'owner'
          ? <td>78%</td>
          : null
      }
      <td>12/29/2023</td>
    </tr>
  )
}

export default InsurancePrefixRecordComponent
