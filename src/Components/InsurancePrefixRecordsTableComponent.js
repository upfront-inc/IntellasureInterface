import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

const InsurancePrefixRecordsTableComponent = (props) => {
  const {setViewingTab, viewingTab, tabDetails} = props

  const { theme } = useTheme()

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
              Res. Visits
            </th>
            <th className='table-header-text'>
              Detox Days
            </th>
            <th className='table-header-text'>
              Detox Visits
            </th>
            <th className='table-header-text'>
              Total Charges 
            </th>
            <th className='table-header-text'>
              Total Paid 
            </th>
            <th className='table-header-text'>
              Payout % 
            </th>
            <th className='table-header-text'>
              Admission 
            </th>
            <th className='table-header-text'>
              Admission % 
            </th>
            <th className='table-header-text'>
              Last Updated
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John DOe</td>
            <td>SVD</td>
            <td>SVD238948237</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days</td>
            <td>2 Visits</td>
            <td>18 Days</td>
            <td>2 Visits</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>12/29/2023</td>
          </tr>
          <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John DOe</td>
            <td>SVD</td>
            <td>SVD238948237</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days</td>
            <td>2 Visits</td>
            <td>18 Days</td>
            <td>2 Visits</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>12/29/2023</td>
          </tr>
          <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John DOe</td>
            <td>SVD</td>
            <td>SVD238948237</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days</td>
            <td>2 Visits</td>
            <td>18 Days</td>
            <td>2 Visits</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>12/29/2023</td>
          </tr>
          <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John DOe</td>
            <td>SVD</td>
            <td>SVD238948237</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days</td>
            <td>2 Visits</td>
            <td>18 Days</td>
            <td>2 Visits</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>12/29/2023</td>
          </tr>
          <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John DOe</td>
            <td>SVD</td>
            <td>SVD238948237</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days</td>
            <td>2 Visits</td>
            <td>18 Days</td>
            <td>2 Visits</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>12/29/2023</td>
          </tr>
          <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John DOe</td>
            <td>SVD</td>
            <td>SVD238948237</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days</td>
            <td>2 Visits</td>
            <td>18 Days</td>
            <td>2 Visits</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>12/29/2023</td>
          </tr>
          <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John DOe</td>
            <td>SVD</td>
            <td>SVD238948237</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days</td>
            <td>2 Visits</td>
            <td>18 Days</td>
            <td>2 Visits</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>12/29/2023</td>
          </tr>
          <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John DOe</td>
            <td>SVD</td>
            <td>SVD238948237</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days</td>
            <td>2 Visits</td>
            <td>18 Days</td>
            <td>2 Visits</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>12/29/2023</td>
          </tr>
          <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John DOe</td>
            <td>SVD</td>
            <td>SVD238948237</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days</td>
            <td>2 Visits</td>
            <td>18 Days</td>
            <td>2 Visits</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>12/29/2023</td>
          </tr>
          <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John DOe</td>
            <td>SVD</td>
            <td>SVD238948237</td>
            <td>AETNA</td>
            <td>In-Network</td>
            <td>AXIS</td>
            <td>12 Days</td>
            <td>2 Visits</td>
            <td>18 Days</td>
            <td>2 Visits</td>
            <td>$18,324</td>
            <td>$10,2232</td>
            <td>81%</td>
            <td>Likely</td>
            <td>78%</td>
            <td>12/29/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default InsurancePrefixRecordsTableComponent
