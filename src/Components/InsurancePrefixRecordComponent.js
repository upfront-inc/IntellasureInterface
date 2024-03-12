import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { useUser } from '../Contexts/UserContext'

const InsurancePrefixRecordComponent = (props) => {
  const {record, setViewingTab, setSelectedPolicy} = props

  const { theme } = useTheme()
  const { userProfile } = useUser()

  const [admissionPercent, setAdmissionPercent] = useState(.66)

  useEffect(() => {
    console.log(record)
    grabAdmissionPercent()
  }, [])

  const grabAdmissionPercent = () => {
    let data = JSON.stringify({
      "charged": record.average_charge,
      "paid": record.average_paid,
      "balance": record.balance,
      "payout_ratio": record.payout,
      "DTX days": record.detox_days,
      "RTC days": record.res_days,
      "facility": record.facility,
      "network": record.network
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
      setAdmissionPercent(response.data['VOB_Score_(%)'])
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const selectInsurancePolicy = (policy) => {
    setSelectedPolicy(policy)
    setViewingTab('user')
  }

  const formatNumberAsCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  function convertDateToMMDDYYYY(dateString) {
    const date = new Date(dateString);
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0'); // UTC months from 1-12
    const dd = String(date.getUTCDate()).padStart(2, '0'); // UTC day of the month
    const yyyy = date.getUTCFullYear(); // UTC full year
  
    return `${mm}/${dd}/${yyyy}`;
  }

  const goToLevel1 = (policy_id) => {
    if (userProfile.priviledges === 'member' || userProfile.priviledges === 'manager') {
      return; // early return if the user doesn't have the correct privileges
    }
    selectInsurancePolicy(policy_id);
  }

  return (
    <tr onClick={() => {goToLevel1(record.policy_id)}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
      <td>{record.name}</td>
      <td>{record.prefix}</td>
      <td>{record.policy_id}</td>
      <td>{record.insurance}</td>
      <td>{record.network}</td>
      <td>{record.facility}</td>
      <td>{record.res_days} Days</td>
      <td>{record.detox_days} Days</td>
      {
        userProfile.priviledges === 'member' || userProfile.priviledges === 'manager' 
          ? null
          : <>
              <td>{formatNumberAsCurrency(record.average_charge)}</td>
              <td>{formatNumberAsCurrency(record.average_paid)}</td>
              <td>{(record.payout * 100).toFixed(0)}%</td>
            </>
      }
      <td>{admissionPercent >= 60 ? 'Likely' : 'Unlikely'}</td>
      {
        userProfile.priviledges === 'admin' || userProfile.priviledges === 'dev' || userProfile.priviledges === 'owner'
          ? <td>{admissionPercent.toFixed(0)}%</td>
          : null
      }
      <td>{convertDateToMMDDYYYY(record.last_updated)}</td>
    </tr>
  )
}

export default InsurancePrefixRecordComponent
