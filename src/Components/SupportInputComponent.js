import React from 'react'
import '../Css/Input.css'

const SupportInputComponent = (props) => {

  const {label, icon, placeholder, value, changeFunction} = props

  return (
    <div className='input-container'>
      <p className='label'>{label}</p>
      <input 
          className='input'
          type="text" 
          placeholder={placeholder}
          value={value}
          onChange={() => {changeFunction()}}
      />
    </div>
  )
}

export default SupportInputComponent
