import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'

const BillingDetailsTablesComponent = () => {

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
              Insurance
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
              Total Paid
            </th>
            <th className='table-header-text'>
              Payout %
            </th>
            <th className='table-header-text'>
              Admission
            </th>
            <th className='table-header-text'>
              Admission %
            </th>
            <th className='table-header-text'>
              Details 
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days / 2 Visits</td>
            <td>18 Days / 1 Visit</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>Open/Close</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default BillingDetailsTablesComponent
