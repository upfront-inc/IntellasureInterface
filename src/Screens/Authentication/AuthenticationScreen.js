import React, { useState } from 'react'
import { useUser } from '../../Contexts/UserContext'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import ConfirmEmailScreen from './ConfirmEmailScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import Background from '../../Assets/mountain.jpg'
import Lake from '../../Assets/lake.jpg'
import BackgroundImage from '../../Assets/background.png'
import AccessCodeScreen from './AccessCodeScreen'
import PhoneVerificationScreen from './PhoneVerificationScreen'

const AuthenticationScreen = () => {

  const { currentUser } = useUser()

  const [authView, setAuthView] = useState('login')

  const [username, setUsername] = useState('')

  const handleAuthView = (view) => {
    setAuthView(view)
  }

  return (
    <div>
      <div style={styles.backgroundContainer}>
        <img style={styles.background} src={BackgroundImage} alt="Background Image" />
      </div>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        {
          authView === 'login'
            ? <LoginScreen handleAuthView={handleAuthView}/>
            : authView === 'signup'
                ? <SignupScreen handleAuthView={handleAuthView} setUsername={setUsername}/>
                : authView === 'mfa'
                    ? <PhoneVerificationScreen username={username} handleAuthView={handleAuthView}/>
                    : authView === 'confirm'
                        ? <ConfirmEmailScreen handleAuthView={handleAuthView} username={username}/>
                        : authView === 'forgot'
                            ? <ForgotPasswordScreen handleAuthView={handleAuthView} />
                            : authView === 'access'
                                ? <AccessCodeScreen handleAuthView={handleAuthView}/>
                                : null
        }
      </div>
    </div>
  )
}

const styles = {
  backgroundContainer: {
    zIndex: -1
  },
  background: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 0
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, .2)',
    zIndex: 1
  },
  content: {
    height: '100vh',
    width: '100vw',
    position: 'relative', 
    zIndex: 2, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default AuthenticationScreen