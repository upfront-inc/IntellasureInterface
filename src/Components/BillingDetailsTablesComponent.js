import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { useFilter } from '../Contexts/FilterContext'
import BillingDetailsRecordsComponent from './BillingDetailsRecordsComponent'
import { useUser } from '../Contexts/UserContext'

const BillingDetailsTablesComponent = (props) => {
  const {setViewingTab, viewingTab, setTabDetails} = props

  const { theme } = useTheme()
  const { userProfile, loading } = useUser()

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
            <th onClick={() => {
              if(sort === 'asc' && sortColumn === 'prefix'){
                updateSortWithColumn('dec', 'prefix')
              } else {
                updateSortWithColumn('asc', 'prefix')
              }
              }} className='table-header-text'
            >
              Prefix <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'prefix' ? faAngleDoubleDown : faAngleDoubleUp} />
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
              Detox Days
            </th>
            <th onClick={() => {
              if(sort === 'asc' && sortColumn === 'charged'){
                updateSortWithColumn('dec', 'charged')
              } else {
                updateSortWithColumn('asc', 'charged')
              }
            }} className='table-header-text'>
              Avg. Charges <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'charged' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
              if(sort === 'asc' && sortColumn === 'paid'){
                updateSortWithColumn('dec', 'paid')
              } else {
                updateSortWithColumn('asc', 'paid')
              }
            }} className='table-header-text'>
              Avg. Paid <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'paid' ? faAngleDoubleDown : faAngleDoubleUp} />
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
            <th onClick={() => {
              if(sort === 'asc' && sortColumn === 'admission'){
                updateSortWithColumn('dec', 'admission')
              } else {
                updateSortWithColumn('asc', 'admission')
              }
            }} className='table-header-text'>
              Admission <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'admission' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            {
              userProfile.priviledges === 'admin' || userProfile.priviledges === 'dev' || userProfile.priviledges === 'owner'
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
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {Array.from({ length: 40 }).map((_, index) => (
            <BillingDetailsRecordsComponent setViewingTab={setViewingTab} record={''}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BillingDetailsTablesComponent
