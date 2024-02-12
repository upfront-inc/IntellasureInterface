import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import '../Css/Support.css'
import SupportInputComponent from './SupportInputComponent'
// import HelpInputFieldComponent from './HelpInputFieldComponent'

const SupportComponent = () => {
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

  return (
    <div className='support-panel'>
      <div className='content-panel'>
        <div>
          <h3>Encountered an Issue? Let Us Know!</h3>
        </div>
        <div>
          <p>If you encounter any issues or have any concerns while using our website, please don't hesitate to reach out. Whether it's a technical problem, a user interface query, or any other challenge, we're here to help. We understand that encountering issues can be frustrating, but rest assured, we're here to ensure a smooth and enjoyable experience on our website. Your feedback and reports are invaluable to us, as they not only help us address your concerns but also contribute to making our website better for everyone.</p>
        </div>
        <div className='form-container' style={{marginTop: '24px'}}>
          <div className='input-container'>
            <p className='label'>Name</p>
            <input 
                className='input'
                type="text" 
                placeholder="Name..." 
                value={name}
                onChange={handleNameChange}
            />
          </div>
          <div className='input-container'>
            <p className='label'>Email</p>
            <input 
                className='input'
                type="text" 
                placeholder="Email..." 
                value={email}
                onChange={handleEmailChange}
            />
          </div>
          <div className='input-container'>
            <p className='label'>Subject</p>
            <input 
                className='input'
                type="text" 
                placeholder="Subject..." 
                value={subject}
                onChange={handleSubjectChange}
            />
          </div>
          <div className='input-container'>
            <p className='label'>Message</p>
            <textarea 
                className='input'
                type="text" 
                placeholder="Message..." 
                value={message}
                onChange={handleMessageChange}
            />
          </div>
          <div className='' style={{marginTop: '24px'}}>
                <button className='button'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportComponent
