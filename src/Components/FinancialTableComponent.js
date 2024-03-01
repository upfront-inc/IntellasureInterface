import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

const FinancialTableComponent = (props) => {
  const {setViewingTab, viewingTab, tabDetails} = props

  const { theme } = useTheme()

  const [sort, setSort] = useState('asc')
  const [sortColumn, setSortColumn] = useState('prefix')

  const limitStringToLength = () => {
    
  }

  return (
    <div className='user-table-parent'>
      <table className='user-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th className='user-table-header-text'>
              Claim #
            </th>
            <th className='user-table-header-text'>
              Status
            </th>
            <th className='user-table-header-text'>
              Reason
            </th>
            <th className='user-table-header-text'>
              Charged
            </th>
            <th className='user-table-header-text'>
              Paid
            </th>
            <th className='user-table-header-text'>
              Payout %
            </th>
            <th className='user-table-header-text'>
              Date
            </th>
          </tr>
        </thead>
        <tbody className={`user-table-body-${theme}`}>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>HS1001</td>
            <td>Closed</td>
            <td>Paid</td>
            <td>$3,850</td>
            <td>$1,100</td>
            <td>32%</td>
            <td>12/21/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FinancialTableComponent
