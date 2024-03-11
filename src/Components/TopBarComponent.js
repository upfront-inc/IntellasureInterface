import React, { useState } from 'react'
import '../Css/Content.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TopBarComponent = (props) => {
  const {searchPrefix, grabRecords, searchTerm, setSearchTerm, setActiveSearch, activeSearch} = props

  const { theme } = useTheme()
  const { tableFilter, toggleTableFilter } = useApp()

  const [tempSearchTerm, setTempSearchTerm] = useState('')

  const toggleSearchChange = (e) => {
    setSearchTerm(e)
    setTempSearchTerm(e)
  }

  const clearSearch = () => {
    grabRecords()
    setSearchTerm('')
    setActiveSearch(false)
  }

  const startSearchPrefix = () => {
    setActiveSearch(true)
    searchPrefix(tempSearchTerm)
  }

  return (
    <div className={`top-bar-${theme}`}>
      <FontAwesomeIcon icon={faSearch} className='search-icon'/>
      <input 
        placeholder='Search Prefix...' 
        className={`search-input-${theme}`}
        value={searchTerm}
        onChange={(e) => toggleSearchChange(e.target.value.toUpperCase())}/>
      {
        activeSearch
          ? <p style={{marginLeft: '8px', color: '#0b8ec4'}} onClick={() => {clearSearch()}}>Clear</p>
          : <p style={{marginLeft: '8px', color: '#0b8ec4'}}  onClick={() => {startSearchPrefix()}}>Search</p>
      }
      <div className={`spliter-${theme}`}></div>
      <div onClick={() => {toggleTableFilter()}}>
        <p className='filter-text'>Filter</p>
      </div>
    </div>
  )
}

export default TopBarComponent
