import React, { useState } from 'react'
import InputComponent from '../../Components/InputComponent'
import { signIn, signOut } from 'aws-amplify/auth'
import { useUser } from '../../Contexts/UserContext'

const LoginScreen = (props) => {
  const {handleAuthView} = props

  const { grabCurrentUser } = useUser()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [validLogin, setValidLogin] = useState(true)


  const handleUsernameChange = (val) => {
    setUsername(val.target.value)
  }

  const handlePasswordChange = (val) => {
    setPassword(val.target.value)
  }

  const signInUser = () => {
    signIn({username, password})
      .then((response) => {
        grabCurrentUser()
      })
      .catch((error) => {
        setValidLogin(false)
      })
  }

  return (
    <div style={styles.appContainer}>
      <div style={styles.formContainer}>
        <h1>Login</h1>
        {
          validLogin
            ? null 
            : <p style={styles.validationMessage}>Username / Password don't match our recrds</p>
        }
        <InputComponent
          value={username}
          handleFunction={handleUsernameChange}
          placeHolder={'username'}
          type='text'
          capitalize={'none'}
          icon={'user'}
          split={'full'}
        />
        <InputComponent
          value={password}
          handleFunction={handlePasswordChange}
          placeHolder={'password'}
          type='password'
          capitalize={'none'}
          icon={'lock'}
          split={'full'}
        />
        <div onClick={() => {handleAuthView('forgot')}} style={styles.forgotContainer}>
          <p style={styles.forgotLink}>Forgot Password?</p>
        </div>
        <div style={styles.buttonContainer}>
          <div onClick={() => {signInUser()}} style={styles.buttonContainerSingle}>
            <p style={styles.buttonLeft}>Login</p>
          </div>
          <div onClick={() => {handleAuthView('signup')}} style={styles.buttonContainerSingle}>
            <p style={styles.buttonRight}>Signup</p>
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
  validationMessage: {
    fontSize: '14px',
    color: 'red',
    fontWeight: 'bold'
  },
}

export default LoginScreen
