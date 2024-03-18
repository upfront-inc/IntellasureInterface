import { faLightbulb, faMoon, faSun, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../Css/Intake.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import axios from 'axios'
import { signUp } from 'aws-amplify/auth'


const AdduserComponent = () => {

  const { theme } = useTheme();
  const { toggleShowUserCreate } = useApp()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [tempPassword, setTempPassword] = useState('')
  const [privileges, setPrivileges] = useState('staff')
  const [status, setStatus] = useState('active')
  const [Company, setCompany] = useState('PHG')

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleTempPassword = (e) => {
    setTempPassword(e.target.value)
  }

  const handlePrivileges = (e) => {
    setPrivileges(e.target.value)
  }

  const handleStatus = (e) => {
    setStatus(e.target.value)
  }

  const handleCompany = (e) => {
    setCompany(e.target.value)
  }

  
  return (
    <div className={`intake-container-${theme}`}>
      <div className='header'>
        <p className={`page-title text-${theme}`}>Add New User</p>
        <FontAwesomeIcon onClick={() => {toggleShowUserCreate()}} icon={faX} height={24} width={24} color='#e94f4e' />
      </div>
      <div>
        <div className='row'>
          <p className={`text-${theme}`} >First Name</p>
          <input 
            className={`input-${theme}`}
            placeholder='client name...'
            value={firstName}
            onChange={(text) => {handleFirstName(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Last Name</p>
          <input 
            className={`input-${theme}`}
            placeholder='prefix...'
            value={lastName}
            onChange={(text) => {handleLastName(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Email</p>
          <input 
            className={`input-${theme}`}
            placeholder='insurance name...'
            value={email}
            onChange={(text) => {handleEmail(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Privileges</p>
          <input 
            className={`input-${theme}`}
            placeholder='coordinator name...'
            value={privileges}
            onChange={(text) => {handlePrivileges(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Status</p>
          <input 
            className={`input-${theme}`}
            placeholder='summary out...'
            value={status}
            onChange={(text) => {handleStatus(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Company</p>
          <input 
            className={`input-${theme}`}
            placeholder='details...'
            value={Company}
            onChange={(text) => {handleCompany(text)}}
          />
        </div>
      </div>
    </div>
  )
}

export default AdduserComponent
