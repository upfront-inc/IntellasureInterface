import React, { useContext, useEffect, useState } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import TopBarComponent from '../Components/TopBarComponent';
import FilterComponent from '../Components/FilterComponent';
import DailyRatesTableComponent from '../Components/DailyRatesTableComponent'
import DailyRateTopBarComponent from '../Components/DailyRateTopBarComponent';
import {data} from '../Components/converted_data_with_prefix_handling'

const DailRateScreen = () => {

  const { theme } = useTheme()
  const { tableFilter, toggleTableFilter } = useApp()

  const [searchTerm, setSearchTerm] = useState('')
  const [activeSearch, setActiveSearch] = useState(false)

  const [results, setResults] = useState(data)

  const [sort, setSort] = useState('desc')
  const [column, setColumn] = useState('prefix')

  const updateSearch = (term) => {
    if(term === ''){
      console.log('empty search:', term)
      setResults(data)
    } else {
      const filteredResults = []
      results.map((item) => {
        if(item['BCBS Prefix'] === term){
          filteredResults.push(item)
        }
      })
      setResults(filteredResults)
    }
  }

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

  return (
    <div className={`content-container-${theme}`}>
      <DailyRateTopBarComponent updateSearch={updateSearch} activeSearch={activeSearch} setActiveSearch={setActiveSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className='table-container'>
        <DailyRatesTableComponent updateSort={updateSort} sort={sort} column={column} results={results}/>
      </div>
    </div>
  )
}

export default DailRateScreen
