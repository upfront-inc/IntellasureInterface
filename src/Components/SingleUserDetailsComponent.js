import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import '../Css/usertable.css'
import CareTableComponent from './CareTableComponent'
import FinancialTableComponent from './FinancialTableComponent'

const SingleUserDetailsComponent = () => {

  const { theme } = useTheme()

  return (
    <div className='user-parent'>
      <div className='user-row'>
        <div className='user-header'>
          <p className='user-name'>John Doe</p>
        </div>
      </div>
      <div className='user-row'>
        <div className='user-info'>
          <p className='user-info-text'>Anthem Blue Cross Blue Sheild Calfornia</p>
          <p style={{marginLeft: '8px', marginRight: '8px'}}>|</p>
          <p className='user-info-text'>SPX</p>
          <p style={{marginLeft: '8px', marginRight: '8px'}}>|</p>
          <p className='user-info-text'>SPX2434982592</p>
          <p style={{marginLeft: '8px', marginRight: '8px'}}>|</p>
          <p className='user-info-text'>In Network</p>
        </div>
      </div>
      <div className='user-row-tables'>
        <div className='user-table margins'>
          <div>
            <CareTableComponent />
          </div>
        </div>
        <div className='user-table'>
          <FinancialTableComponent />
        </div>
      </div>
    </div>
  )
}

export default SingleUserDetailsComponent
