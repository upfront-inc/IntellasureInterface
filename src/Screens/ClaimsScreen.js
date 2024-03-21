import React, { useEffect, useState } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import axios from 'axios';
import { useUser } from '../Contexts/UserContext';
import { useSidebar } from '../Contexts/SidebarContext';
import ClaimTableComponent from '../Components/ClaimTableComponent';
import ClaimTopBarComponent from '../Components/ClaimTopBarComponent'
import ClaimDetailsTableComponent from '../Components/ClaimDetailsTableComponent'
import ClaimDetailsTopBar from '../Components/ClaimDetailsTopBar';

const ClaimsScreen = () => {
  const { theme } = useTheme(); 

  const [results, setResults] = useState([])
  const [claimAtInsurance, setClaimAtInsurance] = useState([])
  const [setToInsruance, setSentToInsurnace] = useState([])
  const [pendingInsuranceAuth, setPendingInsuranceAuth] = useState([])
  const [rejectedAtInsurance, setRejectedAtInsurance] = useState([])
  const [writeoff, setWriteoff] = useState([])
  const [paid, setPaid] = useState([])
  const [balanceDuePatient, setBalanceDuePatient] = useState([])
  const [deniedAtInsurance, setDeniedAtInsurance] = useState([])
  const [allClaims, setAllClaims] = useState([])

  const [viewingTab, setViewingTab] = useState('claims')
  const [selectedClaim, setSelectedClaim] = useState('')

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
      let allResults = []
      let atInsurance = []
      let toInsurance = []
      let pendingInsurance = []
      let rejected = []
      let writeoffs = []
      let paidClaims = []
      let denied = []
      let balance = []
      console.log(response.data)
      setResults(response.data)
      response.data.map((record) => {
        if(record.status === 'CLAIM AT INSURANCE'){
          atInsurance.push(record)
        }
        if(record.status === 'SEND TO INSURANCE VIA CLEARINGHOUSE'){
          toInsurance.push(record)
        }
        if(record.status === 'PENDING INSURANCE AUTH'){
          pendingInsurance.push(record)
        }
        if(record.status === 'REJECTED AT INSURANCE'){
          rejected.push(record)
        }
        if(record.status === 'WRITEOFF'){
          writeoffs.push(record)
        }
        if(record.status === 'BALANCE DUE PATIENT'){
          balance.push(record)
        }
        if(record.status === 'DENIED AT INSURANCE'){
          denied.push(record)
        }
        if(record.status === 'PAID'){
          paidClaims.push(record)
        }
        allResults.push(record)
      })
      setClaimAtInsurance(atInsurance)
      setSentToInsurnace(toInsurance)
      setPendingInsuranceAuth(pendingInsurance)
      setBalanceDuePatient(balance)
      setRejectedAtInsurance(rejected)
      setWriteoff(writeoffs)
      setBalanceDuePatient(balance)
      setDeniedAtInsurance(denied)
      setPaid(paidClaims)
      setAllClaims(allResults)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const toggleViewedResults = (filter) => {
    if(filter === 'all'){
      setResults(allClaims)
    }
    if(filter === 'paid'){
      setResults(paid)
    }
    if(filter === 'rejected'){
      setResults(rejectedAtInsurance)
    }
    if(filter === 'denied'){
      setResults(deniedAtInsurance)
    }
    if(filter === 'sent'){
      setResults(setToInsruance)
    }
    if(filter === 'atInsurance'){
      setResults(claimAtInsurance)
    }
    if(filter === 'pending'){
      setResults(pendingInsuranceAuth)
    }
    if(filter === 'writeoff'){
      setResults(writeoff)
    }
    if(filter === 'balance'){
      setResults(balanceDuePatient)
    }
  }

  return (
    <>
      <div className={`content-container-${theme}`}>
        {
          viewingTab === 'claims'
            ? <ClaimTopBarComponent toggleViewedResults={toggleViewedResults} />
            : <ClaimDetailsTopBar setViewingTab={setViewingTab} />
        }
        <div className='table-container'>
          {
            viewingTab === 'claims'
              ? <ClaimTableComponent setSelectedClaim={setSelectedClaim} setViewingTab={setViewingTab} results={results}/>
              : <ClaimDetailsTableComponent claimId={selectedClaim}/>
          }
        </div>
      </div>
    </>
  )
}

export default ClaimsScreen
