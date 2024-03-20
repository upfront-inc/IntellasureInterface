import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import '../Css/usertable.css'
import ClaimTableRecordComponent from './ClaimTableRecordComponent'
import FollowUpTableRecordComponent from './FollowUpTableRecordComponent'

const FollowUpTableComponent = (props) => {
  const {results, getClaimRecords} = props

  const { theme } = useTheme()

  return (
    <div className='user-table-parent'>
      <table className='user-section'>
        <thead className={`user-table-header-${theme}`}>
          <tr>
            <th className='table-header-text'>
              Claim Id
            </th>
            <th className='table-header-text'>
              Name
            </th>
            <th className='table-header-text'>
              Facility
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
            <th className='table-header-text'>
              Status
            </th>
            <th className='table-header-text'>
              Check Box
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
                        <FollowUpTableRecordComponent getClaimRecords={getClaimRecords} item={item}/>
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

export default FollowUpTableComponent
