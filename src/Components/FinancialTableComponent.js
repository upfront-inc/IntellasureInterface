import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

const FinancialTableComponent = (props) => {
  const {financialInfo} = props

  const { theme } = useTheme()

  const [sort, setSort] = useState('asc')
  const [sortColumn, setSortColumn] = useState('prefix')

  function convertDateToMMDDYYYY(dateString) {
    const date = new Date(dateString);
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0'); // UTC months from 1-12
    const dd = String(date.getUTCDate()).padStart(2, '0'); // UTC day of the month
    const yyyy = date.getUTCFullYear(); // UTC full year
  
    return `${mm}/${dd}/${yyyy}`;
  }

  return (
    <div style={{overflowX: 'scroll'}} className='user-table-parent'>
      <table className='user-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th style={{minWidth: '180px'}} className='user-table-header-text'>
              Claim #
            </th>
            <th style={{minWidth: '180px'}} className='user-table-header-text'>
              Charge Code
            </th>
            <th style={{minWidth: '180px'}} className='user-table-header-text'>
              Status
            </th>
            <th style={{minWidth: '180px'}} className='user-table-header-text'>
              Reason
            </th>
            <th style={{minWidth: '180px'}} className='user-table-header-text'>
              Charged
            </th>
            <th  style={{minWidth: '180px'}}className='user-table-header-text'>
              Paid
            </th>
            <th style={{minWidth: '180px'}} className='user-table-header-text'>
              Payout %
            </th>
            {/* <th style={{minWidth: '180px'}} className='user-table-header-text'>
              Notes
            </th> */}
            <th style={{minWidth: '180px'}} className='user-table-header-text'>
              Date
            </th>
          </tr>
        </thead>
        <tbody className={`user-table-body-${theme}`}>
          {
            financialInfo.length >= 1
              ? <>
                  {
                    financialInfo.map((item) => {
                      return(
                        <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
                          <td>{item.Claim_ID}</td>
                          <td>{item.Charge_code}</td>
                          <td>{item.State}</td>
                          <td>{item.Status}</td>
                          <td>${item.Charged}</td>
                          <td>${item.Paid}</td>
                          <td>{((item.Paid / item.Charged).toFixed(2) * 100).toFixed(0)}%</td>
                          {/* <td>{item.FU_Note}</td> */}
                          <td>{convertDateToMMDDYYYY(item.Date)}</td>
                        </tr>
                      )
                    })
                  }
                </>
              : <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px', width: '100%'}}>
                  <td>No Records</td>
                </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default FinancialTableComponent
