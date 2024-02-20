import { faLightbulb, faMoon, faSun, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../Css/Intake.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'

const AddIntakeRecord = () => {

  const { theme } = useTheme();
  const { toggleShowAddIntakeRecord } = useApp()

  const [client, setClient] = useState('')
  const [insurance, setInsurance] = useState('')
  const [source, setSource] = useState('')
  const [coordinator, setCoordinator] = useState('')
  const [summaryIn, setSummaryIn] = useState('')
  const [summaryOut, setSummaryOut] = useState('')
  const [date, setDate] = useState('')

  const handleClientNammeChnage = (e) => {
    setClient(e.target.value)
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

  const handleSummaryInChnage = (e) => {
    setSummaryIn(e.target.value)
  }

  const handleSummaryOutChnage = (e) => {
    setSummaryOut(e.target.value)
  }

  const handleDateChnage = (e) => {
    setDate(e.target.value)
  }

  // add the theme to all of the different styles ot make the text white
  
  return (
    <div className={`intake-container-${theme}`}>
      <div className='header'>
        <p className={`page-title text-${theme}`}>Add New Intake Record</p>
        <FontAwesomeIcon onClick={() => {toggleShowAddIntakeRecord()}} icon={faX} height={24} width={24} color='#e94f4e' />
      </div>
      <div>
        <div className='row'>
          <p className={`text-${theme}`}>Client</p>
          <input 
            className={`input-${theme}`}
            placeholder='client name...'
            value={client}
            onChange={(text) => {handleClientNammeChnage(text)}}
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
          <p className={`text-${theme}`}>Summary In</p>
          <input 
            className={`input-${theme}`}
            placeholder='summary in...'
            value={summaryIn}
            onChange={(text) => {handleSummaryInChnage(text)}}
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
          <p className={`text-${theme}`}>Date</p>
          <input
            className={`input-${theme}`} 
            placeholder='date...'
            value={date}
            onChange={(text) => {handleDateChnage(text)}}
          />
        </div>
      </div>
      <div className='button-container'>
        <p className='submit-button'>
          Submit Record
        </p>
      </div>
    </div>
  )
}

export default AddIntakeRecord
