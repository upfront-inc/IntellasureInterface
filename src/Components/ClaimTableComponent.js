import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import '../Css/usertable.css'

const ClaimTableComponent = (props) => {
  const {results} = props

  const { theme } = useTheme()

  function convertDateToMMDDYYYY(dateString) {
    const date = new Date(dateString);
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0'); // UTC months from 1-12
    const dd = String(date.getUTCDate()).padStart(2, '0'); // UTC day of the month
    const yyyy = date.getUTCFullYear(); // UTC full year
  
    return `${mm}/${dd}/${yyyy}`;
  }

  const formatDollarAmount = (str) => {
    const num = parseFloat(str);
    return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  return (
    <div className='user-table-parent'>
      <table className='user-section'>
        <thead className={`user-table-header-${theme}`}>
          <tr>
            <th className='table-header-text'>
              Claim Id
            </th>
            <th className='table-header-text'>
              Charged Total
            </th>
            <th className='table-header-text'>
              Paid Total
            </th>
            <th className='table-header-text'>
              Balance Total
            </th>
            <th className='table-header-text'>
              Start Date
            </th>
            <th className='table-header-text'>
              End Date
            </th>
          </tr>
        </thead>
        <tbody className={`user-table-body-${theme}`}>
          {
            results.length >= 1
              ? <>
                  {
                    results.map((item) => {
                      return(
                        <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
                          <td>{item.claim_id}</td>
                          <td>{formatDollarAmount(item.charged_total)}</td>
                          <td>{formatDollarAmount(item.paid_total)}</td>
                          <td>{formatDollarAmount(item.balance_total)}</td>
                          <td>{convertDateToMMDDYYYY(item.start_date)}</td>
                          <td>{convertDateToMMDDYYYY(item.end_date)}</td>
                        </tr>
                      )
                    })
                  }
                </>
              : <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default ClaimTableComponent
