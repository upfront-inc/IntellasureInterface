import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import dataArray from './converted_data'

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
              Level Of Care
            </th>
            <th className='table-header-text'>
              Total Units
            </th>
            <th className='table-header-text'>
              Allowed %
            </th>
            <th className='table-header-text'>
              Paid %
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
          {
            dataArray.map((entry, index) => {
              return(
                <tr className={`table-content-row-${theme}`} key={index} style={{textAlign: 'center'}}>
                  <td>{entry['BCBS Prefix']}</td>
                  <td>{entry['LOC']}</td>
                  <td>{entry['Total Units']} Units</td>
                  <td>{entry['Allowed %']}</td>
                  <td>{entry['Paid %']}</td>
                  <td>{entry['Avg Daily Rate']}</td>
                  <td>{entry['Last Paid']}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default DailyRatesTableComponent
