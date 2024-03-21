import React, { useEffect, useState } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import axios from 'axios';
import { useUser } from '../Contexts/UserContext';
import { useSidebar } from '../Contexts/SidebarContext';
import ClaimTableComponent from '../Components/ClaimTableComponent';
import FollowUpTableComponent from '../Components/FollowUpTableComponent';
import ClaimDetailsTopBar from '../Components/ClaimDetailsTopBar';
import FollowupDetailsTableComponent from '../Components/FollowupDetailsTableComponent';

const FollowupScreen = () => {
  const { theme } = useTheme(); 

  const [results, setResults] = useState([])

  const [viewingTab, setViewingTab] = useState('claims')
  const [selectedClaim, setSelectedClaim] = useState('')

  useEffect(() => {
    getClaimRecords()
  }, [])

  const getClaimRecords = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://intellasurebackend-docker.onrender.com/claims/favorites',
      headers: { }
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
        {
          viewingTab === 'claims'
            ? null
            : <ClaimDetailsTopBar setViewingTab={setViewingTab} />
        }
        <div className='table-container'>
          {
            viewingTab === 'claims'
              ? <FollowUpTableComponent setSelectedClaim={setSelectedClaim} setViewingTab={setViewingTab} getClaimRecords={getClaimRecords} results={results}/>
              : <FollowupDetailsTableComponent claimId={selectedClaim}/>
          }
        </div>
      </div>
    </>
  )
}

export default FollowupScreen
