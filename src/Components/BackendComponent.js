import { faLightbulb, faMoon, faSun, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../Css/Intake.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'

const BackendComponent = () => {

  const { theme } = useTheme();
  const { toggleShowAddIntakeRecord } = useApp()

  const [dailyRateFile, setDailyRateFile] = useState('')

  const handleClientNammeChnage = (e) => {
    setClient(e.target.value)
  }

  return (
    <div className={`intake-container-${theme}`}>
      <div className='header'>
        <p className={`page-title text-${theme}`}>BackendActivity</p>
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
      </div>
      <div className='button-container'>
        <p className='submit-button'>
          Update Database
        </p>
      </div>
    </div>
  )
}

export default BackendComponent
