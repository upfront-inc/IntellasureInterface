import { faLightbulb, faMoon, faSun, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../Css/Intake.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import axios from 'axios'

const AddIntakeRecord = () => {

  const { theme } = useTheme();
  const { toggleShowAddIntakeRecord } = useApp()

  const [client, setClient] = useState('')
  const [prefix, setPrefix] = useState('')
  const [insurance, setInsurance] = useState('')
  const [source, setSource] = useState('')
  const [coordinator, setCoordinator] = useState('')
  const [summaryOut, setSummaryOut] = useState('')
  const [details, setDetails] = useState('')
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState('')

  const handleClientNammeChnage = (e) => {
    setClient(e.target.value)
  }

  const handlePrefixChange = (e) => {
    setPrefix(e.target.value)
  }

  const handleInsuranceChnage = (e) => {
    setInsurance(e.target.value)
  }

  const handleSourceChnage = (e) => {
    setSource(e.target.value)
  }

  const handleCoordinatorChnage = (e) => {
    setCoordinator(e.target.value)
  }

  const handleSummaryOutChnage = (e) => {
    setSummaryOut(e.target.value)
  }

  const handleDetailsChange = (e) => {
    setDetails(e.target.value)
  }

  const handleNotesChange = (e) => {
    setNotes(e.target.value)
  }

  const handleDateChnage = (e) => {
    setDate(e.target.value)
  }

  const generateTenDigitNumber = () => {
    const min = 1000000000;
    const max = 9999999999;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(number)
    return number.toString()
  }

  const addIntakeRecord = () => {
    let data = {
        "Intake_ID": generateTenDigitNumber(),
        "Name": "ClientNameHere",
        "Prefix": "PrefixHere",
        "Insurance": "InsuranceHere",
        "Source": "SourceHere",
        "Coordinator": "CoordinatorHere",
        "Summary_Out": "SummaryOutHere",
        "Details": "DetailsHere",
        "Notes": "NotesHere",
        "Date": "03/05/2024"
    }
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://intellasurebackend-docker.onrender.com/update_intake_table',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    }; 
    axios.request(config)
      .then((response) => {
        console.log("successful request: ", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("failed request: ", JSON.stringify(error))
        console.log(error);
      });
  }
  
  return (
    <div className={`intake-container-${theme}`}>
      <div className='header'>
        <p className={`page-title text-${theme}`}>Add New Intake Record</p>
        <FontAwesomeIcon onClick={() => {toggleShowAddIntakeRecord()}} icon={faX} height={24} width={24} color='#e94f4e' />
      </div>
      <div>
        <div className='row'>
          <p className={`text-${theme}`} title='figure out how to integrate'>Client</p>
          <input 
            className={`input-${theme}`}
            placeholder='client name...'
            value={client}
            onChange={(text) => {handleClientNammeChnage(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Prefix</p>
          <input 
            className={`input-${theme}`}
            placeholder='prefix...'
            value={prefix}
            onChange={(text) => {handlePrefixChange(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Insurance</p>
          <input 
            className={`input-${theme}`}
            placeholder='insurance name...'
            value={insurance}
            onChange={(text) => {handleInsuranceChnage(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Source</p>
          <input 
            className={`input-${theme}`}
            placeholder='source...'
            value={source}
            onChange={(text) => {handleSourceChnage(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Coordinator</p>
          <input 
            className={`input-${theme}`}
            placeholder='coordinator name...'
            value={coordinator}
            onChange={(text) => {handleCoordinatorChnage(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Summary Out</p>
          <input 
            className={`input-${theme}`}
            placeholder='summary out...'
            value={summaryOut}
            onChange={(text) => {handleSummaryOutChnage(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Details</p>
          <input 
            className={`input-${theme}`}
            placeholder='details...'
            value={details}
            onChange={(text) => {handleDetailsChange(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Notes</p>
          <input 
            className={`input-${theme}`}
            placeholder='notes...'
            value={notes}
            onChange={(text) => {handleNotesChange(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Date</p>
          <input
            className={`input-${theme}`} 
            placeholder='date...'
            value={date}
            onChange={(text) => {handleDateChnage(text)}}
          />
        </div>
      </div>
      <div onClick={() => {addIntakeRecord()}} className='button-container'>
        <p className='submit-button'>
          Submit Record
        </p>
      </div>
    </div>
  )
}

export default AddIntakeRecord
