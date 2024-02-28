import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

const FlaggedTableComponent = (props) => {
  const {setViewingTab, viewingTab, setTabDetails} = props

  const { theme } = useTheme()

  const [sort, setSort] = useState('asc')
  const [sortColumn, setSortColumn] = useState('prefix')

  const updateSortWithColumn = (sort, column) => {
    setSort(sort)
    setSortColumn(column)
  }

  return (
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'prefix'){
                  updateSortWithColumn('dec', 'prefix')
                } else {
                  updateSortWithColumn('asc', 'prefix')
                }
              }} className='table-header-text'>
              Prefix <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'prefix' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'policy'){
                  updateSortWithColumn('dec', 'policy')
                } else {
                  updateSortWithColumn('asc', 'policy')
                }
              }} className='table-header-text'>
              Policy <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'policy' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'name'){
                  updateSortWithColumn('dec', 'name')
                } else {
                  updateSortWithColumn('asc', 'name')
                }
              }} className='table-header-text'>
              Name <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'name' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'insurance'){
                  updateSortWithColumn('dec', 'insurance')
                } else {
                  updateSortWithColumn('asc', 'insurance')
                }
              }} className='table-header-text'>
              Insurance <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'insurance' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'claimNumber'){
                  updateSortWithColumn('dec', 'claimNumber')
                } else {
                  updateSortWithColumn('asc', 'claimNumber')
                }
              }} className='table-header-text'>
              Claim # <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'claimNumber' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'state'){
                  updateSortWithColumn('dec', 'state')
                } else {
                  updateSortWithColumn('asc', 'state')
                }
              }} className='table-header-text'>
              Claim State <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'state' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'status'){
                  updateSortWithColumn('dec', 'status')
                } else {
                  updateSortWithColumn('asc', 'status')
                }
              }} className='table-header-text'>
              Claim Status <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'status' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'reson'){
                  updateSortWithColumn('dec', 'reson')
                } else {
                  updateSortWithColumn('asc', 'reson')
                }
              }} className='table-header-text'>
              Reasoning <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'reson' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'network'){
                  updateSortWithColumn('dec', 'network')
                } else {
                  updateSortWithColumn('asc', 'network')
                }
              }} className='table-header-text'>
              Network <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'network' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'facility'){
                  updateSortWithColumn('dec', 'facility')
                } else {
                  updateSortWithColumn('asc', 'facility')
                }
              }} className='table-header-text'>
              Facility <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'facility' ? faAngleDoubleDown : faAngleDoubleUp} />
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
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'charged'){
                  updateSortWithColumn('dec', 'charged')
                } else {
                  updateSortWithColumn('asc', 'charged')
                }
              }} className='table-header-text'>
              Total Charges <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'charged' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'deductable'){
                  updateSortWithColumn('dec', 'deductable')
                } else {
                  updateSortWithColumn('asc', 'deductable')
                }
              }} className='table-header-text'>
              Deductable <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'deductable' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'paid'){
                  updateSortWithColumn('dec', 'paid')
                } else {
                  updateSortWithColumn('asc', 'paid')
                }
              }} className='table-header-text'>
              Total Paid <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'paid' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'payout'){
                  updateSortWithColumn('dec', 'payout')
                } else {
                  updateSortWithColumn('asc', 'payout')
                }
              }} className='table-header-text'>
              Payout % <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'payout' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {Array.from({ length: 19 }).map((_, index) => (
            <tr onClick={() => {setViewingTab('user')}} className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
              <td>SVD</td>
              <td>SVD2134872y743</td>
              <td>John Doe</td>
              <td>AETNA</td>
              <td>HS10002</td>
              <td>Open</td>
              <td>Denied</td>
              <td>Medical records required</td>
              <td>In-Network</td>
              <td>AXIS</td>
              <td>12 Days</td>
              <td>2 Visits</td>
              <td>18 Days</td>
              <td>2 Visits</td>
              <td>$18,324</td>
              <td>$5,000</td>
              <td>$10,2232</td>
              <td>81%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FlaggedTableComponent
