import React, { useState } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import TopBarComponent from '../Components/TopBarComponent';
import FilterComponent from '../Components/FilterComponent';
import FlaggedTableComponent from '../Components/FlaggedTableComponent';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SingleUserDetailsComponent from '../Components/SingleUserDetailsComponent';


const FlaggedScreen = () => {

  const { theme } = useTheme()
  const { tableFilter, toggleTableFilter } = useApp()

  const [viewingTab, setViewingTab] = useState('flagged')

  return (
    <div className={`content-container-${theme}`}>
      {
        viewingTab === 'flagged'
          ? <TopBarComponent />
          : <div onClick={() => {setViewingTab('flagged')}} className={`top-bar-${theme}`}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} className='search-icon'/>
            </div>
      }
      {
        tableFilter 
          ? <FilterComponent/>
          : null 
      }
      <div className='table-container'>
        {
          viewingTab === 'flagged'
            ? <FlaggedTableComponent setViewingTab={setViewingTab} viewingTab={viewingTab}/>
            : <SingleUserDetailsComponent setViewingTab={setViewingTab} viewingTab={viewingTab}/>
        }

      </div>
    </div>
  )
}

export default FlaggedScreen
