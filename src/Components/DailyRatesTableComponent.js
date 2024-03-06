import React, { useEffect, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import {data} from './converted_data_with_prefix_handling.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'

const DailyRatesTableComponent = (props) => {
  const {searchTerm} = props

  const { theme } = useTheme()
  
  const [sort, setSort] = useState('desc')
  const [column, setColumn] = useState('prefix')

  const [results, setResults] = useState(data)

  useEffect(() => {
    if(searchTerm === ''){
      setResults(data)
    } else {
      let searchResults = []
      data.map((item) => {
        console.log(item['BCBS Prefix'] === searchTerm)
        if(item['BCBS Prefix'] === searchTerm){
          searchResults.push(item)
        }
      })
      setResults(searchResults)
    }
  }, [searchTerm])

  const updateSort = (columnName, columnNameSorting) => {
    if(sort === 'asc'){
      setSort('desc')
    } else {
      setSort('asc')
    }
    setColumn(columnName)
    sortData(columnNameSorting)
  }

  const sortData = (columnName) => {
    // const sortOrderToSet = sortedColumn === columnName && sortOrder === 'asc' ? 'desc' : 'asc';
    // setSort(sortOrderToSet);
    // setColumn(columnName);

    // Sorting logic
    return data.sort((a, b) => {
      let valueA = a[columnName];
      let valueB = b[columnName];

      // Handling special cases for numeric and date sorting
      if (columnName === 'Allowed %' || columnName === 'Paid %' || columnName === 'Avg Daily Rate') {
        valueA = parseFloat(valueA);
        valueB = parseFloat(valueB);
      } else if (columnName === 'Last Paid') {
        valueA = new Date(valueA);
        valueB = new Date(valueB);
      }

      if (sort === 'asc') {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
  };

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
                  <td>{formatDollarAmount(entry['Avg Daily Rate'])}</td>
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
