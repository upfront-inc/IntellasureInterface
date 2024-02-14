import React, { useContext } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import TopBarComponent from '../Components/TopBarComponent';
import FilterComponent from '../Components/FilterComponent';
import MissingTableComponent from '../Components/MissingTableComponent';
import IntakeTableComponent from '../Components/IntakeTableComponent';
import TopBarAddComponent from '../Components/TopBarAddComponent';

const IntakeScreen = () => {

  const { theme } = useTheme()
  const { tableFilter } = useApp()

  return (
    <div className={`content-container-${theme}`}>
      <TopBarAddComponent />
      {
        tableFilter 
          ? <FilterComponent/>
          : null 
      }
      <div className='table-container'>
        <IntakeTableComponent />
      </div>
    </div>
  )
}

export default IntakeScreen
