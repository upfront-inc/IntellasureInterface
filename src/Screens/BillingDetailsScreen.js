import React, { useContext, useEffect, useState } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import TopBarComponent from '../Components/TopBarComponent';
import FilterComponent from '../Components/FilterComponent';
import BillingDetailsTablesComponent from '../Components/BillingDetailsTablesComponent';
import InsurancePrefixRecordsTableComponent from '../Components/InsurancePrefixRecordsTableComponent';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SingleUserDetailsComponent from '../Components/SingleUserDetailsComponent';
import axios from 'axios';

const BillingDetailsScreen = () => {

  const { theme } = useTheme()
  const { tableFilter, selectedTab } = useApp()
  
  const [viewingTab, setViewingTab] = useState('billing')
  const [tabDetails, setTabDetails] = useState(null)

  const [searchTerm, setSearchTerm] = useState('')
  const [activeSearch, setActiveSearch] = useState(false)

  const [records, setRecords] = useState([])

  useEffect(() => {
    grabRecords()
  }, [])

  const grabRecords = () => {
    const url = 'https://intellasurebackend-docker.onrender.com/level3'
    axios.get(url)
    .then((response) => {
      setRecords(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const searchPrefix = (search) => {
    let searchResultsRecords = []
    records.map((record) => {
      if(record.prefix === search){
        searchResultsRecords.push(record)
      }
    })
    console.log(searchResultsRecords.length)
    setRecords(searchResultsRecords)
  }

  return (
    <div className={`content-container-${theme}`}>
      {
        viewingTab === 'billing'
          ? <TopBarComponent searchPrefix={searchPrefix} grabRecords={grabRecords} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setActiveSearch={setActiveSearch} activeSearch={activeSearch}/>
          : viewingTab === 'prefix'
              ? <div onClick={() => {setViewingTab('billing')}} className={`top-bar-${theme}`}>
                  <FontAwesomeIcon icon={faAngleDoubleLeft} className='search-icon'/>
                </div>
              : viewingTab === 'user'
                  ? <div onClick={() => {setViewingTab('prefix')}} className={`top-bar-${theme}`}>
                      <FontAwesomeIcon icon={faAngleDoubleLeft} className='search-icon'/>
                    </div>
                  : null
      }
      {
        tableFilter 
          ? <FilterComponent/>
          : null 
      }
      <div className='table-container'>
        {
          viewingTab === 'billing'
            ? <BillingDetailsTablesComponent records={records} setViewingTab={setViewingTab} viewingTab={viewingTab} setTabDetails={setTabDetails}/>
            : viewingTab === 'prefix'
                ? <InsurancePrefixRecordsTableComponent setViewingTab={setViewingTab} viewingTab={viewingTab} tabDetails={tabDetails}/>
                : viewingTab === 'user'
                    ? <SingleUserDetailsComponent setViewingTab={setViewingTab} viewingTab={viewingTab} tabDetails={tabDetails}/>
                    : <BillingDetailsTablesComponent setViewingTab={setViewingTab} viewingTab={viewingTab} setTabDetails={setTabDetails}/>
        }
      </div>
    </div>
  )
}

export default BillingDetailsScreen
