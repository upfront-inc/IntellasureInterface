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
      "balance": 200,
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

  return (
    <tr onClick={() => {selectInsurancePolicy(record.policy_id)}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
      <td>{record.name}</td>
      <td>{record.prefix}</td>
      <td>{record.policy_id}</td>
      <td>{record.insurance}</td>
      <td>{record.network}</td>
      <td>{record.facility}</td>
      <td>{record.res_days}</td>
      <td>{record.detox_days}</td>
      <td>{formatNumberAsCurrency(record.average_charge)}</td>
      <td>{formatNumberAsCurrency(record.average_paid)}</td>
      <td>{(record.payout * 100).toFixed(0)}%</td>
      <td>{admissionPercent >= 60 ? 'Likely' : 'Unlikely'}</td>
      {
        userProfile.priviledges === 'admin' || userProfile.priviledges === 'dev' || userProfile.priviledges === 'owner'
          ? <td>{admissionPercent.toFixed(0)}%</td>
          : null
      }
      <td>12/29/2023</td>
    </tr>
  )
}

export default InsurancePrefixRecordComponent
