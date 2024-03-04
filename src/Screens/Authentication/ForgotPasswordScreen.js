import React, { useState } from 'react'
import InputComponent from '../../Components/InputComponent'
import { confirmResetPassword, confirmSignIn, confirmSignUp, resetPassword } from 'aws-amplify/auth'

const ForgotPasswordScreen = (props) => {
  const {username, handleAuthView} = props

  const [currentView, setCurrentView] = useState('reset')
  const [email, setEmail] = useState('')
  
  const [confirmationCode, setConfirmationCode] = useState('')
  const [password, setPassword] = useState('')
  const [verify, setVerify] = useState('')

  const [validPassword, setValidPassword] = useState(false)
  const [matchingVerify, setMatchingVerify] = useState(false)

  const handleCOnfirmationCodeChange = (e) => {
    setConfirmationCode(e.target.value)
  }

  const handlePasswordChange = (e) => {
    const isValidLength = e.target.value.length >= 8;
    const hasUpperCase = /[A-Z]/.test(e.target.value);
    const hasNumber = /[0-9]/.test(e.target.value);
    if(isValidLength && hasUpperCase && hasNumber){
      setValidPassword(true)
    } else {
      setValidPassword(false)
    }
    if(e.target.value === verify){
      setMatchingVerify(true)
    } else {
      setMatchingVerify(false)
    }
    setPassword(e.target.value)
  }

  const handleVerifyChange = (e) => {
    if(e.target.value === password){
      setMatchingVerify(true)
    } else {
      setMatchingVerify(false)
    }
    setVerify(e.target.value)
  }

  const handleEmailChange = (val) => {
    setEmail(val.target.value)
  }

  const resetUserPassword = () => {
    resetPassword({username: email})
      .then(response => {
        setCurrentView('confirm')
      })
      .catch(error => {
        console.log(error)
      })
  }

  const confirmPasswordReset = () => {
    if(validPassword && matchingVerify){
      confirmResetPassword({ username: email, confirmationCode, newPassword: password })
        .then(response => {
          handleAuthView('login')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <div style={styles.appContainer}>
      {
        currentView === 'reset'
          ? <div style={styles.formContainer}>
              <h1>Forgot Pasword</h1>
              <InputComponent
                value={email}
                handleFunction={handleEmailChange}
                placeHolder={'confirm email...'}
                type='text'
                capitalize={'none'}
                icon={'envelope'}
                split={'full'}
              />
              <div style={styles.buttonContainer}>
                <div onClick={() => {resetUserPassword()}} style={styles.buttonContainerSingle}>
                  <p style={styles.buttonRight}>Confirm Email</p>
                </div>
              </div>
              <div onClick={() => {handleAuthView('login')}} style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <p>Go Back</p>
              </div>
            </div>
          : <div style={styles.formContainer}>
              <h1>New Password</h1>
              <InputComponent
                value={confirmationCode}
                handleFunction={handleCOnfirmationCodeChange}
                placeHolder={'confirmation code...'}
                type='text'
                capitalize={'none'}
                icon={'number'}
                split={'full'}
              />
              <InputComponent
                value={password}
                handleFunction={handlePasswordChange}
                placeHolder={'password...'}
                type='password'
                capitalize={'none'}
                icon={'lock'}
                split={'full'}
              />
              {
                validPassword
                  ? null
                  : <p style={styles.validationMessage}>Password: A_Z, a_z, 0-9, 1 Special, 8+ Length</p>
              }
              <InputComponent
                value={verify}
                handleFunction={handleVerifyChange}
                placeHolder={'verify password...'}
                type='password'
                capitalize={'none'}
                icon={'lock'}
                split={'full'}
              />
              {
                matchingVerify
                  ? null
                  : <p style={styles.validationMessage}>Verify: Password and Verify don't match</p>
              }
              <div style={styles.buttonContainer}>
                <div onClick={() => {confirmPasswordReset()}} style={styles.buttonContainerSingle}>
                  <p style={styles.buttonRight}>Set New Password</p>
                </div>
              </div>
            </div>
      }
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

export default ForgotPasswordScreen
