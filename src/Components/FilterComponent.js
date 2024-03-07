import React from 'react'
import '../Css/Content.css'
import '../Css/Filter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faX } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../Contexts/ThemeContext';
import { useApp } from '../Contexts/AppContext';
import { useSidebar } from '../Contexts/SidebarContext';
import { useFilter } from '../Contexts/FilterContext';

const FilterComponent = () => {

  const { theme } = useTheme()
  const { sidebarPosition } = useSidebar()
  const { toggleTableFilter,
    filterFacility, toggleFilterFacility,
    filterColumns, toggleFilterColumns,
    filterNetwork, toggleNetworkColumns  } = useApp()
  const {
    columnPrefix, 
    columnInsurance,
    columnNetwork, 
    columnFacility,
    columnResDays, 
    columnResVisits,
    columnDetoxDays, 
    columnDetoxVisits,
    columnTotalCharged, 
    columnTotalPaid,
    columnPayout, 
    columnAdmission,
    columnAdmissionPercent, 
    toggleColumnPrefix,
    toggleColumnInsurance,
    toggleColumnNetworK,
    toggleColumnFacility,
    toggleColumnResDays,
    toggleColumnResVisits,
    toggleColumnDetoxDays,
    toggleColumnDetoxVisits,
    toggleColumnTotalCharged,
    toggleColumnTotalPaid,
    toggleColumnPayout,
    toggleColumnAdmission,
    toggleColumnAdmissionPercent
  } = useFilter()

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
      <div className={`columns-filter-container-${sidebarPosition}`}>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnPrefix} checked={columnPrefix} type='checkbox' />
          <p>Prefix</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnInsurance} checked={columnInsurance} type='checkbox' />
          <p>Insurance</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnNetworK} checked={columnNetwork} type='checkbox' />
          <p>Network</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnFacility} checked={columnFacility} type='checkbox' />
          <p>Facility</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnResDays} checked={columnResDays} type='checkbox' />
          <p>Res. Days</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnResVisits} checked={columnResVisits} type='checkbox' />
          <p>Res. Visits</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnDetoxDays} checked={columnDetoxDays} type='checkbox' />
          <p>Detox Days</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnDetoxVisits} checked={columnDetoxVisits} type='checkbox' />
          <p>Detox Visits</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnTotalCharged} checked={columnTotalCharged} type='checkbox' />
          <p>Total Charged</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnTotalPaid} checked={columnTotalPaid} type='checkbox' />
          <p>Total Paid</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnPayout} checked={columnPayout} type='checkbox' />
          <p>Payout %</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnAdmission} checked={columnAdmission} type='checkbox' />
          <p>Admission</p>
        </div>
        <div className='columns-select-container'>
          <input className='check' onChange={toggleColumnAdmissionPercent} checked={columnAdmissionPercent} type='checkbox' />
          <p>Admission %</p>
        </div>
      </div>
    )
  }

  const displayFilterNetwork = () => {
    return(
      <div className={`network-filter-container-${sidebarPosition}`}>
        <div>
          <p>All Networks</p>
        </div>
        <div>
          <p>In Network</p>
        </div>
        <div>
          <p>Out Network</p>
        </div>
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
        {/* <div onClick={() => {toggleFilterColumns()}} className={`filter-container-${theme}`}>
          <p>Columns</p>
          <FontAwesomeIcon className='filter-icon' icon={faChevronDown} />
        </div>
        {
          filterColumns
            ? displayFilterColumns()
            : null
        }
        <div onClick={() => {toggleNetworkColumns()}} className={`filter-container-${theme}`}>
          <p>Network</p>
          <FontAwesomeIcon className='filter-icon' icon={faChevronDown} />
        </div>
        {
          filterNetwork
            ? displayFilterNetwork()
            : null
        }*/}
      </div>
      <div onClick={() => {toggleTableFilter()}}>
        <FontAwesomeIcon icon={faX} className='search-icon'/>
      </div> 
    </div>
  )
}

export default FilterComponent
