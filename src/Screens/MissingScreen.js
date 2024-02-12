import React, { useContext } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import TopBarComponent from '../Components/TopBarComponent';
import FilterComponent from '../Components/FilterComponent';
import MissingTableComponent from '../Components/MissingTableComponent';

const MissingScreen = () => {

  const { theme } = useTheme()
  const { tableFilter, toggleTableFilter } = useApp()

  return (
    <div className={`content-container-${theme}`}>
      <TopBarComponent />
      {
        tableFilter 
          ? <FilterComponent/>
          : null 
      }
      <div className='table-container'>
        <MissingTableComponent />
      </div>
    </div>
  )
}

export default MissingScreen
