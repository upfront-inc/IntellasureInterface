import React from 'react'
import '../Css/Content.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

const ClaimTopBarComponent = (props) => {
  const {toggleViewedResults} = props

  const { theme } = useTheme()
  const { toggleShowAddIntakeRecord } = useApp()

  return (
    <div className={`top-bar-${theme}`}>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('all')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>ALL</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('paid')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>PAID</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('rejected')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>REJECTED AT INSURANCE</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('denied')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>DENIED AT INSURANCE</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('sent')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>SEND TO INSURANCE</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('atInsurance')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>CLAIM AT INSURANCE</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('pending')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>PENDING INSURANCE AUTH</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('writeoff')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>WRITEOFF</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('balance')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>BALANCE DUE PATIENT</p>
      </div>
    </div>
  )
}

export default ClaimTopBarComponent
