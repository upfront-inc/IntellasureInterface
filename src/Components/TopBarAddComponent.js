import React from 'react'
import '../Css/Content.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TopBarAddComponent = () => {

  const { theme } = useTheme()
  const { toggleShowAddIntakeRecord } = useApp()

  return (
    <div className={`top-bar-${theme}`}>
      <FontAwesomeIcon icon={faSearch} className='search-icon'/>
      <input placeholder='Search Prefix...' className={`search-input-${theme}`}/>
      <div className={`spliter-${theme}`}></div>
      <div onClick={() => {toggleShowAddIntakeRecord()}}>
        <p className='filter-text'>Add Record</p>
      </div>
    </div>
  )
}

export default TopBarAddComponent
