import React, { useContext } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import TopBarComponent from '../Components/TopBarComponent';
import FilterComponent from '../Components/FilterComponent';
import MissingTableComponent from '../Components/MissingTableComponent';
import FlaggedTableComponent from '../Components/FlaggedTableComponent';
import TicketsTableComponent from '../Components/TicketsTableComponent';

const TicketsScreen = () => {

  const { theme } = useTheme()
  const { tableFilter, toggleTableFilter } = useApp()

  return (
    <div className={`content-container-${theme}`}>
      <div className='table-container'>
        <TicketsTableComponent/>
      </div>
    </div>
  )
}

export default TicketsScreen
