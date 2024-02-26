import React, { useState } from 'react'
import '../Css/auth.css'
import InputComponent from '../Components/InputComponent'

const AuthScreens = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (val) => {
    setUsername(val.target.value)
  }

  const handlePasswordChange = (val) => {
    setPassword(val.target.value)
  }

  return (
    <div className='app-container'>
      <div className='form-container'>
        <h1>Login</h1>
        <InputComponent
          value={username}
          handleFunction={handleUsernameChange}
          placeHolder={'username'}
          type='text'
          capitalize={'none'}
          icon={'user'}
        />
        <InputComponent
          value={password}
          handleFunction={handlePasswordChange}
          placeHolder={'password'}
          type='password'
          capitalize={'none'}
          icon={'lock'}
        />
        <div className='button-container'>
          <div className='button-container-single'>
            <p className='button'>Login</p>
          </div>
          <div className='button-container-single'>
            <p className='button'>Signup</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthScreens
