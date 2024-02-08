import React, { useContext } from 'react'
import '../Css/Content.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import TopBarComponent from '../Components/TopBarComponent';
import FilterComponent from '../Components/FilterComponent';

const BillingDetailsScreen = () => {

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
      <p>Billing Details</p>
    </div>
  )
}

export default BillingDetailsScreen
