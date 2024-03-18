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

const IntakeScreen = () => {
  const { theme } = useTheme(); 
  const { sidebarPosition, showProfile } = useSidebar();
  const { selectedTab, showAddIntakeRecord, showAddUserRecord, showUpdateIntakeRecord } = useApp();
  const { grabCurrentUser, currentUser, loading, userProfile } = useUser()


  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)

  const [showIntakeRecordNotes, setShowIntakeRecordsNotes] = useState(false)

  const [selectedIntakeId, setSelectedIntakeId] = useState('')

  const nextPage = () => {
    if(page >= 1 && page < 20){
      setPage(page + 1)
    }
  }

  const previousPage = () => {
    if(page > 1 && page < 20){
      setPage(page - 1)
    }
  }

  useEffect(() => {
    getIntakeRecords()
  }, [])

  const getIntakeRecords = () => {
    let data = JSON.stringify({
      "status": "success",
      "method": "GET"
    });
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://intellasurebackend-docker.onrender.com/intake/',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios.request(config)
    .then((response) => {
      console.log(response.data.data[0])
      if(response.data.data.length > 0){
        if(userProfile.privileges === 'manager' || userProfile.privileges === 'admin' || userProfile.privileges === 'dev' || userProfile.privileges === 'owner'){
          setResults(response.data.data)
        } else {
          let coordinatorRecords = []
          response.data.data.map((record) => {
            if(record.coordinator === userProfile.userid){
              coordinatorRecords.push(record)
            }
          })
          setResults(coordinatorRecords)
        }
      } 
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      {
        showAddUserRecord
          ? <div className={`popup-${sidebarPosition}`}><AdduserComponent/></div>
          : null
      }
      {
        showUpdateIntakeRecord
          ? <div className={`popup-${sidebarPosition}`}><UpdateIntakeRecord getIntakeRecords={getIntakeRecords}/></div>
          : null
      }
      {
        showIntakeRecordNotes
          ? <div className={`popup-${sidebarPosition}`}><UpdateIntakeNotesComponent selectedIntakeId={selectedIntakeId}/></div>
          : null
      }
      <div className={`content-container-${theme}`}>
        <TopBarAddComponent page={page} nextPage={nextPage} previousPage={previousPage}/>
        <div className='table-container'>
          <IntakeTableComponent setShowIntakeRecordsNotes={setShowIntakeRecordsNotes} setSelectedIntakeId={setSelectedIntakeId} results={results}/>
        </div>
      </div>
    </>
  )
}

export default IntakeScreen
