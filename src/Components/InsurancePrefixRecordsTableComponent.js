import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import InsurancePrefixRecordComponent from './InsurancePrefixRecordComponent'
import { useUser } from '../Contexts/UserContext'

const InsurancePrefixRecordsTableComponent = (props) => {
  const {setViewingTab, viewingTab, tabDetails} = props

  const { theme } = useTheme()
  const { userProfile } = useUser()

  console.log(userProfile)

  const [sort, setSort] = useState('asc')
  const [sortColumn, setSortColumn] = useState('prefix')

  return (
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th className='table-header-text'>
              Name 
            </th>
            <th className='table-header-text'>
              Prefix 
            </th>
            <th className='table-header-text'>
              Policy 
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
              Res. Days
            </th>
            <th className='table-header-text'>
              Detox Days
            </th>
            <th className='table-header-text'>
              Avg. Charges 
            </th>
            <th className='table-header-text'>
              Avg. Paid 
            </th>
            <th className='table-header-text'>
              Payout % 
            </th>
            <th className='table-header-text'>
              Admission 
            </th>
            {
              userProfile.priviledges === 'admin' || userProfile.priviledges === 'dev' || userProfile.priviledges === 'owner'
                ? <th className='table-header-text'>
                    Admission % 
                  </th>
                : null
            }
            <th className='table-header-text'>
              Last Updated
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {Array.from({ length: 2 }).map((_, index) => (
            <InsurancePrefixRecordComponent setViewingTab={setViewingTab} record={''}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InsurancePrefixRecordsTableComponent
