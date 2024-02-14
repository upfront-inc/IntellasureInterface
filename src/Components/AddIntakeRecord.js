import { faLightbulb, faMoon, faSun, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../Css/Intake.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'

const AddIntakeRecord = () => {

  const { theme } = useTheme();
  const { toggleShowAddIntakeRecord } = useApp()
  
  return (
    <div className={`intake-container-${theme}`}>
      <div className='header'>
        <span>Add New Intake Record</span>
        <FontAwesomeIcon onClick={() => {toggleShowAddIntakeRecord()}} icon={faX} height={24} width={24} color='#e94f4e' />
      </div>
    </div>
  )
}

export default AddIntakeRecord
