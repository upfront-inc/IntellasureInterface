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
      <div className={`top-bar-${theme}`}>
        <FontAwesomeIcon onClick={() => {previousPage()}} style={{marginRight: '12px'}} icon={faChevronLeft}/>
          {
            page > 1
              ? <p style={{marginRight: '8px', fontSize: '16px'}}>{page - 1}</p>
              : null
          } 
          <p style={{fontSize: '20px'}}>{page}</p>
          {
            page < 20
              ? <p style={{marginLeft: '8px', fontSize: '16px'}}>{page + 1}</p>
              : null
          }
        <FontAwesomeIcon onClick={() => {nextPage()}} style={{marginLeft: '12px'}}  icon={faChevronRight}/>
      </div>
    </div>
  )
}

export default TopBarAddComponent
