import React, { useState } from 'react'
import InputComponent from '../../Components/InputComponent'
import { confirmSignIn, confirmSignUp, resendSignUpCode } from 'aws-amplify/auth'

const ConfirmEmailScreen = (props) => {
  const {username, handleAuthView} = props

  const [confirmationCode, setConfirmationCode] = useState('')

  const handleConfirmationCode = (val) => {
    setConfirmationCode(val.target.value)
  }

  const confirmEmailCode = () => {
    confirmSignUp({
        username: username,
        confirmationCode: confirmationCode
    })
    .then(response => {
      handleAuthView('login');
    })
    .catch(error => {
        console.log('Error confirming sign up', error);
    });
  };

  const resetConfirmEmail = () => {
    resendSignUpCode({
      username: username
    })
    .then(response => {
    })
    .catch(error => {
        console.log('Error confirming sign up', error);
    });
  }

  return (
    <div style={styles.appContainer}>
      <div style={styles.formContainer}>
        <h1>Confirm Email</h1>
        <InputComponent
          value={confirmationCode}
          handleFunction={handleConfirmationCode}
          placeHolder={'confirmation code...'}
          type='text'
          capitalize={'none'}
          icon={'number'}
          split={'full'}
        />
        <div style={styles.buttonContainer}>
          <div onClick={() => {confirmEmailCode()}} style={styles.buttonContainerSingle}>
            <p style={styles.buttonRight}>Confirm Email</p>
          </div>
        </div>
        <div onClick={() => {resetConfirmEmail()}}>
          <p style={styles.resetButton}>Resend Confirmation Email</p>
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
    padding: '18px',
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
    marginBottom: 0
  },
  buttonLeft: {
    marginRight: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#0b8ec4',
    borderRadius: '10px',
    color: 'white',
    display: 'flex',
    flexDiection: 'row',
    justifyContent: 'center',
    marginBottom: 0
  },
  buttonRight: {
    paddingTop: '12px',
    paddingBottom: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#0b8ec4',
    borderRadius: '10px',
    color: 'white',
    display: 'flex',
    flexDiection: 'row',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  resetButton: {
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    flexDiection: 'row',
    justifyContent: 'center',
    fontSize: '14px',
    color: '#0b8ec4',
    cursor: 'pointer'
  }
}

export default ConfirmEmailScreen
