import React, { useEffect, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import {data} from './converted_data_with_prefix_handling.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { useUser } from '../Contexts/UserContext.js'

const DailyRatesTableComponent = (props) => {
  const { updateSort, sort, column, results} = props

  const { theme } = useTheme()
  const {userProfile} = useUser()

  const formatDollarAmount = (str) => {
    const num = parseFloat(str);
    return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  return (
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th onClick={() => {updateSort('prefix', 'BCBS Prefix')}} className='table-header-text'>
              Prefix  
              {
                sort === 'asc' & column === 'prefix'
                  ? <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesUp}/>
                  : <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesDown}/>
              }
            </th>
            <th onClick={() => {updateSort('loc', 'LOC')}} className='table-header-text'>
              Level Of Care
              {
                sort === 'asc' & column === 'loc'
                  ? <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesUp}/>
                  : <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesDown}/>
              }
            </th>
            <th onClick={() => {updateSort('unites', 'Total Units')}} className='table-header-text'>
              Total Units
              {
                sort === 'asc' & column === 'unites'
                  ? <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesUp}/>
                  : <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesDown}/>
              }
            </th>
            <th onClick={() => {updateSort('allowed', 'Allowed %')}} className='table-header-text'>
              Allowed %
              {
                sort === 'asc' & column === 'allowed'
                  ? <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesUp}/>
                  : <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesDown}/>
              }
            </th>
            <th onClick={() => {updateSort('paid', 'Paid %')}} className='table-header-text'>
              Paid %
              {
                sort === 'asc' & column === 'paid'
                  ? <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesUp}/>
                  : <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesDown}/>
              }
            </th>
            <th onClick={() => {updateSort('dailyRate', 'Avg Daily Rate')}} className='table-header-text'>
              Daily Rate
              {
                sort === 'asc' & column === 'dailyRate'
                  ? <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesUp}/>
                  : <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesDown}/>
              }
            </th>
            <th onClick={() => {updateSort('updates', 'Last Paid')}} className='table-header-text'>
              Last Updated
              {
                sort === 'asc' & column === 'updates'
                  ? <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesUp}/>
                  : <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAnglesDown}/>
              }
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {
            results.map((entry, index) => {
              return(
                <tr className={`table-content-row-${theme}`} key={index} style={{textAlign: 'center'}}>
                  <td>{entry['BCBS Prefix']}</td>
                  <td>{entry['LOC']}</td>
                  <td>{entry['Total Units']} Units</td>
                  <td>{(entry['Allowed %'] * 100).toFixed(0)}%</td>
                  <td>{(entry['Paid %']* 100).toFixed(0)}%</td>
                  {
                    userProfile.priviledges === 'admin' || userProfile.priviledges === 'dev' || userProfile.priviledges === 'owner'
                      ? <td>{formatDollarAmount(entry['Avg Daily Rate'])}</td>
                      : <td>
                          {
                            entry['Avg Daily Rate'] > 900
                              ? <>GOOD VOB</>
                              : <>BAD VOB</>
                          }
                        </td>
                  }
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
