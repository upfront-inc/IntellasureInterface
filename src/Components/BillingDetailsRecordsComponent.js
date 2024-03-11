import axios from 'axios'
import React, { useEffect } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { useUser } from '../Contexts/UserContext'

const BillingDetailsRecordsComponent = (props) => {
  const {record, setViewingTab} = props

  const { theme } = useTheme()
  const { userProfile } = useUser()

  useEffect(() => {
    // console.log(record)
    // grabAdmissionPercent()
  }, [])

  const grabAdmissionPercent = () => {
    let data = JSON.stringify({
      "charged": record.average_charged,
      "paid": record.average_paid,
      "balance": 200,
      "payout_ratio": record.payout_ratio,
      "dtx_days": record.avg_DTX_days,
      "rtc_days": record.avg_RTC_days,
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

  return (
    <tr onClick={() => {setViewingTab('prefix')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
      <td>{record.prefix}</td>
      <td>{record.insurance}</td>
      <td>{record.network === 'out-of-network' ? 'out-network' : record.network}</td>
      <td>{record.avg_DTX_days} Days</td>
      <td>{record.avg_RTC_days} Days</td>
      <td>{formatNumberAsCurrency(record.average_charged)}</td>
      <td>{formatNumberAsCurrency(record.average_paid)}</td>
      <td>{(record.payout_ratio * 100).toFixed(0)}%</td>
      <td>Likely</td>
      {
        userProfile.priviledges === 'admin' || userProfile.priviledges === 'dev' || userProfile.priviledges === 'owner'
          ? <td>78%</td>
          : null
      }
    </tr>
  )
}

export default BillingDetailsRecordsComponent
