import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { useFilter } from '../Contexts/FilterContext'

const BillingDetailsTablesComponent = (props) => {
  const {setViewingTab, viewingTab, setTabDetails} = props

  const { theme } = useTheme()

  const {
    columnPrefix, 
    columnInsurance,
    columnNetwork, 
    columnFacility,
    columnResDays, 
    columnResVisits,
    columnDetoxDays, 
    columnDetoxVisits,
    columnTotalCharged, 
    columnTotalPaid,
    columnPayout, 
    columnAdmission,
    columnAdmissionPercent, 
  } = useFilter()

  const [sort, setSort] = useState('asc')
  const [sortColumn, setSortColumn] = useState('prefix')

  const updateSortWithColumn = (sort, column) => {
    setSort(sort)
    setSortColumn(column)
  }

  const updateRecord = () => {
    setTabDetails({name: ''})
    setViewingTab('prefix')
  }

  return (
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            {
              columnPrefix
                ? <th onClick={() => {
                    if(sort === 'asc' && sortColumn === 'prefix'){
                      updateSortWithColumn('dec', 'prefix')
                    } else {
                      updateSortWithColumn('asc', 'prefix')
                    }
                    }} className='table-header-text'
                  >
                    Prefix <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'prefix' ? faAngleDoubleDown : faAngleDoubleUp} />
                  </th>
                : null
            }
            {
              columnInsurance
                ? <th onClick={() => {
                    if(sort === 'asc' && sortColumn === 'insurance'){
                      updateSortWithColumn('dec', 'insurance')
                    } else {
                      updateSortWithColumn('asc', 'insurance')
                    }
                  }} className='table-header-text'>
                    Insurance <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'insurance' ? faAngleDoubleDown : faAngleDoubleUp} />
                  </th>
                : null
            }
            {
              columnNetwork
                ? <th onClick={() => {
                    if(sort === 'asc' && sortColumn === 'network'){
                      updateSortWithColumn('dec', 'network')
                    } else {
                      updateSortWithColumn('asc', 'network')
                    }
                  }} className='table-header-text'>
                    Network <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'network' ? faAngleDoubleDown : faAngleDoubleUp} />
                  </th>
                : null
            }
            {
              columnFacility
                ? <th onClick={() => {
                    if(sort === 'asc' && sortColumn === 'facility'){
                      updateSortWithColumn('dec', 'facility')
                    } else {
                      updateSortWithColumn('asc', 'facility')
                    }
                  }} className='table-header-text'>
                    Facility <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'facility' ? faAngleDoubleDown : faAngleDoubleUp} />
                  </th>
                : null
            }
            {
              columnResDays
                ? <th className='table-header-text'>
                    Res. Days
                  </th>
                : null
            }
            {
              columnResVisits
                ? <th className='table-header-text'>
                    Res. Visits
                  </th>
                : null
            }
            {
              columnDetoxDays
                ? <th className='table-header-text'>
                    Detox Days
                  </th>
                : null
            }
            {
              columnDetoxVisits
                ? <th className='table-header-text'>
                    Detox Visits
                  </th>
                : null
            }
            {
              columnTotalCharged
                ? <th onClick={() => {
                    if(sort === 'asc' && sortColumn === 'charged'){
                      updateSortWithColumn('dec', 'charged')
                    } else {
                      updateSortWithColumn('asc', 'charged')
                    }
                  }} className='table-header-text'>
                    Total Charges <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'charged' ? faAngleDoubleDown : faAngleDoubleUp} />
                  </th>
                : null
            }
            {
              columnTotalPaid
                ? <th onClick={() => {
                    if(sort === 'asc' && sortColumn === 'paid'){
                      updateSortWithColumn('dec', 'paid')
                    } else {
                      updateSortWithColumn('asc', 'paid')
                    }
                  }} className='table-header-text'>
                    Total Paid <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'paid' ? faAngleDoubleDown : faAngleDoubleUp} />
                  </th>
                : null
            }
            {
              columnPayout
                ? <th onClick={() => {
                    if(sort === 'asc' && sortColumn === 'payout'){
                      updateSortWithColumn('dec', 'payout')
                    } else {
                      updateSortWithColumn('asc', 'payout')
                    }
                  }} className='table-header-text'>
                    Payout % <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'payout' ? faAngleDoubleDown : faAngleDoubleUp} />
                  </th>
                : null
            }
            {
              columnAdmission
                ? <th onClick={() => {
                    if(sort === 'asc' && sortColumn === 'admission'){
                      updateSortWithColumn('dec', 'admission')
                    } else {
                      updateSortWithColumn('asc', 'admission')
                    }
                  }} className='table-header-text'>
                    Admission <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'admission' ? faAngleDoubleDown : faAngleDoubleUp} />
                  </th>
                : null
            }
            {
              columnAdmissionPercent
                ? <th onClick={() => {
                    if(sort === 'asc' && sortColumn === 'admitPercent'){
                      updateSortWithColumn('dec', 'admitPercent')
                    } else {
                      updateSortWithColumn('asc', 'admitPercent')
                    }
                  }} className='table-header-text'>
                    Admission % <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'admitPatient' ? faAngleDoubleDown : faAngleDoubleUp} />
                  </th>
                : null
            }
            <th onClick={() => {}} className='table-header-text'>
              Details
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
          <tr onClick={() => {updateRecord()}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>SVD</td>
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
            <td onClick={() => {}}>Open</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BillingDetailsTablesComponent
