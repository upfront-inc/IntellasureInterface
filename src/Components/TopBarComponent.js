import React from 'react'
import '../Css/Content.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TopBarComponent = () => {

  const { theme } = useTheme()
  const { tableFilter, toggleTableFilter } = useApp()

  return (
    <div className={`top-bar-${theme}`}>
      <FontAwesomeIcon icon={faSearch} className='search-icon'/>
      <input placeholder='Search Prefix...' className={`search-input-${theme}`}/>
      <div className={`spliter-${theme}`}></div>
      <div onClick={() => {toggleTableFilter()}}>
        <p className='filter-text'>Filter</p>
      </div>
    </div>
  )
}

export default TopBarComponent
