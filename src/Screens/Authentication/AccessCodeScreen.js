import React, { useState } from 'react'
import InputComponent from '../../Components/InputComponent'

const AccessCodeScreen = (props) => {
  const {username, handleAuthView} = props

  const [accessCode, setAccessCode] = useState('')

  const handleAccessCode = (e) => {
    setAccessCode(e.target.value)
  }

  const checkAccessCode = () => {
    if(accessCode === 'PHG620'){
      handleAuthView('signup')
    } else {
      handleAuthView('login')
    }
  }

  return (
    <div style={styles.appContainer}>
      <div style={styles.formContainer}>
        <h1>Access Code</h1>
        <InputComponent
          value={accessCode}
          handleFunction={handleAccessCode}
          placeHolder={'access code...'}
          type='text'
          capitalize={'none'}
          icon={'number'}
          split={'full'}
        />
        <div style={styles.buttonContainer}>
          <div onClick={() => {checkAccessCode()}} style={styles.buttonContainerSingle}>
            <p style={styles.buttonRight}>Submit Code</p>
          </div>
        </div>
        <div onClick={() => {handleAuthView('login')}} style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <p>Go Back</p>
        </div>
      </div>
    </div>
  )

}

const styles = {
  appContainer: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '350px',
    padding: '22px',
    backgroundColor: 'rgba(255, 255, 255, .9)',
    borderRadius: '18px'
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  forgotContainer: {
    lineHeight: 0,
    marginTop: '4px',
    width: '100%',
    display: 'flex',
    flexDiection: 'row',
    justifyContent: 'flex-end'
  },
  forgotLink: {
    color: 'blue'
  },
  buttonContainerSingle: {
    width: '100%',
  },
  buttonLeft: {
    marginRight: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '18px',
    backgroundColor: '#0b8ec4',
    borderRadius: '10px',
    color: 'white',
    display: 'flex',
    flexDiection: 'row',
    justifyContent: 'center',
  },
  buttonRight: {
    marginLeft: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '18px',
    backgroundColor: '#0b8ec4',
    borderRadius: '10px',
    color: 'white',
    display: 'flex',
    flexDiection: 'row',
    justifyContent: 'center',
  },
  validationMessage: {
    fontSize: '14px',
    color: 'red',
    fontWeight: 'bold'
  },
}

export default AccessCodeScreen
