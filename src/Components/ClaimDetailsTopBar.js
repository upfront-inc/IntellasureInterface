import React from 'react'
import '../Css/Content.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

const ClaimDetailsTopBar = (props) => {
  const {setViewingTab} = props

  const { theme } = useTheme()
  const { toggleShowAddIntakeRecord } = useApp()

  return (
    <div className={`top-bar-${theme}`}>
      <div style={{}} onClick={() => {setViewingTab('claims')}}>
        <FontAwesomeIcon icon={faAnglesLeft} height={24} width={24} color='#0b8ec4' />
      </div>
    </div>
  )
}

export default ClaimDetailsTopBar
