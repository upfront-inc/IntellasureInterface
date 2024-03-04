import React from 'react'
import '../Css/userinput.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faEnvelope, faHashtag, faList, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

const InputComponent = (props) => {
  const {value, handleFunction, placeHolder, icon, type, capitalize, split} = props

  const iconMapping = {
    list: faList,
    user: faUser,
    envelope: faEnvelope,
    lock: faLock,
    building: faBuilding,
    number: faHashtag
  };

  const iconObject = iconMapping[icon];

  return (
    <div style={styles.inputContainer}>
      <div style={styles.userInputContainer}>
        {iconObject && <FontAwesomeIcon icon={iconObject} style={styles.customIconSize} />}
        {
          split === 'full'
            ? <input 
                style={styles.input}
                type={type} 
                placeholder={placeHolder}
                value={value}
                onChange={(val) => {handleFunction(val)}} 
                autoCapitalize={capitalize}
              />
            : <input 
                style={styles.inputSplit}
                type={type} 
                placeholder={placeHolder}
                value={value}
                onChange={(val) => {handleFunction(val)}} 
                autoCapitalize={capitalize}
              />
        }
      </div>
    </div>
  )
}

const styles = {
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '14px',
    borderRadius: '10px',
    border: '2px solid #0b8ec4',
    marginTop: '14px'
  },
  userInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  customIconSize: {
    height: '18px',
    width: '18px',
    paddingBottom: '2px',
    color: '#0b8ec4'
  },
  input: {
    margin: '0px',
    width: '280px',
    border: 0, 
    fontSize: '18px',
    paddingTop: '4px',
    borderBottom: '2px solid #0b8ec4',
    backgroundColor: 'rgb(225, 225, 225, .1)',
    marginLeft: '8px'
  },
  inputSplit: {
    margin: '0px',
    width: '110px',
    border: 0, 
    fontSize: '18px',
    paddingTop: '4px',
    borderBottom: '2px solid #0b8ec4',
    backgroundColor: 'rgb(225, 225, 225, .1)',
    marginLeft: '8px'
  }
}

export default InputComponent