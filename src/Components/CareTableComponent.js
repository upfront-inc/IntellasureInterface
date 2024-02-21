import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import '../Css/usertable.css'

const CareTableComponent = (props) => {
  const {setViewingTab, viewingTab, tabDetails} = props

  const { theme } = useTheme()

  const [sort, setSort] = useState('asc')
  const [sortColumn, setSortColumn] = useState('prefix')

  return (
    <div className='user-table-parent'>
      <table className='user-section'>
        <thead className={`user-table-header-${theme}`}>
          <tr>
            <th className='table-header-text'>
              Facility 
            </th>
            <th className='table-header-text'>
              Care
            </th>
            <th className='table-header-text'>
              Day In
            </th>
            <th className='table-header-text'>
              Day Out
            </th>
            <th className='table-header-text'>
              Days
            </th>
          </tr>
        </thead>
        <tbody className={`user-table-body-${theme}`}>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>Beachside</td>
            <td>Residential</td>
            <td>11/1/2023</td>
            <td>12/1/23</td>
            <td>30 days</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>Beachside</td>
            <td>Residential</td>
            <td>11/1/2023</td>
            <td>12/1/23</td>
            <td>30 days</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>Beachside</td>
            <td>Residential</td>
            <td>11/1/2023</td>
            <td>12/1/23</td>
            <td>30 days</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>Beachside</td>
            <td>Residential</td>
            <td>11/1/2023</td>
            <td>12/1/23</td>
            <td>30 days</td>
          </tr>
          <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>Beachside</td>
            <td>Residential</td>
            <td>11/1/2023</td>
            <td>12/1/23</td>
            <td>30 days</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CareTableComponent
