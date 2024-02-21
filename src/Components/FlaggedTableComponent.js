import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'

const FlaggedTableComponent = () => {

  const { theme } = useTheme()

  return (
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th className='table-header-text'>
              Prefix
            </th>
            <th className='table-header-text'>
              Policy
            </th>
            <th className='table-header-text'>
              Name
            </th>
            <th className='table-header-text'>
              Insurance
            </th>
            <th className='table-header-text'>
              Claim #
            </th>
            <th className='table-header-text'>
              Claim Status
            </th>
            <th className='table-header-text'>
              Reasoning
            </th>
            <th className='table-header-text'>
              Network
            </th>
            <th className='table-header-text'>
              Facility
            </th>
            <th className='table-header-text'>
              Residential
            </th>
            <th className='table-header-text'>
              Detox
            </th>
            <th className='table-header-text'>
              Total Charges
            </th>
            <th className='table-header-text'>
              Deductable
            </th>
            <th className='table-header-text'>
              Total Paid
            </th>
            <th className='table-header-text'>
              Payout %
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>SVD2134872y743</td>
            <td>John Doe</td>
            <td>AETNA</td>
            <td>HS10002</td>
            <td>Denied</td>
            <td>Medical records required</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$5,000</td>
            <td>$10,2232</td>
            <td>81%</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>SVD2134872y743</td>
            <td>John Doe</td>
            <td>AETNA</td>
            <td>HS10002</td>
            <td>Denied</td>
            <td>Medical records required</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$5,000</td>
            <td>$10,2232</td>
            <td>81%</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>SVD2134872y743</td>
            <td>John Doe</td>
            <td>AETNA</td>
            <td>HS10002</td>
            <td>Denied</td>
            <td>Medical records required</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$5,000</td>
            <td>$10,2232</td>
            <td>81%</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>SVD2134872y743</td>
            <td>John Doe</td>
            <td>AETNA</td>
            <td>HS10002</td>
            <td>Denied</td>
            <td>Medical records required</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$5,000</td>
            <td>$10,2232</td>
            <td>81%</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>SVD2134872y743</td>
            <td>John Doe</td>
            <td>AETNA</td>
            <td>HS10002</td>
            <td>Denied</td>
            <td>Medical records required</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$5,000</td>
            <td>$10,2232</td>
            <td>81%</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>SVD2134872y743</td>
            <td>John Doe</td>
            <td>AETNA</td>
            <td>HS10002</td>
            <td>Denied</td>
            <td>Medical records required</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$5,000</td>
            <td>$10,2232</td>
            <td>81%</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>SVD2134872y743</td>
            <td>John Doe</td>
            <td>AETNA</td>
            <td>HS10002</td>
            <td>Denied</td>
            <td>Medical records required</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$5,000</td>
            <td>$10,2232</td>
            <td>81%</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>SVD2134872y743</td>
            <td>John Doe</td>
            <td>AETNA</td>
            <td>HS10002</td>
            <td>Denied</td>
            <td>Medical records required</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$5,000</td>
            <td>$10,2232</td>
            <td>81%</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>SVD2134872y743</td>
            <td>John Doe</td>
            <td>AETNA</td>
            <td>HS10002</td>
            <td>Denied</td>
            <td>Medical records required</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$5,000</td>
            <td>$10,2232</td>
            <td>81%</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>SVD2134872y743</td>
            <td>John Doe</td>
            <td>AETNA</td>
            <td>HS10002</td>
            <td>Denied</td>
            <td>Medical records required</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$5,000</td>
            <td>$10,2232</td>
            <td>81%</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>SVD2134872y743</td>
            <td>John Doe</td>
            <td>AETNA</td>
            <td>HS10002</td>
            <td>Denied</td>
            <td>Medical records required</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$5,000</td>
            <td>$10,2232</td>
            <td>81%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FlaggedTableComponent
