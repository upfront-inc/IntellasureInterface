import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import '../Css/usertable.css'
import ClaimTableRecordComponent from './ClaimTableRecordComponent'

const ClaimTableComponent = (props) => {
  const {results} = props

  const { theme } = useTheme()

  return (
    <div className='user-table-parent'>
      <table className='user-section'>
        <thead className={`user-table-header-${theme}`}>
          <tr>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Check Box
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Claim Id
            </th>
            <th style={{minWidth: '200px'}} className='table-header-text'>
              Name
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Facility
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Network
            </th>
            <th style={{minWidth: '350px'}} className='table-header-text'>
              Status
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Notes
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Charged Total
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Paid Total
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Balance Total
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Start Date
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
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
                        <ClaimTableRecordComponent item={item}/>
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

export default ClaimTableComponent
