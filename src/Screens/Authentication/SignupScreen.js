import React, { useState } from 'react'
import InputComponent from '../../Components/InputComponent'
import { signUp } from 'aws-amplify/auth'
import axios from 'axios'

const SignupScreen = (props) => {
  const {handleAuthView, setUsername} = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verify, setVerify] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [companyId, setCompanyId] = useState('PHG')

  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [matchingVerify, setMatchingVerify] = useState(false)

  const handleEmailChange = (val) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailCheck = emailRegex.test(val.target.value);
    emailCheck
      ? setValidEmail(true)
      : setValidEmail(false)
    setEmail(val.target.value)
  }

  const handlePasswordChange = (val) => {
    const isValidLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    if(isValidLength && hasUpperCase && hasNumber){
      setValidPassword(true)
    } else {
      setValidPassword(false)
    }
    if(val.target.value === verify){
      setMatchingVerify(true)
    } else {
      setMatchingVerify(false)
    }
    setPassword(val.target.value)
  }

  const handleVerifyChange = (val) => {
    if(val.target.value === password){
      setMatchingVerify(true)
    } else {
      setMatchingVerify(false)
    }
    setVerify(val.target.value)
  }

  const handleFirstNameChange = (val) => {
    setFirstName(val.target.value)
  }

  const handleLastNameChange = (val) => {
    setLastName(val.target.value)
  }

  const handleCompanyIdChange = (val) => {
    setCompanyId(val.target.value)
  }

  const checkValidations = () => {
    if(validEmail && validPassword && matchingVerify){
      signUpUser()
    } 
  }

  const signUpUser = () => {

    setUsername(email)

    const signupData = {
      username: email,
      email: email,
      password,
      first_name: firstName,
      last_name: lastName,
      full_name: `${firstName} ${lastName}`,
      options: {
        userAttributes: {
          email: email,
          given_name: firstName,
          family_name: lastName,
          nickname: firstName,
          name: `${firstName} ${lastName}`
        }
      }
    }
    
    signUp(signupData)
      .then((currentUser) => {
        console.log(`current user: ${currentUser.data}`)
        createProfile(currentUser.userId)
      })
      .catch((err) => {
        console.log('User is not logged in:', err);
      });
  }

  const createProfile = (userId) => {
    const baseUrl = `https://intellasurebackend.onrender.com/api/users/${userId}`
    const userInfo = {
      "status": "success",
      "method": "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      "data":
        {
          "first_name": firstName,
          "last_name": lastName,
          "name": `${firstName} ${lastName}`,
          "email": email,
          "status": "active",
          "priviledges": "member",
          "company": "phg",
          "user_id": userId
        }
    }
    axios.request(baseUrl, userInfo)
      .then((response) => {
        console.log('new user created with id: ', userId)
        handleAuthView('confirm')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div style={styles.appContainer}>
      <div style={styles.formContainer}>
        <h1>Signup</h1>
        <p style={styles.company}>(Premier Health Group LLC)</p>
        <div style={styles.splitInputcontainer}>
          <div style={styles.splitInput}>
            <InputComponent
              value={firstName}
              handleFunction={handleFirstNameChange}
              placeHolder={'first name...'}
              type='text'
              capitalize={'none'}
              icon={'user'}
              split={'split'}
            />
          </div>
          <div style={styles.splitInput}>
            <InputComponent
              value={lastName}
              handleFunction={handleLastNameChange}
              placeHolder={'last name...'}
              type='text'
              capitalize={'none'}
              icon={'user'}
              split={'split'}
            />
          </div>
        </div>
        <InputComponent
          value={email}
          handleFunction={handleEmailChange}
          placeHolder={'Email'}
          type='text'
          capitalize={'none'}
          icon={'user'}
          split={'full'}
        />
        {
          validEmail
            ? null
            : <p style={styles.validationMessage}>Email: Enter valid email</p>
        }
        <InputComponent
          value={password}
          handleFunction={handlePasswordChange}
          placeHolder={'password'}
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
          placeHolder={'verify password'}
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
          <div onClick={() => {checkValidations()}} style={styles.buttonContainerSingle}>
            <p style={styles.buttonLeft}>signup</p>
          </div>
          <div onClick={() => {handleAuthView('login')}} style={styles.buttonContainerSingle}>
            <p style={styles.buttonRight}>login</p>
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
    backgroundColor: '#0b8ec4',
    borderRadius: '10px',
    color: 'white',
    display: 'flex',
    flexDiection: 'row',
    justifyContent: 'center',
    cursor: 'pointer'
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
    cursor: 'pointer'
  },
  splitInputcontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  splitInput: {
    width: '49%'
  },
  validationMessage: {
    fontSize: '14px',
    color: 'red',
    fontWeight: 'bold'
  },
  company: {
    lineHeight: 0
  }
}

export default SignupScreen
