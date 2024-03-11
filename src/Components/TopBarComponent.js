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

  const handleSearchSubmit = (e) => {
    e.preventDefault() // Prevent the form from causing a page reload
    setActiveSearch(true)
    searchPrefix(tempSearchTerm)
  }

  const handleSearchChange = (e) => {
    setTempSearchTerm(e.target.value.toUpperCase())
  }

  const clearSearch = () => {
    setSearchTerm('')
    setTempSearchTerm('')
    grabRecords()
    setActiveSearch(false)
  }

  const startSearchPrefix = () => {
    setActiveSearch(true)
    searchPrefix(tempSearchTerm)
  }

  return (
    <div className={`top-bar-${theme}`}>
      <form onSubmit={handleSearchSubmit} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faSearch} className='search-icon'/>
        <input
          placeholder='Search Prefix...'
          className={`search-input-${theme}`}
          value={tempSearchTerm}
          style={{width: '100%'}}
          onChange={handleSearchChange}
        />
      </form>
      {
        activeSearch
          ? <button type="button" onClick={clearSearch} style={{ fontSize: '18px', marginLeft: '8px', color: '#0b8ec4', border: 'none', backgroundColor: 'white' }}>Clear</button>
          : <button type="submit" style={{ fontSize: '18px', marginLeft: '8px', color: '#0b8ec4', border: 'none', backgroundColor: 'white' }}>Search</button>
      }
      <div className={`spliter-${theme}`}></div>
      <div onClick={() => {toggleTableFilter()}}>
        <p className='filter-text'>Filter</p>
      </div>
    </div>
  )
}

export default TopBarComponent
