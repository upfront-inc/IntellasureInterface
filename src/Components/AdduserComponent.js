import { faLightbulb, faMoon, faSun, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../Css/Intake.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import axios from 'axios'
import { signUp } from 'aws-amplify/auth'
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-west-1', 
  accessKeyId: 'AKIAX7WNCHP6BNWPDWOT', 
  secretAccessKey: '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' 
});

const AdduserComponent = () => {
  const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

  const { theme } = useTheme();
  const { toggleShowUserCreate } = useApp()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [tempPassword, setTempPassword] = useState('')
  const [privileges, setPrivileges] = useState('member')
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

  const signUpUser = () => {

    const params = {
      UserPoolId: 'us-west-1_1prKqbiSI', 
      Username: email, 
      TemporaryPassword: '1SunnyDay!',
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        },
        {
          Name: 'given_name',
          Value: firstName,
        },
        {
          Name: 'family_name',
          Value: lastName,
        },
        {
          Name: 'nickname',
          Value: firstName,
        },
        {
          Name: 'name',
          Value: `${firstName} ${lastName}`,
        },
      ],
    };
    
    cognitoIdentityServiceProvider.adminCreateUser(params, (err, data) => {
      if (err) {
        console.log(err, err.stack); // an error occurred
      } else {
        console.log('admin signup object: ', JSON.stringify(data)); 
        createProfile(data.User.Username)
        // Now you can handle the response, such as storing user details in your database
      }
    });
  }

  const createProfile = (userId) => {
    let data = {
      "first_name": firstName,
      "last_name": lastName,
      "name": `${firstName} ${lastName}`,
      "email": email,
      "status": 'active',
      "priviledges": privileges,
      "company": Company,
      "user_id": userId
    };

    console.log(`user data creation object: ${data}`)

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `https://intellasurebackend-docker.onrender.com/api/users/${userId}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
      .then((response) => {
        console.log("successful request: ", JSON.stringify(response.data));
        // handleAuthView('confirm')
        toggleShowUserCreate()
      })
      .catch((error) => {
        console.log("failed request: ", JSON.stringify(error))
        console.log(error);
      });
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
      <div onClick={() => {signUpUser()}} className='button-container'>
        <p className='submit-button'>
          Create User
        </p>
      </div>
    </div>
  )
}

export default AdduserComponent
