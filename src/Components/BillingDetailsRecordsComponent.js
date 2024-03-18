import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { useUser } from '../Contexts/UserContext'

const BillingDetailsRecordsComponent = (props) => {
  const {record, setSelectedPrefix, setSelectedNetwork, setViewingTab} = props

  const { theme } = useTheme()
  const { userProfile } = useUser()

  const [admissionPercent, setAdmissionPercent] = useState(0)

  useEffect(() => {
    console.log(record)
    grabAdmissionPercent()
  }, [])

  const grabAdmissionPercent = () => {
    let data = JSON.stringify({
      "charged": record.average_charged,
      "paid": record.average_paid,
      "balance": record.balance.toFixed(2),
      "payout_ratio": record.payout_ratio,
      "DTX days": record.avg_DTX_days,
      "RTC days": record.avg_RTC_days,
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

  const formatNumberAsCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  const viewPrefixRecords = (prefix, network) => {
    console.log(network)
    setSelectedNetwork(network)
    setSelectedPrefix(prefix)
    setViewingTab('prefix')
  }

  return (
    <tr onClick={() => {viewPrefixRecords(record.prefix, record.network)}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
      <td>{record.prefix}</td>
      <td>{record.insurance}</td>
      <td>{record.network === 'out-of-network' ? 'out-network' : record.network}</td>
      <td>{record.avg_DTX_days} Days</td>
      <td>{record.avg_RTC_days} Days</td>
      {
        userProfile.privileges === 'staff'
          ? null
          : <>
              <td>{formatNumberAsCurrency(record.average_charged)}</td>
              <td>{formatNumberAsCurrency(record.average_paid)}</td>
              <td>{(record.payout_ratio * 100).toFixed(0)}%</td>
            </>
      }
      <td>{admissionPercent >= 60 ? 'Likely' : 'Unlikely'}</td>
      {
        userProfile.privileges === 'admin' || userProfile.privileges === 'dev' || userProfile.privileges === 'owner'
          ? <td>{admissionPercent.toFixed(0)}%</td>
          : null
      }
    </tr>
  )
}

export default BillingDetailsRecordsComponent
