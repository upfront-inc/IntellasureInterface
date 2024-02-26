import React from 'react'
import '../Css/userinput.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faEnvelope, faList, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

const InputComponent = (props) => {
  const {value, handleFunction, placeHolder, icon, type, capitalize} = props

  const iconMapping = {
    list: faList,
    user: faUser,
    envelope: faEnvelope,
    lock: faLock,
    building: faBuilding
  };

  const iconObject = iconMapping[icon];

  return (
    <div className='input-container'>
      <div className='user-input-container'>
        {iconObject && <FontAwesomeIcon icon={iconObject} className="custom-icon-size" />}
        <input 
          className='input'
          type={type} 
          placeholder={placeHolder}
          value={value}
          onChange={(val) => {handleFunction(val)}} 
          autoCapitalize={capitalize}
        />
      </div>
    </div>
  )
}

export default InputComponent