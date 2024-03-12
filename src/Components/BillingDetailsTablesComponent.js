import React, { useEffect, useMemo, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { useFilter } from '../Contexts/FilterContext'
import BillingDetailsRecordsComponent from './BillingDetailsRecordsComponent'
import { useUser } from '../Contexts/UserContext'
import axios from 'axios'

const BillingDetailsTablesComponent = (props) => {
  const {setViewingTab, setSelectedPrefix, records, setTabDetails} = props

  const { theme } = useTheme()
  const { userProfile, loading } = useUser()

  const [sortDirection, setSortDirection] = useState('asc');
  const [sortColumn, setSortColumn] = useState('');

  const sortedRecords = useMemo(() => {
    return [...records].sort((a, b) => {
      if (sortColumn === '') return 0; // No sorting if no column selected
  
      let valueA = a[sortColumn];
      let valueB = b[sortColumn];
  
      // Define columns that should be treated as floats
      const floatColumns = ['average_charged', 'average_paid', 'balance', 'payout_ratio'];
      // Define columns that should be treated as integers
      const integerColumns = ['avg_DTX_days', 'avg_RTC_days'];
  
      if (floatColumns.includes(sortColumn)) {
        valueA = parseFloat(valueA) || 0; // Parse to float, default to 0 if NaN
        valueB = parseFloat(valueB) || 0;
      } else if (integerColumns.includes(sortColumn)) {
        valueA = parseInt(valueA, 10) || 0; // Parse to integer, default to 0 if NaN
        valueB = parseInt(valueB, 10) || 0;
      } else {
        // Treat as case-insensitive string for other columns
        valueA = valueA?.toString().toLowerCase() || '';
        valueB = valueB?.toString().toLowerCase() || '';
      }
  
      if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [records, sortDirection, sortColumn]);

  const handleSort = (direction, column) => {
    const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
    setSortColumn(column);
  };

  return (
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th onClick={() => {
              if(sortDirection === 'asc' && sortColumn === 'prefix'){
                handleSort('dec', 'prefix')
              } else {
                handleSort('asc', 'prefix')
              }
              }} className='table-header-text'
            >
              Prefix <FontAwesomeIcon height={20} width={20} color='black' icon={sortDirection === 'asc' && sortColumn === 'prefix' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
              if(sortDirection === 'asc' && sortColumn === 'insurance'){
                handleSort('dec', 'insurance')
              } else {
                handleSort('asc', 'insurance')
              }
            }} className='table-header-text'>
              Insurance <FontAwesomeIcon height={20} width={20} color='black' icon={sortDirection === 'asc' && sortColumn === 'insurance' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
              if(sortDirection === 'asc' && sortColumn === 'network'){
                handleSort('dec', 'network')
              } else {
                handleSort('asc', 'network')
              }
            }} className='table-header-text'>
              Network <FontAwesomeIcon height={20} width={20} color='black' icon={sortDirection === 'asc' && sortColumn === 'network' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th className='table-header-text'>
              Res. Days
            </th>
            <th className='table-header-text'>
              Detox Days
            </th>
            {
              userProfile.priviledges === 'member' || userProfile.priviledges === 'manager'
                ? null 
                : <>
                    <th onClick={() => {
                      if(sortDirection === 'asc' && sortColumn === 'average_charged'){
                        handleSort('dec', 'average_charged')
                      } else {
                        handleSort('asc', 'average_charged')
                      }
                    }} className='table-header-text'>
                      Avg. Charges <FontAwesomeIcon height={20} width={20} color='black' icon={sortDirection === 'asc' && sortColumn === 'average_charged' ? faAngleDoubleDown : faAngleDoubleUp} />
                    </th>
                    <th onClick={() => {
                      if(sortDirection === 'asc' && sortColumn === 'average_paid'){
                        handleSort('dec', 'average_paid')
                      } else {
                        handleSort('asc', 'average_paid')
                      }
                    }} className='table-header-text'>
                      Avg. Paid <FontAwesomeIcon height={20} width={20} color='black' icon={sortDirection === 'asc' && sortColumn === 'average_paid' ? faAngleDoubleDown : faAngleDoubleUp} />
                    </th>
                    <th onClick={() => {
                      if(sortDirection === 'asc' && sortColumn === 'payout_ratio'){
                        handleSort('dec', 'payout_ratio')
                      } else {
                        handleSort('asc', 'payout_ratio')
                      }
                    }} className='table-header-text'>
                      Payout % <FontAwesomeIcon height={20} width={20} color='black' icon={sortDirection === 'asc' && sortColumn === 'payout_ratio' ? faAngleDoubleDown : faAngleDoubleUp} />
                    </th>
                  </>
            }
            <th onClick={() => {
              if(sortDirection === 'asc' && sortColumn === 'admission'){
                handleSort('dec', 'admission')
              } else {
                handleSort('asc', 'admission')
              }
            }} className='table-header-text'>
              Admission <FontAwesomeIcon height={20} width={20} color='black' icon={sortDirection === 'asc' && sortColumn === 'admission' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            {
              userProfile.priviledges === 'admin' || userProfile.priviledges === 'dev' || userProfile.priviledges === 'owner'
                ? <th onClick={() => {
                    if(sortDirection === 'asc' && sortColumn === 'admitPercent'){
                      handleSort('dec', 'admitPercent')
                    } else {
                      handleSort('asc', 'admitPercent')
                    }
                  }} className='table-header-text'>
                    Admission % <FontAwesomeIcon height={20} width={20} color='black' icon={sortDirection === 'asc' && sortColumn === 'admitPatient' ? faAngleDoubleDown : faAngleDoubleUp} />
                  </th>
                : null
            }
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {
            sortedRecords.map((record) => {
              return(
                <>
                  <BillingDetailsRecordsComponent setSelectedPrefix={setSelectedPrefix} setViewingTab={setViewingTab} record={record}/>
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default BillingDetailsTablesComponent
