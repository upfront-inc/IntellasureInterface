import React from 'react'
import '../Css/Content.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

const TopBarAddComponent = (props) => {
  const {page, nextPage, previousPage} = props

  const { theme } = useTheme()
  const { toggleShowAddIntakeRecord } = useApp()

  return (
    <div className={`top-bar-${theme}`}>
      <div onClick={() => {toggleShowAddIntakeRecord()}}>
        <p className='filter-text'>Add Record</p>
      </div>
    </div>
  )
}

export default TopBarAddComponent
