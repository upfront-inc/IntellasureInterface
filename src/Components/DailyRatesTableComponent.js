import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'

const DailyRatesTableComponent = () => {

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
              Level Of Care
            </th>
            <th className='table-header-text'>
              Admitted
            </th>
            <th className='table-header-text'>
              Daily Rate
            </th>
            <th className='table-header-text'>
              Last Updated
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {Array.from({ length: 19 }).map((_, index) => (
            <tr className={`table-content-row-${theme}`} key={index} style={{textAlign: 'center'}}>
              <td>SVD</td>
              <td>AETNA</td>
              <td>CD RTC</td>
              <td>$1,2232</td>
              <td>UNKNOWN</td>
              <td>12/13/2023</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DailyRatesTableComponent
