import React, { useState } from 'react'
import '../Css/Content.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const DailyRateTopBarComponent = (props) => {
  const {setSearchTerm, setActiveSearch, activeSearch} = props

  const { theme } = useTheme()
  const { tableFilter, toggleTableFilter } = useApp()

  const [term, setTerm] = useState('')

  const updateSearchTerm = () => {
    setActiveSearch(true)
    setSearchTerm(term)
  }

  const updateActiveSearch = () => {
    setSearchTerm('')
    setActiveSearch(false)
  }

  return (
    <div className={`top-bar-${theme}`}>
      <FontAwesomeIcon icon={faSearch} className='search-icon'/>
      <input 
        value={term}
        onChange={(e) => {setTerm((e.target.value).toUpperCase())}}
        placeholder='Search Prefix...' 
        className={`search-input-${theme}`}/>
        {
          activeSearch
            ? <p onClick={() => {updateActiveSearch()}} style={{marginLeft: '8px', color: '#0b8ec4'}}>Clear</p>
            : <p onClick={() => {updateSearchTerm()}} style={{marginLeft: '8px', color: '#0b8ec4'}}>Search</p>
        }
    </div>
    
  )
}

export default DailyRateTopBarComponent
