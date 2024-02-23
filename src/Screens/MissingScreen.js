import React, { useState } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import TopBarComponent from '../Components/TopBarComponent';
import FilterComponent from '../Components/FilterComponent';
import MissingTableComponent from '../Components/MissingTableComponent';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SingleUserDetailsComponent from '../Components/SingleUserDetailsComponent';

const MissingScreen = () => {

  const { theme } = useTheme()
  const { tableFilter, toggleTableFilter } = useApp()

  const [viewingTab, setViewingTab] = useState('missing')

  return (
    <div className={`content-container-${theme}`}>
      {
        viewingTab === 'missing'
          ? <TopBarComponent />
          : <div onClick={() => {setViewingTab('missing')}} className={`top-bar-${theme}`}>
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
          viewingTab === 'missing'
            ? <MissingTableComponent setViewingTab={setViewingTab} viewingTab={viewingTab}/>
            : <SingleUserDetailsComponent setViewingTab={setViewingTab} viewingTab={viewingTab}/>
        }

      </div>
    </div>
  )
}

export default MissingScreen
