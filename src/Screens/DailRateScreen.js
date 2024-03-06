import React, { useContext, useState } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import TopBarComponent from '../Components/TopBarComponent';
import FilterComponent from '../Components/FilterComponent';
import DailyRatesTableComponent from '../Components/DailyRatesTableComponent'
import DailyRateTopBarComponent from '../Components/DailyRateTopBarComponent';

const DailRateScreen = () => {

  const { theme } = useTheme()
  const { tableFilter, toggleTableFilter } = useApp()

  const [searchTerm, setSearchTerm] = useState('')
  const [activeSearch, setActiveSearch] = useState(false)

  return (
    <div className={`content-container-${theme}`}>
      <DailyRateTopBarComponent activeSearch={activeSearch} setActiveSearch={setActiveSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className='table-container'>
        <DailyRatesTableComponent searchTerm={searchTerm}/>
      </div>
    </div>
  )
}

export default DailRateScreen
