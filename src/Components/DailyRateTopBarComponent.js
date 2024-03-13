import React, { useState } from 'react'
import '../Css/Content.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const DailyRateTopBarComponent = (props) => {
  const {setSearchTerm, setActiveSearch, activeSearch, searchTerm, updateSearch} = props

  const { theme } = useTheme()
  const { tableFilter, toggleTableFilter } = useApp()

  const [term, setTerm] = useState('')

  const updateSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(term)
    setActiveSearch(true)
    updateSearch(term)
  }

  const updateSearchTermClick = () => {
    setSearchTerm(term)
    setActiveSearch(true)
    updateSearch(term)
  }

  const clearActiveSearch = () => {
    setTerm('')
    setSearchTerm('')
    setActiveSearch(false)
    updateSearch('')
  }

  return (
    <div className={`top-bar-${theme}`}>
      <form onSubmit={updateSearchTerm} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faSearch} className='search-icon'/>
        <input
          placeholder='Search Prefix...'
          className={`search-input-${theme}`}
          value={term.toUpperCase()}
          style={{width: '100%'}}
          onChange={(e) => {setTerm(e.target.value)}}
        />
      </form>
      {
        activeSearch
          ? <p onClick={() => {clearActiveSearch()}} style={{marginLeft: '8px', color: '#0b8ec4'}}>X</p>
          : <p onClick={() => {updateSearchTermClick()}} style={{marginLeft: '8px', color: '#0b8ec4'}}>Search</p>
      }
    </div>
    
  )
}

export default DailyRateTopBarComponent
