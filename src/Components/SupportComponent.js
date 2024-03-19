import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import '../Css/Support.css'
import SupportInputComponent from './SupportInputComponent'
import axios from 'axios'
// import HelpInputFieldComponent from './HelpInputFieldComponent'

const SupportComponent = () => {

  const { theme } = useTheme()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [ticketRef, setTicketRef] = useState('')
  const [thankYou, setThankYou] = useState(false)

  const handleNameChange = (e) => {
      setName(e.target.value)
  }

  const handleEmailChange = (e) => {
      setEmail(e.target.value)
  }

  const handleSubjectChange = (e) => {
      setSubject(e.target.value)
  }

  const handleMessageChange = (e) => {
      setMessage(e.target.value)
  }

  function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }

  const addHelpDesk = () => {
    let data = {
      "email": email,
      "message": message,
      "name": name,
      "status": true,
      "subject": subject,
      "ticket_id": generateRandomString()
    }
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://intellasurebackend-docker.onrender.com/support/submit_ticket',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setEmail('')
      setMessage('')
      setName('')
      setSubject('')
      alert('Your ticket request has been sent to our team. We will try to fix the issue and get back to your regarding this issue.')
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className={`support-panel-${theme}`}>
      <div className='content-panel'>
        <div>
          <h3>Encountered an Issue? Let Us Know!</h3>
        </div>
        <div>
          <p>If you encounter any issues or have any concerns while using our website, please don't hesitate to reach out. Whether it's a technical problem, a user interface query, or any other challenge, we're here to help. We understand that encountering issues can be frustrating, but rest assured, we're here to ensure a smooth and enjoyable experience on our website. Your feedback and reports are invaluable to us, as they not only help us address your concerns but also contribute to making our website better for everyone.</p>
        </div>
        <div className='form-container' style={{marginTop: '24px'}}>
          <div style={styles.inputContainer}>
            <p className='label'>Name</p>
            <input 
              style={styles.input}
              type="text" 
              placeholder="Name..." 
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div style={styles.inputContainer}>
            <p className='label'>Email</p>
            <input 
              style={styles.input}
              type="text" 
              placeholder="Email..." 
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div style={styles.inputContainer}>
            <p className='label'>Subject</p>
            <input 
              style={styles.input}
              type="text" 
              placeholder="Subject..." 
              value={subject}
              onChange={handleSubjectChange}
            />
          </div>
          <div style={styles.inputContainer}>
            <p className='label'>Message</p>
            <textarea 
              style={styles.input}
              type="text" 
              placeholder="Message..." 
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          <div className='' style={{marginTop: '24px'}}>
                <button onClick={() => {addHelpDesk()}} style={styles.button}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  inputContainer: {
    width: '400px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '8px',
    border: '2px solid #0b8ec4',
    borderRadius: '8px',
    marginTop: '8px'
  },
  input: {
    fontSize: '16px',
    marginLeft: '8px',
    flex: 1,
    border: 0,
    borderBottom: '2px solid #0b8ec4'
  },
  button: {
    fontSize: '18px',
    padding: '8px',
    backgroundColor: '#0b8ec4',
    border: 0,
    borderRadius: '8px',
    fontWeight: 'bold',
    color: 'white'
  }
}

export default SupportComponent
