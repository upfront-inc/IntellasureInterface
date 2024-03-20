import React, { useEffect, useState } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import TopBarComponent from '../Components/TopBarComponent';
import FilterComponent from '../Components/FilterComponent';
import MissingTableComponent from '../Components/MissingTableComponent';
import IntakeTableComponent from '../Components/IntakeTableComponent';
import TopBarAddComponent from '../Components/TopBarAddComponent';
import axios from 'axios';
import AdduserComponent from '../Components/AdduserComponent';
import { useUser } from '../Contexts/UserContext';
import { useSidebar } from '../Contexts/SidebarContext';
import UpdateIntakeRecord from '../Components/UpdateIntakeRecord';
import UpdateIntakeNotesComponent from '../Components/UpdateIntakeNotesComponent';
import ClaimTableComponent from '../Components/ClaimTableComponent';

const ClaimsScreen = () => {
  const { theme } = useTheme(); 
  const { sidebarPosition, showProfile } = useSidebar();
  const { selectedTab, showAddIntakeRecord, showAddUserRecord, showUpdateIntakeRecord } = useApp();
  const { grabCurrentUser, currentUser, loading, userProfile } = useUser()

  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)

  // const nextPage = () => {
  //   if(page >= 1 && page < 20){
  //     setPage(page + 1)
  //   }
  // }

  // const previousPage = () => {
  //   if(page > 1 && page < 20){
  //     setPage(page - 1)
  //   }
  // }

  useEffect(() => {
    getClaimRecords()
  }, [])

  const getClaimRecords = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://intellasurebackend-docker.onrender.com/claims/claim_main_page',
      headers: {},
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data)
      setResults(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <div className={`content-container-${theme}`}>
        <div className='table-container'>
          <ClaimTableComponent results={results}/>
        </div>
      </div>
    </>
  )
}

export default ClaimsScreen
