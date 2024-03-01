import React, { useState } from 'react'
import InputComponent from '../../Components/InputComponent'
import { confirmSignIn, confirmSignUp } from 'aws-amplify/auth'

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
    backgroundColor: '#009ea1',
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
    backgroundColor: '#009ea1',
    borderRadius: '10px',
    color: 'white',
    display: 'flex',
    flexDiection: 'row',
    justifyContent: 'center',
  },
}

export default ConfirmEmailScreen
