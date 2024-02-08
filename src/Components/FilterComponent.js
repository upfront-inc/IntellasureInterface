import React from 'react'
import '../Css/Content.css'
import '../Css/Filter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faX } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../Contexts/ThemeContext';
import { useApp } from '../Contexts/AppContext';

const FilterComponent = () => {

  const { theme } = useTheme()
  const { toggleTableFilter } = useApp()

  return (
    <div className={`filter-bar-${theme}`}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <p>Filters: </p>
        <div className={`filter-container-${theme}`}>
          <p>Facilities</p>
          <FontAwesomeIcon className='filter-icon' icon={faChevronDown} />
        </div>
        <div className={`filter-container-${theme}`}>
          <p>Columns</p>
          <FontAwesomeIcon className='filter-icon' icon={faChevronDown} />
        </div>
      </div>
      <div onClick={() => {toggleTableFilter()}}>
        <FontAwesomeIcon icon={faX} className='search-icon'/>
      </div>
    </div>
  )
}

export default FilterComponent
