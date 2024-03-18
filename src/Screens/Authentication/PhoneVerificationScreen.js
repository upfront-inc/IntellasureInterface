import React, { useState } from 'react'
import InputComponent from '../../Components/InputComponent'
import { confirmSignIn, confirmSignUp, resendSignUpCode } from 'aws-amplify/auth'
import { useUser } from '../../Contexts/UserContext'

const PhoneVerificationScreen = (props) => {
  const {username, handleAuthView} = props

  const { grabCurrentUser, setCurrentUser } = useUser()

  const [confirmationCode, setConfirmationCode] = useState('')

  const handleConfirmationCode = (val) => {
    setConfirmationCode(val.target.value)
  }

  function handleSignInConfirmation() {
    confirmSignIn({ challengeResponse: confirmationCode })
      .then(() => {
        console.log("Sign-in confirmed successfully.");
        grabCurrentUser()
      })
      .catch((error) => {
        console.log("Error confirming sign-in:", error);
      });
  }

  const resetConfirmEmail = () => {
    console.log(username)
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
        <h1>Confirm SMS Code</h1>
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
          <div onClick={() => {handleSignInConfirmation()}} style={styles.buttonContainerSingle}>
            <p style={styles.buttonRight}>Confirm Code</p>
          </div>
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

export default PhoneVerificationScreen
