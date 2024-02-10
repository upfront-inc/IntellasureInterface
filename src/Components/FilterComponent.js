import React from 'react'
import '../Css/Content.css'
import '../Css/Filter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faX } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../Contexts/ThemeContext';
import { useApp } from '../Contexts/AppContext';
import { useSidebar } from '../Contexts/SidebarContext';

const FilterComponent = () => {

  const { theme } = useTheme()
  const { sidebarPosition } = useSidebar()
  const { toggleTableFilter,
    filterFacility, toggleFilterFacility,
    filterColumns, toggleFilterColumns  } = useApp()

  const displayFilterFacility = () => {
    return(
      <div className={`facilities-filter-container-${sidebarPosition}`}>
        <div>
          <p>All Facilities</p>
        </div>
        <div>
          <p>Axis</p>
        </div>
        <div>
          <p>Beachside</p>
        </div>
        <div>
          <p>Affinity</p>
        </div>
      </div>
    )
  }

  const displayFilterColumns = () => {
    return(
      <div>
        <p>bye</p>
      </div>
    )
  }

  return (
    <div className={`filter-bar-${theme}`}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <p>Filters: </p>
        <div onClick={() => {toggleFilterFacility()}} className={`filter-container-${theme}`}>
          <p>Facilities</p>
          <FontAwesomeIcon className='filter-icon' icon={faChevronDown} />
        </div>
        {
          filterFacility
            ? displayFilterFacility()
            : null
        }
        <div onClick={() => {toggleFilterColumns()}} className={`filter-container-${theme}`}>
          <p>Columns</p>
          <FontAwesomeIcon className='filter-icon' icon={faChevronDown} />
        </div>
        {
          filterColumns
            ? displayFilterColumns()
            : null
        }
      </div>
      <div onClick={() => {toggleTableFilter()}}>
        <FontAwesomeIcon icon={faX} className='search-icon'/>
      </div>
    </div>
  )
}

export default FilterComponent
